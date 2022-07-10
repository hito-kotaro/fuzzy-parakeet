import React, { useEffect } from 'react';
import { IconCheckCircle } from '@supabase/ui';
import ListTemplate from '../templates/ListTemplate';
import { dropDownItem } from '../../types/dropdownType';
import ApproveDetailTemplate from '../templates/ApproveDetailTemplate';
import useApproveRequestPage from '../../hooks/useApproveRequestPage';

const ApproveRequestPage = () => {
  const {
    list,

    approveRequest,
    detailTemplateState,
    listTemplateState,
    statusFilter,
    statusSelectHandler,
    onClickListItem,
    filterByApproveStatus,
  } = useApproveRequestPage();

  const display = 'translate-x-0 opacity-100';
  const hidden = '-translate-x-full opacity-0';

  // フィルターが変わるたびにリストを更新
  useEffect(() => {
    filterByApproveStatus(statusSelectHandler.value);
  }, [statusSelectHandler.value]);

  const requestCancel = () => {
    console.log('Cancel Request!!!');
    console.log(approveRequest);
  };

  const approve = () => {
    console.log('Approve!!');
    console.log(approveRequest);
  };

  const memberMenu: dropDownItem[] = [
    {
      icon: <IconCheckCircle />,
      onClick: requestCancel,
      text: '申請取り消し',
      divider: false,
    },
  ];

  const readerMenu: dropDownItem[] = [
    {
      icon: <IconCheckCircle />,
      onClick: approve,
      text: '承認',
      divider: false,
    },
  ];

  return (
    <>
      <div
        className={` switch-components z-30 ${
          listTemplateState.isOpen ? display : hidden
        }`}
      >
        <ListTemplate
          title="ApproveRequest"
          listData={list}
          onClick={onClickListItem}
          selectHandler={statusSelectHandler}
          selectItemList={statusFilter}
        />
      </div>

      <div
        className={`switch-components z-40 ${
          detailTemplateState.isOpen ? display : hidden
        }`}
      >
        <ApproveDetailTemplate
          data={approveRequest}
          close={detailTemplateState.close}
          dropDownMenu={memberMenu}
        />
      </div>
    </>
  );
};

export default ApproveRequestPage;
