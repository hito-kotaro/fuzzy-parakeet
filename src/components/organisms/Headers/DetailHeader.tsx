import { Badge } from '@supabase/ui';
import React, { VFC } from 'react';
import { dropDownItem } from '../../../types/Dropdown/dropDownItemType';
import { detailHeaderType } from '../../../types/Header/detailHeaderType';
import BackButton from '../../atoms/Buttons/BackButton';
import DropdownButton from '../../atoms/Buttons/DropdownButton';
import IconLabel from '../../atoms/Labels/IconLabel';

type Props = {
  headerData: detailHeaderType;
  closeDetail: () => void;
  dropDownItems: dropDownItem[];
};

const DetailHeader: VFC<Props> = (props) => {
  const { headerData, closeDetail, dropDownItems } = props;
  return (
    <div className=" lead sticky top-0 z-50 bg-base drop-shadow-md p-2">
      <div className="flex ">
        <BackButton onClick={closeDetail} />
        <div className="ml-auto">
          <DropdownButton itemList={dropDownItems} />
        </div>
      </div>
      <div className="h-3" />
      <div className="flex">
        <IconLabel size="small" name={headerData?.name} />
        <div className="ml-auto text-gray-400">{headerData?.date}</div>
      </div>
      <div className="h-3" />
      <h2 className="text-2xl font-medium">{headerData?.title}</h2>
      <div className="h-3" />
      <div>
        <Badge color={headerData.status ? 'green' : 'red'}>
          {headerData.status ? 'Open' : 'Close'}
        </Badge>
        <Badge>{headerData.message}</Badge>
      </div>
    </div>
  );
};

export default DetailHeader;
