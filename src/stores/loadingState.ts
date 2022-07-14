import { atom } from 'recoil';

export const loadingState = atom<boolean>({
  key: 'IS_LOADING',
  default: false,
});
