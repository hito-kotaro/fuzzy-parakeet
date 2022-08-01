import { IconCheckCircle } from '@supabase/ui';
import React, { useEffect, useState, VFC } from 'react';
import useUserInfo from '../../hooks/useUserInfo';
import { approveRequestType } from '../../types/approveRequestType';
import { dropDownItem } from '../../types/dropdownType';
import DetailCard from '../organisms/Cards/DetailCard/DetailCard';
import DetailHeader from '../organisms/Headers/DetailHeader';
import useApproveRequestApi from '../../hooks/useApproveRequestApi';

type Props = {
  data: approveRequestType;
  close: () => void;
};

const ApproveDetailTemplate: VFC<Props> = (props) => {
  const { data, close } = props;
  const { updateApproveStatus } = useApproveRequestApi();
  const { userInfo } = useUserInfo();
  const [menu, setMenu] = useState<dropDownItem[]>([]);

  const dummy = () => {
    console.log(data);
  };

  const makeMenu = () => {
    const newMenu: dropDownItem[] = [];

    const approveMenu: dropDownItem = {
      icon: <IconCheckCircle />,
      onClick: () => updateApproveStatus({ ar_id: data.id, new_status: 'approved' }),
      text: '承認',
      divider: false,
    };
    const rejectMenu: dropDownItem = {
      icon: <IconCheckCircle />,
      onClick: dummy,
      text: '却下',
      divider: false,
    };

    const cancelMenu: dropDownItem = {
      icon: <IconCheckCircle />,
      onClick: dummy,
      text: '取り下げ',
      divider: false,
    };

    if (
      userInfo.role === 'root' ||
      userInfo.role === 'master' ||
      userInfo.role === 'reader'
    ) {
      newMenu.push(approveMenu);
      newMenu.push(rejectMenu);
    }

    if (userInfo.id === data.applicant_id) {
      newMenu.push(cancelMenu);
    }

    setMenu(newMenu);
  };

  useEffect(() => {
    makeMenu();
  }, []);

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
        dropDownItems={menu}
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
