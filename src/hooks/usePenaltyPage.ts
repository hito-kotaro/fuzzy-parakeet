import React, { useState } from 'react';
import { defaultPenalty } from '../lib/defaultData';
import { penaltyData } from '../testData/PenaltyTestdata';
import { teamsData } from '../testData/TeamsTestData';
import { primaryListItem } from '../types/ListItem/PrimaryListItemType';
import { penaltyType } from '../types/PenaltyType';
import usePrimaryList from './usePrimaryList';
import useTemplate from './useTemplate';

const usePenaltyPage = () => {
  const listTemplateState = useTemplate(true);
  const detailTemplateState = useTemplate(false);
  const createTemplateState = useTemplate(false);
  const applyTemplateState = useTemplate(false);
  const { list, setList } = usePrimaryList();
  const [penalty, setPenalty] = useState<penaltyType>(defaultPenalty);

  const filterList = () => {
    const primaryList: primaryListItem[] = penaltyData.map((p) => {
      const item: primaryListItem = {
        id: p.id,
        name: p.owner,
        title: p.title,
        description: p.description,
        date: p.created_at,
        badgeText: `${p.penalty} point`,
        badgeColor: 'red',
      };
      return item;
    });
    setList(primaryList);
  };

  // 詳細画面に渡す情報をステートにセット
  const onClickListItem = (id: number) => {
    const data = penaltyData.filter((p: penaltyType) => {
      return p.id === id;
    });
    setPenalty(data[0]);
    detailTemplateState.open();
  };

  const onClickPlus = () => {
    createTemplateState.open();
  };

  return {
    detailTemplateState,
    listTemplateState,
    createTemplateState,
    applyTemplateState,
    penalty,
    list,
    filterList,
    onClickListItem,
    onClickPlus,
  };
};

export default usePenaltyPage;
