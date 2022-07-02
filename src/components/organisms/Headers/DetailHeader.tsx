import { Badge } from '@supabase/ui';
import React, { VFC } from 'react';
import { detailHeaderType } from '../../../types/Header/detailHeaderType';
import BackButton from '../../atoms/Buttons/BackButton';
import DropdownButton from '../../atoms/Buttons/DropdownButton';
import IconLabel from '../../atoms/Labels/IconLabel';

type Props = {
  headerData: any;
  toggleIsOpen: () => void;
};

const DetailHeader: VFC<Props> = (props) => {
  const { headerData, toggleIsOpen } = props;
  console.log(headerData);
  return (
    <div className=" lead sticky top-0 z-50 bg-base drop-shadow-md p-2">
      <div className="flex ">
        <BackButton onClick={toggleIsOpen} />
        <div className="ml-auto">
          <DropdownButton itemList={[]} />
        </div>
      </div>
      <div className="h-3" />
      <div className="flex">
        <IconLabel size="small" name={headerData?.iconName} />
        <div className="ml-auto text-gray-400">{headerData?.rightUpText}</div>
      </div>
      <div className="h-3" />
      <h2 className="text-2xl font-medium">{headerData?.topText}</h2>
      <div className="h-3" />
      <div>{headerData?.badges}</div>
    </div>
  );
};

export default DetailHeader;
