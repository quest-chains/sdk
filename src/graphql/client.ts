import { Client, createClient, dedupExchange, fetchExchange } from 'urql';

export type NetworkInfo = {
  [chainId: string]: {
    chainId: string;
    subgraphName: string;
    subgraphUrl: string;
  };
};

export const SUPPORTED_NETWORK_INFO: NetworkInfo = {
  '0x5': {
    chainId: '0x5',
    subgraphName: 'quest-chains/quest-chains-goerli',
    subgraphUrl: 'https://api.thegraph.com/subgraphs/name/quest-chains/quest-chains-goerli',
  },
  '0xa': {
    chainId: '0xa',
    subgraphName: 'quest-chains/quest-chains-optimism',
    subgraphUrl: 'https://api.thegraph.com/subgraphs/name/quest-chains/quest-chains-optimism',
  },
  '0x64': {
    chainId: '0x64',
    subgraphName: 'quest-chains/quest-chains-gnosis',
    subgraphUrl: 'https://api.thegraph.com/subgraphs/name/quest-chains/quest-chains-gnosis',
  },
  '0x89': {
    chainId: '0x89',
    subgraphName: 'quest-chains/quest-chains-polygon',
    subgraphUrl: 'https://api.thegraph.com/subgraphs/name/quest-chains/quest-chains-polygon',
  },
  '0x13881': {
    chainId: '0x13881',
    subgraphName: 'quest-chains/quest-chains-mumbai',
    subgraphUrl: 'https://api.thegraph.com/subgraphs/name/quest-chains/quest-chains-mumbai',
  },
  '0xa4b1': {
    chainId: '0xa4b1',
    subgraphName: 'quest-chains/quest-chains-arbitrum',
    subgraphUrl: 'https://api.thegraph.com/subgraphs/name/quest-chains/quest-chains-arbitrum',
  },
  '0x66eed': {
    chainId: '0x66eed',
    subgraphName: 'quest-chains/quest-chains-arbitrum-goerli',
    subgraphUrl: 'https://api.thegraph.com/subgraphs/name/quest-chains/quest-chains-arbitrum-goerli',
  },
};

export const SUPPORTED_NETWORKS = Object.keys(SUPPORTED_NETWORK_INFO);

const clients: Record<string, Client> = Object.values(SUPPORTED_NETWORK_INFO).reduce<Record<string, Client>>(
  (o, info) => {
    o[info.chainId] = createClient({
      url: info.subgraphUrl,
      exchanges: [dedupExchange, fetchExchange],
    });
    return o;
  },
  {},
);

export const isSupportedNetwork = (chainId: string | undefined | null) =>
  chainId ? SUPPORTED_NETWORKS.includes(chainId) : false;

export const getClient = (chainId: string | undefined | null): Client => {
  if (!chainId || !isSupportedNetwork(chainId)) {
    throw new Error('Unsupported chainId');
  }
  return clients[chainId];
};
