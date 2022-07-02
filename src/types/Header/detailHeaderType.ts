import { ReactElement } from 'react';
import { dropDownItem } from '../Dropdown/dropDownItemType';

export type detailHeaderType = {
  itemList?: dropDownItem[];
  name: string;
  title: string;
  rightTopText: string;
  badges?: ReactElement;
};
