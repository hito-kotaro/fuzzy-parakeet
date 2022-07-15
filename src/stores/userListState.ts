import { atom } from 'recoil';
import { userType } from '../types/usersType';

export const userListState = atom<userType[]>({
  key: 'USER_LIST',
  default: [],
});
