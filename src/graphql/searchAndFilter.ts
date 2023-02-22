import { getClient } from './client';
import {
  OrderDirection,
  QuestChainDisplayFragment,
  QuestChainSearchDocument,
  QuestChainSearchQuery,
  QuestChainSearchQueryVariables,
  QuestChain_OrderBy,
} from './types';

export type QuestChainFiltersInfo = {
  search?: string;
  onlyEnabled?: boolean;
  onlyDisabled?: boolean;
  categories?: string[];
  orderBy?: QuestChain_OrderBy;
  orderDirection?: OrderDirection;
  skip?: number;
  limit?: number;
};

export const getQuestChainsFromFilters = async (
  chainId: string,
  filters: QuestChainFiltersInfo,
): Promise<QuestChainDisplayFragment[]> => {
  const query: QuestChainSearchQueryVariables = {};
  query.where = {};
  if (filters.search) {
    query.where.search_contains = filters.search;
  }
  if (filters.onlyEnabled) {
    query.where.paused = false;
  } else if (filters.onlyDisabled) {
    query.where.paused = true;
  }
  if ((filters.categories?.length ?? 0) !== 0) {
    query.where.categories_contains_nocase = filters.categories;
  }
  if (filters.orderBy) {
    query.orderBy = filters.orderBy;
  }
  if (filters.orderDirection) {
    query.orderDirection = filters.orderDirection;
  }
  query.skip = filters.skip ?? 0;
  query.limit = filters.limit ?? 1000;

  const { data, error } = await getClient(chainId)
    .query<QuestChainSearchQuery, QuestChainSearchQueryVariables>(QuestChainSearchDocument, query)
    .toPromise();
  if (!data) {
    if (error) {
      throw error;
    }
    return [];
  }
  return data.questChains;
};
