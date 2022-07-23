import React, { useEffect, useState, VFC } from 'react';
import { detailTemplateType } from '../../types/detailTemplateType';
import { dropDownItem } from '../../types/dropdownType';
import DetailCard from '../organisms/Cards/DetailCard/DetailCard';
import DetailHeader from '../organisms/Headers/DetailHeader';

type Props = {
  data: detailTemplateType;
  close: () => void;
  dropDownMenu: dropDownItem[];
};
const DetailTemplate: VFC<Props> = (props) => {
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const { data, close, dropDownMenu } = props;

  useEffect(() => {
    if (dropDownMenu.length > 0) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  }, [dropDownMenu]);

  return (
    <div className="bg-base h-full">
      <DetailHeader
        closeDetail={close}
        name={data.name}
        title={data.title}
        date={data.date}
        isDropdown={isDropdown}
        dropDownItems={dropDownMenu}
      />

      <div className="h-5" />
      <div>
        <DetailCard
          ownerName={data.name}
          date={data.date}
          description={data.description}
          badgeText="owner"
          badgeColor="blue"
        />
      </div>
    </div>
  );
};

export default DetailTemplate;
