import { ReactElement } from 'react';
import { dropDownItem } from './Dropdown/dropDownItemType';

export type detailTemplateType = {
  id: number;
  name: string;
  title: string;
  description: string;
  date: string;
  status: boolean;
  message: string;
  badges?: ReactElement;
  itemList?: dropDownItem[];
};
