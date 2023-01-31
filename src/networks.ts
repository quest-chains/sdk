export const Networks: Record<string, string> = {
  POLYGON: '0x89',
  GNOSIS_CHAIN: '0x64',
  GOERLI: '0x5',
  MUMBAI: '0x13881',
};

export type Values<T> = T[keyof T];

export type Network = keyof typeof Networks;

export type NetworkId = Values<typeof Networks>;

export const NetworkInfo: Record<NetworkId, { subgraphName: string; subgraphUrl: string }> = {
  [Networks.POLYGON]: {
    subgraphName: 'dan13ram/quest-chains-polygon',
    subgraphUrl: 'https://api.thegraph.com/subgraphs/name/dan13ram/quest-chains-polygon',
  },
  [Networks.GNOSIS_CHAIN]: {
    subgraphName: 'dan13ram/quest-chains-xdai',
    subgraphUrl: 'https://api.thegraph.com/subgraphs/name/dan13ram/quest-chains-xdai',
  },
  [Networks.GOERLI]: {
    subgraphName: 'dan13ram/quest-chains-goerli',
    subgraphUrl: 'https://api.thegraph.com/subgraphs/name/dan13ram/quest-chains-goerli',
  },
  [Networks.MUMBAI]: {
    subgraphName: 'dan13ram/quest-chains-mumbai',
    subgraphUrl: 'https://api.thegraph.com/subgraphs/name/dan13ram/quest-chains-mumbai',
  },
};

export const NetworkIds: Array<NetworkId> = Object.values(Networks);
