import React, { useEffect } from 'react';
import { IconCheckCircle } from '@supabase/ui';
import usePenaltyPage from '../../hooks/usePenaltyPage';
import DetailTemplate from '../templates/DetailTemplate';
import ListTemplate from '../templates/ListTemplate';
import PenaltyDetailTemplate from '../templates/PenaltyDetailTemplate';
import CreatePenaltyTemplate from '../templates/CreatePenaltyTemplate';
import { dropDownItem } from '../../types/dropdownType';
import ApplyPenaltyTemplate from '../templates/ApplyPenaltyTemplate';
import useUserAgent from '../../hooks/useUserAgent';
import usePenaltyApi from '../../hooks/usePenaltyApi';
import usePenaltyList from '../../hooks/usePenaltyList';

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
  const { fetchPenaltyList } = usePenaltyApi();
  const { penaltyList } = usePenaltyList();
  const { isSafari } = useUserAgent();
  const className = isSafari ? 'switch-components-safari' : 'switch-components';
  const display = 'translate-x-0 opacity-100';
  const hidden = '-translate-x-full opacity-0';

  useEffect(() => {
    fetchPenaltyList();
    collectTeam();
  }, []);

  useEffect(() => {
    filterList();
  }, [penaltyList]);

  const masterMenu: dropDownItem[] = [
    {
      icon: <IconCheckCircle stroke="red" />,
      onClick: applyTemplateState.open,
      text: 'ペナルティ適用',
      divider: false,
    },
  ];

  return (
    <>
      <div
        className={` ${className} z-30 ${listTemplateState.isOpen ? display : hidden}`}
      >
        <ListTemplate
          title="Penalty"
          listData={list}
          onClick={onClickListItem}
          onClickPlus={onClickPlus}
        />
      </div>

      <div
        className={` ${className} z-30 ${detailTemplateState.isOpen ? display : hidden}`}
      >
        <PenaltyDetailTemplate
          data={penalty}
          close={detailTemplateState.close}
          dropDownMenu={masterMenu}
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
