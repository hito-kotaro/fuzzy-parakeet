import { useState } from 'react';
import { defaultPenalty } from '../lib/defaultData';
import { primaryListItem } from '../types/ListItem/PrimaryListItemType';
import { penaltyType } from '../types/PenaltyType';
import { SelectItem } from '../types/Select/SelectItemType';
import usePenaltyList from './usePenaltyList';
import usePrimaryList from './usePrimaryList';
import useTeamListState from './useTeamListState';
import useTemplate from './useTemplate';

const usePenaltyPage = () => {
  const listTemplateState = useTemplate(true);
  const detailTemplateState = useTemplate(false);
  const createTemplateState = useTemplate(false);
  const applyTemplateState = useTemplate(false);
  const { list, setList } = usePrimaryList();
  const [teamSelectList, setTeamSelectList] = useState<SelectItem[]>([]);
  const [penalty, setPenalty] = useState<penaltyType>(defaultPenalty);
  const { penaltyList } = usePenaltyList();
  const { teamList } = useTeamListState();

  const collectTeam = () => {
    // ItemListに入れる

    const defaultList: SelectItem = { value: '', itemText: 'チームを選択してください' };
    const tmp = teamList.map((t) => {
      const item: SelectItem = {
        value: String(t.id),
        itemText: t.name,
      };
      return item;
    });
    const selectList: SelectItem[] = [defaultList, ...tmp];
    setTeamSelectList(selectList);
  };

  const filterList = () => {
    const primaryList: primaryListItem[] = penaltyList.map((p) => {
      const item: primaryListItem = {
        id: p.id,
        name: p.owner,
        title: p.title,
        description: p.description,
        date: 'a',
        badgeText: `${p.penalty} point`,
        badgeColor: 'red',
      };
      return item;
    });
    setList(primaryList);
  };

  // 詳細画面に渡す情報をステートにセット
  const onClickListItem = (id: number) => {
    const data = penaltyList.filter((p: penaltyType) => {
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
    teamSelectList,
    collectTeam,
    filterList,
    onClickListItem,
    onClickPlus,
  };
};

export default usePenaltyPage;
