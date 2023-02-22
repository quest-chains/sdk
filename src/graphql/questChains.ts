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
  QuestChainDisplayFragment,
  QuestChainInfoQuery,
  QuestChainInfoQueryVariables,
  QuestChainSearchBySlugDocument,
  QuestChainSearchBySlugQuery,
  QuestChainSearchBySlugQueryVariables,
  QuestChainValidateSlugDocument,
  QuestChainValidateSlugQuery,
  QuestChainValidateSlugQueryVariables,
  QuestChainsFromAddressesQuery,
  QuestChainsFromAddressesQueryVariables,
  QuestChainsFromAddressesDocument,
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

export const getQuestChainsFromAddresses = async (
  chainId: string,
  addresses: string[],
): Promise<QuestChainDisplayFragment[]> => {
  const { data, error } = await getClient(chainId)
    .query<QuestChainsFromAddressesQuery, QuestChainsFromAddressesQueryVariables>(QuestChainsFromAddressesDocument, {
      addresses: addresses.map(a => a.toLowerCase()),
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

export const getQuestChainFromSlug = async (chainId: string, slug: string): Promise<QuestChainInfoFragment | null> => {
  const { data, error } = await getClient(chainId)
    .query<QuestChainSearchBySlugQuery, QuestChainSearchBySlugQueryVariables>(QuestChainSearchBySlugDocument, {
      slug: slug.toLowerCase(),
    })
    .toPromise();
  if (!data) {
    if (error) {
      throw error;
    }
    return null;
  }
  return data.questChains[0] ?? null;
};

export const validateQuestChainSlug = async (chainId: string, slug: string): Promise<boolean> => {
  const { data, error } = await getClient(chainId)
    .query<QuestChainValidateSlugQuery, QuestChainValidateSlugQueryVariables>(QuestChainValidateSlugDocument, {
      slug: slug.toLowerCase(),
    })
    .toPromise();
  if (!data) {
    if (error) {
      throw error;
    }
    return false;
  }
  return data.questChains[0] ? false : true;
};

export const getCreatedQuestChains = async (chainId: string, address: string): Promise<QuestChainDisplayFragment[]> => {
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
