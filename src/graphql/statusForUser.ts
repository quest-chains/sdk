import { getClient } from './client';
import {
  QuestInfoFragment,
  QuestChainInfoFragment,
  QuestStatusInfoFragment,
  Status,
  StatusForUserDocument,
  StatusForUserQuery,
  StatusForUserQueryVariables,
} from './types';

export type UserStatus = {
  chain: QuestChainInfoFragment;
  updatedAt: Date;
  completed: number;
  total: number;
  questStatuses: { quest: QuestInfoFragment; status: Status }[];
};

export const getStatusForUser = async (chainId: string, address: string): Promise<UserStatus[]> => {
  const { data, error } = await getClient(chainId)
    .query<StatusForUserQuery, StatusForUserQueryVariables>(StatusForUserDocument, {
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

  const statuses: Record<string, QuestStatusInfoFragment[]> = {};
  data.questStatuses.forEach(qs => {
    const arr = statuses[qs.questChain.address] ?? [];
    statuses[qs.questChain.address] = [...arr, qs];
  });

  return Object.values(statuses)
    .filter(value => value.length !== 0)
    .map(value => {
      const chain = value[0].questChain;
      const total = chain.numQuests;
      const completed = value.filter(a => !a.quest.paused).reduce((t, a) => t + (a.status === 'pass' ? 1 : 0), 0);
      const updatedAt = value.filter(a => !a.quest.paused).reduce((t, a) => (t > a.updatedAt ? t : a.updatedAt), '0');
      const questStatuses = value
        .map(v => ({ quest: v.quest, status: v.status }))
        .sort((a, b) => Number(a.quest.questId) - Number(b.quest.questId));
      return { chain, completed, total, updatedAt: new Date(updatedAt), questStatuses };
    });
};
