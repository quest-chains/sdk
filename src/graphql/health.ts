/* eslint-disable no-console, no-await-in-loop */
import { gql, request } from 'graphql-request';

import { SUPPORTED_NETWORK_INFO } from './client';

const GRAPH_HEALTH_ENDPOINT = 'https://api.thegraph.com/index-node/graphql';

const statusQuery = gql`
  query getSubgraphStatus($subgraph: String!) {
    status: indexingStatusForCurrentVersion(subgraphName: $subgraph) {
      chains {
        latestBlock {
          number
        }
      }
    }
  }
`;

const getLatestBlock = async (subgraph: string): Promise<number> => {
  const data = await request(GRAPH_HEALTH_ENDPOINT, statusQuery, {
    subgraph,
  });
  return data.status.chains[0].latestBlock.number;
};

const UPDATE_INTERVAL = 10000;

class SubgraphHealthStore {
  graphHealth: Record<string, number> = {};

  constructor() {
    // console.debug('@quest-chains/sdk: health store init');
    this.updateSubgraphHealth();
  }

  public async updateSubgraphHealth() {
    await Promise.all(
      Object.values(SUPPORTED_NETWORK_INFO).map(async info => {
        this.graphHealth[info.chainId] = await getLatestBlock(info.subgraphName);
      }),
    );
    // console.debug('@quest-chains/sdk: updated graph health:', this.graphHealth);
    setTimeout(() => this.updateSubgraphHealth(), UPDATE_INTERVAL);
  }

  status() {
    return this.graphHealth;
  }
}

const HealthStoreSingleton = (function () {
  let instance: SubgraphHealthStore;

  function createInstance() {
    return new SubgraphHealthStore();
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const getSubgraphStatus = () => HealthStoreSingleton.getInstance().status();

const initSubgraphHealthStore = getSubgraphStatus;

if (typeof window !== 'undefined') {
  initSubgraphHealthStore();
}

export const getSubgraphLatestBlock = (chainId: string): number => getSubgraphStatus()[chainId];
