import React, { VFC } from 'react';
import { detailTemplateType } from '../../types/detailTemplateType';
import { dropDownItem } from '../../types/Dropdown/dropDownItemType';
import DetailCard from '../organisms/Cards/DetailCard/DetailCard';
import DetailHeader from '../organisms/Headers/DetailHeader';

type Props = {
  data: detailTemplateType;
  close: () => void;
  dropDownMenu: dropDownItem[];
};
const DetailTemplate: VFC<Props> = (props) => {
  const { data, close, dropDownMenu } = props;
  const role = 1;

  const questReport = () => {
    console.log('report');
  };

  const questEdit = () => {
    console.log('edit');
  };

  const questClose = () => {
    console.log('close');
  };

  return (
    <div className="w-full h-screen overflow-scroll bg-base">
      <DetailHeader
        closeDetail={close}
        // ロールによって表示するメニューを変える。
        dropDownItems={dropDownMenu}
        name={data.name}
        title={data.title}
        date={data.date}
      />

      <div className="h-5" />
      <div>
        <DetailCard
          ownerName={data.name}
          description={data.description}
          badgeText="owner"
          badgeColor="blue"
        />
      </div>
    </div>
  );
};

export default DetailTemplate;
