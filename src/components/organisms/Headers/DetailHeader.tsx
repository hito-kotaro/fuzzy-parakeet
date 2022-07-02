import React, { VFC } from 'react';
import { detailHeaderType } from '../../../types/Header/detailHeaderType';
import BackButton from '../../atoms/Buttons/BackButton';
import IconLabel from '../../atoms/Labels/IconLabel';
import HeaderLink from '../../atoms/Links/HeaderLink';

type Props = {
  headerData: detailHeaderType;
  toggleIsOpen: () => void;
};

const DetailHeader: VFC<Props> = (props) => {
  const { headerData, toggleIsOpen } = props;
  return (
    <div className=" lead sticky top-0 z-50 bg-base drop-shadow-md p-2">
      <div className="flex ">
        <BackButton onClick={toggleIsOpen} />
        {/* <div className="ml-auto">
          <DropdownButton itemList={dropdownItems} />
        </div> */}
      </div>
      <div className="h-3" />
      <div className="flex">
        <IconLabel size="small" name={headerData.name} />
        <div className="ml-auto text-gray-400">2022/12/31</div>
      </div>
      <div className="h-3" />
      <h2 className="text-2xl font-medium">{headerData.title}</h2>
      <div className="h-3" />
    </div>
  );
};

export default DetailHeader;
