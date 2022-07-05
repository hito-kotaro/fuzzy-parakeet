import { Badge } from '@supabase/ui';
import React, { VFC } from 'react';
import { dropDownItem } from '../../../types/Dropdown/dropDownItemType';
import { detailHeaderType } from '../../../types/Header/detailHeaderType';
import { SelectItem } from '../../../types/Select/SelectItemType';
import BackButton from '../../atoms/Buttons/BackButton';
import DropdownButton from '../../atoms/Buttons/DropdownButton';
import SelectForm from '../../atoms/InputForms/SelectForm/SelectForm';
import IconLabel from '../../atoms/Labels/IconLabel';

type Props = {
  name: string;
  date: string;
  title: string;
  closeDetail: () => void;
  dropDownItems: dropDownItem[];
};

const DetailHeader: VFC<Props> = (props) => {
  const { name, date, title, closeDetail, dropDownItems } = props;
  return (
    <div className="sticky top-0 z-50 bg-base drop-shadow-md p-2 w-full">
      <div className="flex ">
        <BackButton onClick={closeDetail} />
        <div className="ml-auto">
          <DropdownButton itemList={dropDownItems} />
        </div>
      </div>
      <div className="h-3" />
      <div className="flex">
        <IconLabel size="small" name={name} />
        <div className="ml-auto text-gray-400">{date}</div>
      </div>
      <div className="h-3" />
      <h2 className="text-2xl font-medium">{title}</h2>
      <div className="h-3" />
    </div>
  );
};

export default DetailHeader;
