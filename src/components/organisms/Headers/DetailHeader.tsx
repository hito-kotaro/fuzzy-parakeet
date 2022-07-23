import React, { VFC } from 'react';
import { dropDownItem } from '../../../types/dropdownType';
import BackButton from '../../atoms/Buttons/BackButton';
import DropdownButton from '../../atoms/Buttons/DropdownButton';
import IconLabel from '../../atoms/Labels/IconLabel';

type Props = {
  name: string;
  date: string;
  title: string;
  closeDetail: () => void;
  dropDownItems: dropDownItem[];
  isDropdown?: boolean;
  iconSize?: 'small' | 'medium' | 'large';
  isTeam?: boolean;
};

const DetailHeader: VFC<Props> = (props) => {
  const { name, date, title, closeDetail, dropDownItems, isDropdown, iconSize, isTeam } =
    props;
  return (
    <div className="sticky top-0 z-50 bg-base drop-shadow-md p-2 w-full">
      <div className="flex ">
        <BackButton onClick={closeDetail} />
        {dropDownItems.length > 0 ? (
          <div className="ml-auto">
            <DropdownButton itemList={dropDownItems} />
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="h-3" />
      <div className="flex">
        <IconLabel size={iconSize || 'small'} name={name} isTeam={isTeam} />
        <div className="ml-auto text-gray-400">{date}</div>
      </div>
      <div className="h-3" />
      <h2 className="text-2xl font-medium">{title}</h2>
      <div className="h-3" />
    </div>
  );
};

export default DetailHeader;
