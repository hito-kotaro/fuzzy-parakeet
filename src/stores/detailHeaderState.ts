import { atom } from 'recoil';
import { detailHeaderType } from '../types/Header/detailHeaderType';

const defaultData: detailHeaderType = {
  backPath: '',
  name: '',
  title: '',
};

export const detailHeaderState = atom<detailHeaderType>({
  key: 'DETAIL_HEADER_DATA',
  default: defaultData,
});
