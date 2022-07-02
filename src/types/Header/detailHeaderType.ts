import { ReactElement } from 'react';
import { dropDownItem } from '../Dropdown/dropDownItemType';

export type detailHeaderType = {
  backPath: string;
  itemList?: dropDownItem[];
  name: string;
  title: string;
  badged?: ReactElement;
};
