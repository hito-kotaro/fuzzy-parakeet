import React, { useEffect } from 'react';
import { IconCheckCircle } from '@supabase/ui';
import usePenaltyPage from '../../hooks/usePenaltyPage';
import DetailTemplate from '../templates/DetailTemplate';
import ListTemplate from '../templates/ListTemplate';
import PenaltyDetailTemplate from '../templates/PenaltyDetailTemplate';
import CreatePenaltyTemplate from '../templates/CreatePenaltyTemplate';
import { dropDownItem } from '../../types/Dropdown/dropDownItemType';
import ApplyPenaltyTemplate from '../templates/ApplyPenaltyTemplate';

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
  const display = 'translate-x-0 opacity-100';
  const hidden = '-translate-x-full opacity-0';

  useEffect(() => {
    filterList();
    collectTeam();
  }, []);

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
        className={` switch-components z-30 ${
          listTemplateState.isOpen ? display : hidden
        }`}
      >
        <ListTemplate
          title="Penalty"
          listData={list}
          onClick={onClickListItem}
          onClickPlus={onClickPlus}
        />
      </div>

      <div
        className={` switch-components z-30 ${
          detailTemplateState.isOpen ? display : hidden
        }`}
      >
        <PenaltyDetailTemplate
          data={penalty}
          close={detailTemplateState.close}
          dropDownMenu={masterMenu}
        />
      </div>

      <div
        className={` switch-components z-30 ${
          createTemplateState.isOpen ? display : hidden
        }`}
      >
        <CreatePenaltyTemplate close={createTemplateState.close} />
      </div>

      <div
        className={` switch-components z-30 ${
          applyTemplateState.isOpen ? display : hidden
        }`}
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
