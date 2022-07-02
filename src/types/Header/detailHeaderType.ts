import { ReactElement } from 'react';
import { dropDownItem } from '../Dropdown/dropDownItemType';

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
