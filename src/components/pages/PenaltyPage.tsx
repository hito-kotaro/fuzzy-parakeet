import React, { useEffect } from 'react';
import { IconCheckCircle } from '@supabase/ui';
import usePenaltyPage from '../../hooks/usePenaltyPage';
import ListTemplate from '../templates/ListTemplate';
import PenaltyDetailTemplate from '../templates/PenaltyDetailTemplate';
import CreatePenaltyTemplate from '../templates/CreatePenaltyTemplate';
import { dropDownItem } from '../../types/dropdownType';
import ApplyPenaltyTemplate from '../templates/ApplyPenaltyTemplate';
import useUserAgent from '../../hooks/useUserAgent';
import usePenaltyApi from '../../hooks/usePenaltyApi';
import usePenaltyList from '../../hooks/usePenaltyList';
import useTeamApi from '../../hooks/useTeamApi';
import Loading from '../atoms/Loading';
import useLoading from '../../hooks/useLoading';
import useUserInfo from '../../hooks/useUserInfo';

const PenaltyPage = () => {
  const {
    listTemplateState,
    detailTemplateState,
    createTemplateState,
    applyTemplateState,
    list,
    penalty,
    teamSelectList,
    filterList,
    onClickListItem,
    onClickPlus,
    collectTeam,
  } = usePenaltyPage();
  const { userInfo } = useUserInfo();
  const { fetchPenaltyList } = usePenaltyApi();
  const { isLoading } = useLoading();
  const { fetchAllTeam } = useTeamApi();
  const { penaltyList } = usePenaltyList();
  const { isSafari } = useUserAgent();
  const className = isSafari ? 'switch-components-safari' : 'switch-components';
  const display = 'translate-x-0 opacity-100';
  const hidden = '-translate-x-full opacity-0';

  useEffect(() => {
    fetchPenaltyList();
    fetchAllTeam();
    collectTeam();
  }, []);

  useEffect(() => {
    filterList();
  }, [penaltyList]);

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
            title="ペナルティー"
            blankText="ペナルティーがありません"
            listData={list}
            onClick={onClickListItem}
            onClickPlus={
              userInfo.role === 'root' || userInfo.role === 'master'
                ? onClickPlus
                : undefined
            }
          />
        )}
      </div>

      <div
        className={` ${className} z-30 ${detailTemplateState.isOpen ? display : hidden}`}
      >
        <PenaltyDetailTemplate
          data={penalty}
          close={detailTemplateState.close}
          applyTemplateState={applyTemplateState}
        />
      </div>

      <div
        className={` ${className} z-30 ${createTemplateState.isOpen ? display : hidden}`}
      >
        <CreatePenaltyTemplate close={createTemplateState.close} />
      </div>

      <div
        className={` ${className} z-30 ${applyTemplateState.isOpen ? display : hidden}`}
      >
        <ApplyPenaltyTemplate
          close={applyTemplateState.close}
          data={penalty}
          teamSelect={teamSelectList}
        />
      </div>
    </>
  );
};

export default PenaltyPage;
