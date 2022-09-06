import { getClient } from './client';
import {
  QuestChainReviewInfoFragment,
  QuestChainsReviewStatusDocument,
  QuestChainsReviewStatusQuery,
  QuestChainsReviewStatusQueryVariables,
} from './types';

export const getQuestChainsToReview = async (
  chainId: string,
  address: string,
): Promise<QuestChainReviewInfoFragment[]> => {
  const { data, error } = await getClient(chainId)
    .query<QuestChainsReviewStatusQuery, QuestChainsReviewStatusQueryVariables>(QuestChainsReviewStatusDocument, {
      reviewer: address.toLowerCase(),
      limit: 1000,
    })
    .toPromise();
  if (!data) {
    if (error) {
      throw error;
    }
    return [];
  }
  return data.questChains.filter(c => c.questsInReview.length > 0);
};
