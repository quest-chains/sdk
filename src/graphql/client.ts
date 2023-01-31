import { Client, createClient, dedupExchange, fetchExchange } from 'urql';

import { NetworkIds, NetworkInfo } from '../networks';

const clients: Record<string, Client> = Object.entries(NetworkInfo).reduce<Record<string, Client>>(
  (o, [chainId, info]) => {
    o[chainId] = createClient({
      url: info.subgraphUrl,
      exchanges: [dedupExchange, fetchExchange],
    });
    return o;
  },
  {},
);

export const isSupportedNetwork = (chainId: string | undefined | null) =>
  chainId ? NetworkIds.includes(chainId) : false;

export const getClient = (chainId: string | undefined | null): Client => {
  if (!chainId || !isSupportedNetwork(chainId)) {
    throw new Error('Unsupported chainId');
  }
  return clients[chainId];
};
