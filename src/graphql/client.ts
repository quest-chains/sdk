import { Client, createClient, dedupExchange, fetchExchange } from 'urql';

export type NetworkInfo = {
  [chainId: string]: {
    chainId: string;
    subgraphUrl: string;
  };
};

export const SUPPORTED_NETWORK_INFO: NetworkInfo = {
  '0x89': {
    chainId: '0x89',
    subgraphUrl:
      'https://api.thegraph.com/subgraphs/name/dan13ram/quest-chains-polygon',
  },
  '0x64': {
    chainId: '0x64',
    subgraphUrl:
      'https://api.thegraph.com/subgraphs/name/dan13ram/quest-chains-xdai',
  },
  '0x4': {
    chainId: '0x4',
    subgraphUrl:
      'https://api.thegraph.com/subgraphs/name/dan13ram/quest-chains-rinkeby',
  },
  '0x13881': {
    chainId: '0x13881',
    subgraphUrl:
      'https://api.thegraph.com/subgraphs/name/dan13ram/quest-chains-mumbai',
  },
};

export const SUPPORTED_NETWORKS = Object.keys(SUPPORTED_NETWORK_INFO);

const clients: Record<string, Client> = Object.values(
  SUPPORTED_NETWORK_INFO,
).reduce<Record<string, Client>>((o, info) => {
  o[info.chainId] = createClient({
    url: info.subgraphUrl,
    exchanges: [dedupExchange, fetchExchange],
  });
  return o;
}, {});

export const isSupportedNetwork = (chainId: string | undefined | null) =>
  chainId ? SUPPORTED_NETWORKS.includes(chainId) : false;

export const getClient = (chainId: string | undefined | null): Client => {
  if (!chainId || !isSupportedNetwork(chainId)) {
    throw new Error('Unsupported chainId');
  }
  return clients[chainId];
};
