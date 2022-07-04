import React, { VFC } from 'react';
import { approveRequestType } from '../../types/approveRequestType';
import { dropDownItem } from '../../types/Dropdown/dropDownItemType';
import DetailCard from '../organisms/Cards/DetailCard/DetailCard';
import DetailHeader from '../organisms/Headers/DetailHeader';

type Props = {
  data: approveRequestType;
  close: () => void;
  dropDownMenu: dropDownItem[];
};

const ApproveDetailTemplate: VFC<Props> = (props) => {
  const { data, close, dropDownMenu } = props;
  return (
    <div className="bg-base h-screen">
      <DetailHeader
        closeDetail={close}
        // ロールによって表示するメニューを変える。
        dropDownItems={dropDownMenu}
        name={data.applicant}
        title={data.title}
        date={data.date}
      />
      <DetailCard
        ownerName={data.questOwner}
        description={data.questDescription}
        badgeText="owner"
        badgeColor="blue"
      />
      <DetailCard
        ownerName={data.applicant}
        description={data.description}
        badgeText="applicant"
        badgeColor="green"
      />
      {data.approve && data.authorizer ? (
        <DetailCard
          ownerName={data.authorizer}
          description="承認"
          badgeText="authorizer"
          badgeColor="yellow"
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default ApproveDetailTemplate;
