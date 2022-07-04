import React, { useEffect, useState } from 'react';
import { Badge, IconCheckCircle } from '@supabase/ui';
import useTemplate from '../../hooks/useTemplate';
import ListTemplate from '../templates/ListTemplate';
import { approveRequestData } from '../../testData/ApproveRequestTestData';
import { primaryListItem } from '../../types/ListItem/PrimaryListItemType';
import usePrimaryList from '../../hooks/usePrimaryList';
import { approveRequestType } from '../../types/approveRequestType';
import { dropDownItem } from '../../types/Dropdown/dropDownItemType';
import ApproveDetailTemplate from '../templates/ApproveDetailTemplate';

const ApproveRequestPage = () => {
  const defaultAR: approveRequestType = {
    id: 0,
    applicant: '',
    applicantId: 0,
    authorizerId: 0,
    title: '',
    description: '',
    point: 0,
    approve: false,
    date: '',
    questTitle: '',
    questOwner: '',
    questDescription: '',
    open: false,
  };

  const [approveRequest, setApproveRequest] = useState<approveRequestType>(defaultAR);
  const { list, setList } = usePrimaryList();
  const listTemplate = useTemplate(true);
  const detailTemplate = useTemplate(false);
  const display = 'translate-x-0 opacity-100';
  const hidden = '-translate-x-full opacity-0';

  useEffect(() => {
    const userList: approveRequestType[] = approveRequestData.filter((a) => {
      // ログイン中のユーザーのIDでフィルターする
      const role = 2;
      if (role === 2) {
        return a.applicantId === 1;
      }
      return a;
    });

    const primaryList: primaryListItem[] = userList.map((a) => {
      const status = a.approve && a.authorizer ? 'close' : 'open';
      const color = status === 'close' ? 'red' : 'green';
      const item: primaryListItem = {
        id: a.id,
        name: a.applicant,
        title: a.title,
        description: a.description,
        date: a.date,
        badgeColor: color,
        badgeText: status,
      };
      return item;
    });
    setList(primaryList);
  }, []);

  useEffect(() => {}, []);

  // PrimaryListItemをクリックしたときに詳細を表示する
  const onClickListItem = (id: number) => {
    // idで対象データを探す
    const data = approveRequestData.filter((a: approveRequestType) => {
      return a.id === id;
    });
    setApproveRequest(data[0]);
    console.log(data[0]);
    detailTemplate.open();
  };

  const requestCancel = () => {
    console.log('Cancel Request!!!');
    console.log(approveRequest);
  };

  const approve = () => {
    console.log('Approve!!');
    console.log(approveRequest);
  };

  const memberMenu: dropDownItem[] = [
    { icon: <IconCheckCircle />, onClick: requestCancel, text: '申請取り消し', divider: false },
  ];

  const readerMenu: dropDownItem[] = [
    { icon: <IconCheckCircle />, onClick: approve, text: '承認', divider: false },
  ];

  return (
    <>
      <div className={` switch-components z-30 ${listTemplate.isOpen ? display : hidden}`}>
        <ListTemplate title="ApproveRequest" listData={list} onClick={onClickListItem} />
      </div>

      <div className={`switch-components z-40 ${detailTemplate.isOpen ? display : hidden}`}>
        <ApproveDetailTemplate
          data={approveRequest}
          close={detailTemplate.close}
          dropDownMenu={memberMenu}
        />
      </div>
    </>
  );
};

export default ApproveRequestPage;
