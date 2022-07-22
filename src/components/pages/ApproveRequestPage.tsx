import React, { useEffect } from 'react';
import { IconCheckCircle } from '@supabase/ui';
import ListTemplate from '../templates/ListTemplate';
import { dropDownItem } from '../../types/dropdownType';
import ApproveDetailTemplate from '../templates/ApproveDetailTemplate';
import useApproveRequestPage from '../../hooks/useApproveRequestPage';
import useUserAgent from '../../hooks/useUserAgent';
import useApproveRequestApi from '../../hooks/useApproveRequestApi';
import useApproveRequestList from '../../hooks/useApproveRequestList';
import { updateApproveRequests } from '../../types/approveRequestType';
import useLoading from '../../hooks/useLoading';
import Loading from '../atoms/Loading';

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
  const { fetchApproveRequest, updateApproveStatus } = useApproveRequestApi();
  const { isLoading } = useLoading();
  const { isSafari } = useUserAgent();
  const { ARList } = useApproveRequestList();
  const className = isSafari ? 'switch-components-safari' : 'switch-components';
  const display = 'translate-x-0 opacity-100';
  const hidden = '-translate-x-full opacity-0';

  // レンダリング時にバックエンドから一覧を取得
  useEffect(() => {
    fetchApproveRequest();
  }, []);

  // フィルターが変わるたびにリストを更新
  useEffect(() => {
    filterByApproveStatus(statusSelectHandler.value);
  }, [ARList, statusSelectHandler.value]);

  const approve = () => {
    const newStatus: updateApproveRequests = {
      ar_id: approveRequest.id,
      new_status: 'approved',
    };
    updateApproveStatus(newStatus);
    detailTemplateState.close();
  };

  const reject = () => {
    const newStatus: updateApproveRequests = {
      ar_id: approveRequest.id,
      new_status: 'rejected',
    };
    updateApproveStatus(newStatus);
    detailTemplateState.close();
  };

  // const cancel = () => {
  //   const newStatus: updateApproveRequests = {
  //     ar_id: approveRequest.id,
  //     new_status: 'canceled',
  //   };
  //   updateApproveStatus(newStatus);
  //   detailTemplateState.close();
  // };

  // const memberMenu: dropDownItem[] = [
  //   {
  //     icon: <IconCheckCircle />,
  //     onClick: cancel,
  //     text: '申請取り消し',
  //     divider: false,
  //   },
  // ];

  const readerMenu: dropDownItem[] = [
    {
      icon: <IconCheckCircle />,
      onClick: approve,
      text: '承認',
      divider: false,
    },
    {
      icon: <IconCheckCircle />,
      onClick: reject,
      text: '却下',
      divider: false,
    },
  ];

  return (
    <>
      <div
        className={` ${className} z-30 ${listTemplateState.isOpen ? display : hidden}`}
      >
        {isLoading ? (
          <div>
            <div className="h-10" />
            <Loading size={64} />
          </div>
        ) : (
          <ListTemplate
            title="承認依頼"
            blankText="検索結果なし"
            listData={list}
            onClick={onClickListItem}
            selectHandler={statusSelectHandler}
            selectItemList={statusFilter}
          />
        )}
      </div>

      <div
        className={`${className} z-40 ${detailTemplateState.isOpen ? display : hidden}`}
      >
        <ApproveDetailTemplate
          data={approveRequest}
          close={detailTemplateState.close}
          dropDownMenu={readerMenu}
        />
      </div>
    </>
  );
};

export default ApproveRequestPage;
