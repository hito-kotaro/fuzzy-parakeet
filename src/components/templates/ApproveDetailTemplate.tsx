import React, { VFC } from 'react';
import { approveRequestType } from '../../types/approveRequestType';
import { dropDownItem } from '../../types/dropdownType';
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
            ownerName={data.authorizer ?? 'no auther'}
            date={data.updated_at}
            description="承認"
            badgeText="authorizer"
            badgeColor="blue"
          />
        );
      case 'canceled':
        return (
          <DetailCard
            ownerName={data.applicant}
            date={data.updated_at}
            description="キャンセル"
            badgeText="applicant"
            badgeColor="green"
          />
        );
      case 'rejected':
        if (data.authorizer) {
          return (
            <DetailCard
              ownerName={data.authorizer}
              date={data.updated_at}
              description="却下"
              badgeText="authorizer"
              badgeColor="blue"
            />
          );
        }
        return '';
      default:
        return '';
    }
  };
  return (
    <div className="bg-base h-full">
      <DetailHeader
        closeDetail={close}
        // ロールによって表示するメニューを変える。
        dropDownItems={dropDownMenu}
        name={data.applicant}
        title={data.title}
        date={data.created_at}
        isDropdown={data.status === 'open'}
      />
      <DetailCard
        ownerName={data.quest_owner}
        description={data.quest_description}
        date={data.created_at}
        badgeText="owner"
        badgeColor="purple"
      />
      <DetailCard
        ownerName={data.applicant}
        description={data.description}
        date={data.created_at}
        badgeText="applicant"
        badgeColor="green"
      />

      {checkStatus(data.status)}
    </div>
  );
};

export default ApproveDetailTemplate;
