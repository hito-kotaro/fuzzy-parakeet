import React, { useState } from 'react';
import useSelectForm from '../components/atoms/InputForms/SelectForm/useSelectForm';
import { defaultAR } from '../lib/defaultData';
import { approveRequestData } from '../testData/ApproveRequestTestData';
import { approveRequestType } from '../types/approveRequestType';
import { badgeColor } from '../types/colorType';
import { primaryListItem } from '../types/ListItem/PrimaryListItemType';
import { SelectItem } from '../types/Select/SelectItemType';
import usePrimaryList from './usePrimaryList';
import useTemplate from './useTemplate';

const useApproveRequestPage = () => {
  const [approveRequest, setApproveRequest] = useState<approveRequestType>(defaultAR);
  const { list, setList } = usePrimaryList();
  const { value, handleChange } = useSelectForm('open');
  const listTemplateState = useTemplate(true);
  const detailTemplateState = useTemplate(false);

  const statusFilter: SelectItem[] = [
    { value: 'open', itemText: 'Open' },
    { value: 'approved', itemText: 'Approve' },
    { value: 'canceled', itemText: 'Cancel' },
    { value: 'rejected', itemText: 'Reject' },
    { value: 'all', itemText: 'All' },
  ];

  const badgeConfig = (status: string) => {
    let color: badgeColor = 'green';

    if (status === 'open') {
      color = 'green';
    } else if (status === 'approved') {
      color = 'blue';
    } else if (status === 'canceled') {
      color = 'yellow';
    } else {
      color = 'red';
    }

    return color;
  };

  // 詳細画面に渡す情報をステートにセット
  const onClickListItem = (id: number) => {
    const data = approveRequestData.filter((a: approveRequestType) => {
      return a.id === id;
    });
    setApproveRequest(data[0]);
    detailTemplateState.open();
  };

  const filterList = () => {
    const filterByStatus: approveRequestType[] = approveRequestData.filter((u) => {
      if (value === 'all') {
        return u;
      }
      return u.status === value;
    });

    const primaryList: primaryListItem[] = filterByStatus.map((a) => {
      const color: badgeColor = badgeConfig(a.status);
      const item: primaryListItem = {
        id: a.id,
        name: a.applicant,
        title: a.title,
        description: a.description,
        date: a.created_at,
        badgeColor: color,
        badgeText: a.status,
      };
      return item;
    });
    setList(primaryList);
  };
  return {
    list,
    value,
    approveRequest,
    detailTemplateState,
    listTemplateState,
    statusFilter,
    filterList,
    handleChange,
    onClickListItem,
  };
};

export default useApproveRequestPage;
