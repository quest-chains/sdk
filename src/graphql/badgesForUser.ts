import { getClient } from './client';
import { BadgesForUserDocument, BadgesForUserQuery, BadgesForUserQueryVariables } from './types';

export type UserBadges = {
  tokens: {
    name?: string | null | undefined;
    description?: string | null | undefined;
    imageUrl?: string | null | undefined;
    tokenAddress: string | null | undefined;
    tokenId: string | null | undefined;
    questChain: {
      address: string | null | undefined;
      slug?: string | null | undefined;
    };
  }[];
  chainId: string;
};

export const getBadgesForUser = async (chainId: string, address: string): Promise<UserBadges | null> => {
  const { data, error } = await getClient(chainId)
    .query<BadgesForUserQuery, BadgesForUserQueryVariables>(BadgesForUserDocument, {
      address: address.toLowerCase(),
    })
    .toPromise();
  if (!data?.user) {
    if (error) {
      throw error;
    }
    return null;
  }

  const {
    user: { tokens },
  } = data;

  return {
    chainId,
    tokens,
  };
};
