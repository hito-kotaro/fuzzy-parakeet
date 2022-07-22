import React, { VFC } from 'react';
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
  const { data, close, dropDownMenu } = props;

  return (
    <div className="bg-base h-full">
      <DetailHeader
        closeDetail={close}
        // ロールによって表示するメニューを変える。
        name={data.name}
        title={data.title}
        date={data.date}
        isDropdown
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
