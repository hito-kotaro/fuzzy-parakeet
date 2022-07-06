import { useState } from 'react';
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
  const { list, setList, filterByApproveStatus } = usePrimaryList();
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

  // 詳細画面に渡す情報をステートにセット
  const onClickListItem = (id: number) => {
    const data = approveRequestData.filter((a: approveRequestType) => {
      return a.id === id;
    });
    setApproveRequest(data[0]);
    detailTemplateState.open();
  };

  return {
    list,
    value,
    approveRequest,
    detailTemplateState,
    listTemplateState,
    statusFilter,

    handleChange,
    onClickListItem,
    filterByApproveStatus,
  };
};

export default useApproveRequestPage;
