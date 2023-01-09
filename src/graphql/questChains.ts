import { getClient } from './client';
import {
  CreatedQuestChainsInfoDocument,
  CreatedQuestChainsInfoQuery,
  CreatedQuestChainsInfoQueryVariables,
  QuestChainAddressesDocument,
  QuestChainAddressesQuery,
  QuestChainAddressesQueryVariables,
  QuestChainInfoDocument,
  QuestChainInfoFragment,
  QuestChainInfoQuery,
  QuestChainInfoQueryVariables,
  QuestChainSearchBySlugDocument,
  QuestChainSearchBySlugQuery,
  QuestChainSearchBySlugQueryVariables,
  QuestChainSearchDocument,
  QuestChainSearchQuery,
  QuestChainSearchQueryVariables,
} from './types';

export const getQuestChainAddresses = async (chainId: string, limit: number): Promise<string[]> => {
  const { data, error } = await getClient(chainId)
    .query<QuestChainAddressesQuery, QuestChainAddressesQueryVariables>(QuestChainAddressesDocument, {
      limit,
    })
    .toPromise();
  if (!data) {
    if (error) {
      throw error;
    }
    return [];
  }
  return data.questChains.map(a => a.address);
};

export const getQuestChainInfo = async (chainId: string, address: string): Promise<QuestChainInfoFragment | null> => {
  const { data, error } = await getClient(chainId)
    .query<QuestChainInfoQuery, QuestChainInfoQueryVariables>(QuestChainInfoDocument, {
      address: address.toLowerCase(),
    })
    .toPromise();
  if (!data) {
    if (error) {
      throw error;
    }
    return null;
  }
  return data.questChain ?? null;
};

export const getQuestChainsFromSearch = async (chainId: string, search: string): Promise<QuestChainInfoFragment[]> => {
  const { data, error } = await getClient(chainId)
    .query<QuestChainSearchQuery, QuestChainSearchQueryVariables>(QuestChainSearchDocument, {
      search: search.toLowerCase(),
      limit: 1000,
    })
    .toPromise();
  if (!data) {
    if (error) {
      throw error;
    }
    return [];
  }
  return data.questChains;
};

export const getQuestChainsFromSlug = async (chainId: string, slug: string): Promise<QuestChainInfoFragment[]> => {
  const { data, error } = await getClient(chainId)
    .query<QuestChainSearchBySlugQuery, QuestChainSearchBySlugQueryVariables>(QuestChainSearchBySlugDocument, {
      slug: slug.toLowerCase(),
    })
    .toPromise();
  if (!data) {
    if (error) {
      throw error;
    }
    return [];
  }
  return data.questChains;
};

export const getCreatedQuestChains = async (chainId: string, address: string): Promise<QuestChainInfoFragment[]> => {
  const { data, error } = await getClient(chainId)
    .query<CreatedQuestChainsInfoQuery, CreatedQuestChainsInfoQueryVariables>(CreatedQuestChainsInfoDocument, {
      user: address.toLowerCase(),
      limit: 1000,
    })
    .toPromise();
  if (!data) {
    if (error) {
      throw error;
    }
    return [];
  }
  return data.questChains;
};
