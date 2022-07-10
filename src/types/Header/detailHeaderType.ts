import { ReactElement } from 'react';
import { dropDownItem } from '../dropdownType';

export type detailHeaderType = {
  id: number;
  name: string;
  title: string;
  date: string;
  status: boolean;
  message: string;
  badges?: ReactElement;
  itemList?: dropDownItem[];
};
