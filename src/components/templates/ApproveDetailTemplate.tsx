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

  const checkStatus = (status: string) => {
    switch (status) {
      case 'approved':
        return (
          <DetailCard
            ownerName={data.authorizer}
            description="承認"
            badgeText="authorizer"
            badgeColor="blue"
          />
        );
      case 'canceled':
        return (
          <DetailCard
            ownerName={data.applicant}
            description="キャンセル"
            badgeText="applicant"
            badgeColor="green"
          />
        );
      case 'rejected':
        return (
          <DetailCard
            ownerName={data.authorizer}
            description="却下"
            badgeText="authorizer"
            badgeColor="blue"
          />
        );
      default:
        return '';
    }
  };
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
        badgeColor="purple"
      />
      <DetailCard
        ownerName={data.applicant}
        description={data.description}
        badgeText="applicant"
        badgeColor="green"
      />

      {checkStatus(data.status)}
    </div>
  );
};

export default ApproveDetailTemplate;
