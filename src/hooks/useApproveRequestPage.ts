import { useState } from 'react';
import useSelectForm from '../components/atoms/InputForms/SelectForm/useSelectForm';
import { defaultAR } from '../lib/defaultData';
import { approveRequestType } from '../types/approveRequestType';
import { SelectItem } from '../types/Select/SelectItemType';
import useApproveRequestList from './useApproveRequestList';
import usePrimaryList from './usePrimaryList';
import useTemplate from './useTemplate';

const useApproveRequestPage = () => {
  const { ARList } = useApproveRequestList();
  const [approveRequest, setApproveRequest] = useState<approveRequestType>(defaultAR);
  const { list, filterByApproveStatus } = usePrimaryList();
  const statusSelectHandler = useSelectForm('open');
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
    const data = ARList.filter((a: approveRequestType) => {
      return a.id === id;
    });
    setApproveRequest(data[0]);
    detailTemplateState.open();
  };

  return {
    list,
    approveRequest,
    detailTemplateState,
    listTemplateState,
    statusFilter,
    statusSelectHandler,
    onClickListItem,
    filterByApproveStatus,
  };
};

export default useApproveRequestPage;
