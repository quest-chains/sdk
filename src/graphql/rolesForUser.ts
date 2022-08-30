import { getClient } from './client';
import {
  QuestChainInfoFragment,
  RolesForUserDocument,
  RolesForUserQuery,
  RolesForUserQueryVariables,
} from './types';

export type RolesForUser = {
  ownerOf: QuestChainInfoFragment[];
  adminOf: QuestChainInfoFragment[];
  editorOf: QuestChainInfoFragment[];
  reviewerOf: QuestChainInfoFragment[];
  chainId: string;
};

export const getRolesForUser = async (
  chainId: string,
  address: string,
): Promise<RolesForUser | null> => {
  const { data, error } = await getClient(chainId)
    .query<RolesForUserQuery, RolesForUserQueryVariables>(
      RolesForUserDocument,
      {
        address: address.toLowerCase(),
      },
    )
    .toPromise();
  if (!data?.user) {
    if (error) {
      throw error;
    }
    return null;
  }

  const { user } = data;

  return {
    chainId,
    ...user,
  };
};
