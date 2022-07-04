import React, { useEffect, useState } from 'react';
import { Badge } from '@supabase/ui';
import useTemplate from '../../hooks/useTemplate';
import ListTemplate from '../templates/ListTemplate';
import { approveRequestData } from '../../testData/ApproveRequestTestData';
import { primaryListItem } from '../../types/ListItem/PrimaryListItemType';
import usePrimaryList from '../../hooks/usePrimaryList';
import { approveRequestType } from '../../types/approveRequestType';

const ApproveRequestPage = () => {
  const defaultAR: approveRequestType = {
    id: 0,
    applicant: '',
    applicantId: 0,
    authorizerId: 0,
    title: '',
    description: '',
    point: 0,
    status: false,
    date: '',
  };

  const [approveRequest, setApproveRequest] = useState<approveRequestType>(defaultAR);
  const { list, setList } = usePrimaryList();
  const listTemplate = useTemplate(true);
  const display = 'translate-x-0 opacity-100';
  const hidden = '-translate-x-full opacity-0';

  useEffect(() => {
    const primaryList: primaryListItem[] = approveRequestData.map((a) => {
      const item: primaryListItem = {
        id: a.id,
        name: a.applicant,
        title: a.title,
        description: a.description,
        date: a.date,
        badge: <Badge>{`${a.point}point`}</Badge>,
      };
      return item;
    });
    setList(primaryList);
  }, []);

  // PrimaryListItemをクリックしたときに詳細を表示する
  const onClickListItem = (id: number) => {
    // idで対象データを探す
    const data = approveRequestData.filter((a: approveRequestType) => {
      return a.id === id;
    });
    setApproveRequest(data[0]);
    // detailTemplate.open();
  };

  return (
    <>
      <div className={` switch-components z-30 ${listTemplate.isOpen ? display : hidden}`}>
        <ListTemplate title="ApproveRequest" listData={list} onClick={onClickListItem} />
      </div>
    </>
  );
};

export default ApproveRequestPage;
