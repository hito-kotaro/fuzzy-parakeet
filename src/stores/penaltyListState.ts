import { atom } from 'recoil';
import { penaltyType } from '../types/PenaltyType';

export const penaltyListState = atom<penaltyType[]>({
  key: 'PENALTY_LIST',
  default: [],
});
