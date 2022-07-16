import { atom } from 'recoil';
import { approveRequestType } from '../types/approveRequestType';

export const approveRequestState = atom<approveRequestType[]>({
  key: 'APPROVE_REQUEST_LIST',
  default: [],
});
