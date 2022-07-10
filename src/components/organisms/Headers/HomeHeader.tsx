import React, { VFC } from 'react';
import { dropDownItem } from '../../../types/dropdownType';
import DropdownButton from '../../atoms/Buttons/DropdownButton';

type Props = {
  title: string;
  dropDownItems: dropDownItem[];
};
const HomeHeader: VFC<Props> = (props) => {
  const { title, dropDownItems } = props;

  return (
    <div className="sticky top-0 z-50 bg-base drop-shadow-md p-2">
      <div className="flex px-3">
        <div className="mt-5">
          <h1 className="text-3xl font-semibold">{title}</h1>
        </div>
        <div className="ml-auto">
          <DropdownButton itemList={dropDownItems} />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
