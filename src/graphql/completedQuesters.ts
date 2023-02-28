import { getClient } from './client';
import {
  QuestChainCompletedInfoDocument,
  QuestChainCompletedInfoFragment,
  QuestChainCompletedInfoQuery,
  QuestChainCompletedInfoQueryVariables,
} from './types';

export const getQuestChainCompletedInfo = async (
  chainId: string,
  address: string,
): Promise<QuestChainCompletedInfoFragment | null> => {
  const { data, error } = await getClient(chainId)
    .query<QuestChainCompletedInfoQuery, QuestChainCompletedInfoQueryVariables>(QuestChainCompletedInfoDocument, {
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
