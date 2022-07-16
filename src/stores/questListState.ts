import { atom } from 'recoil';
import { questType } from '../types/Quest/QuestType';

export const questListState = atom<questType[]>({
  key: 'QUEST_LIST',
  default: [],
});
