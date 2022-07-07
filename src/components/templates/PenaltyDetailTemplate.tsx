import React, { VFC } from 'react';
import { dropDownItem } from '../../types/Dropdown/dropDownItemType';
import { penaltyType } from '../../types/PenaltyType';
import DetailCard from '../organisms/Cards/DetailCard/DetailCard';
import DetailHeader from '../organisms/Headers/DetailHeader';

type Props = {
  data: penaltyType;
  close: () => void;
  dropDownMenu: dropDownItem[];
};

const PenaltyDetailTemplate: VFC<Props> = (props) => {
  const { data, close, dropDownMenu } = props;
  return (
    <div className="bg-base h-full">
      <DetailHeader
        closeDetail={close}
        // ロールによって表示するメニューを変える。
        isDropdown
        dropDownItems={dropDownMenu}
        name={data.owner}
        title={data.title}
        date={data.created_at}
        // isDropdown={data.status === 'open'}
      />

      <DetailCard
        ownerName={data.owner}
        description={data.description}
        date={data.created_at}
        badgeText="owner"
        badgeColor="purple"
      />
    </div>
  );
};

export default PenaltyDetailTemplate;
