import { atom } from 'recoil';
import { smallUserType } from '../types/usersType';

const defaultUser: smallUserType = {
  id: 0,
  name: '',
  team: '',
  role: '',
  poinrt: 0,
};

export const userInfoState = atom<smallUserType>({
  key: 'USER_INFO',
  default: defaultUser,
});
