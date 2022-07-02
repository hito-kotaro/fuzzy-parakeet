import React, { ReactElement, VFC } from 'react';
import { Badge } from '@supabase/ui';
import DropdownButton from '../atoms/Buttons/DropdownButton';
import HeaderLink from '../atoms/Links/HeaderLink';
import IconLabel from '../atoms/Labels/IconLabel';

type Props = {
  topText: string | ReactElement;
  headerTitle: string;
  badgeArea: ReactElement;
  dropdownItems: [];
  name: string;
};

const DetailTemplate: VFC<Props> = (props) => {
  const { topText, headerTitle, badgeArea, dropdownItems, name } = props;
  return (
    <div className=" lead sticky top-0 z-50 bg-base drop-shadow-md p-2">
      <div className="flex ">
        <HeaderLink to="/" linkText="" backIcon />
        <div className="w-full text-center leading-8">{headerTitle}</div>
        <div className="ml-auto">
          <DropdownButton itemList={dropdownItems} />
        </div>
      </div>

      <div className="h-3" />
      <div className="flex">
        <IconLabel size="small" name={name} />
        <div className="ml-auto text-gray-400">2022/12/31</div>
      </div>
      <div className="h-3" />
      <h2 className="text-2xl font-medium">Title</h2>
      <div className="h-3" />
    </div>
  );
};

export default DetailTemplate;
