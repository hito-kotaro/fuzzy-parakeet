import { atom } from 'recoil';
import { detailHeaderType } from '../types/Header/detailHeaderType';

const defaultData: detailHeaderType = {
  backPath: '',
  name: '',
  title: '',
};

export const authState = atom<detailHeaderType>({
  key: 'DETAIL_HEADER_DATA',
  default: defaultData,
});
