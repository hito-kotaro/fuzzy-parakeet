import React, { useEffect, useState } from 'react';
import ListTemplate from '../templates/ListTemplate';
import ApproveDetailTemplate from '../templates/ApproveDetailTemplate';
import useApproveRequestPage from '../../hooks/useApproveRequestPage';
import useUserAgent from '../../hooks/useUserAgent';
import useApproveRequestApi from '../../hooks/useApproveRequestApi';
import useApproveRequestList from '../../hooks/useApproveRequestList';
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
  const { fetchApproveRequest } = useApproveRequestApi();
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
        <ApproveDetailTemplate data={approveRequest} close={detailTemplateState.close} />
      </div>
    </>
  );
};

export default ApproveRequestPage;
