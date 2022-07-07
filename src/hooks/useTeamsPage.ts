import React, { useState } from 'react';
import { defaultTeam } from '../lib/defaultData';
import { teamsData } from '../testData/TeamsTestData';
import { usersData } from '../testData/UsersTestData';
import { primaryListItem } from '../types/ListItem/PrimaryListItemType';
import { teamType } from '../types/teamsType';
import { userType } from '../types/usersType';
import usePrimaryList from './usePrimaryList';
import useTemplate from './useTemplate';

const useTeamsPage = () => {
  const { list, setList } = usePrimaryList();
  const listTemplateState = useTemplate(true);
  const createTemplateState = useTemplate(false);
  const detailTemplateState = useTemplate(false);

  // チームの詳細画面を作成したら使用する
  const [team, setTeam] = useState<teamType>(defaultTeam);

  // 詳細画面に渡す情報をステートにセット
  const onClickListItem = (id: number) => {
    const data = teamsData.filter((t: teamType) => {
      return t.id === id;
    });
    setTeam(data[0]);
    detailTemplateState.open();
  };

  const onClickPlus = () => {
    createTemplateState.open();
  };

  const badgeConfig = (totalPoint: number) => {
    if (totalPoint < 0) {
      return 'red';
    }
    return 'green';
  };

  // チームIDからユーザーを検索して、pointの合計を取得
  const filterUserByTeamId = (teamId: number) => {
    const filterById: userType[] = usersData.filter((u) => {
      return u.teamId === teamId;
    });

    const total: number = filterById.reduce((acc: number, val: userType): number => {
      return acc + val.point;
    }, 0);
    return total;
  };

  const filterList = () => {
    const primaryList: primaryListItem[] = teamsData.map((t) => {
      const totalPoint = filterUserByTeamId(t.id) - t.teamPenalty;
      const item: primaryListItem = {
        id: t.id,
        name: t.name,
        title: t.name,
        description: t.description,
        date: t.created_at,
        badgeText: `${totalPoint} point`,
        badgeColor: badgeConfig(totalPoint),
        isTeam: true,
      };
      return item;
    });
    setList(primaryList);
  };

  return {
    listTemplateState,
    createTemplateState,
    detailTemplateState,
    list,
    filterList,
    onClickPlus,
    onClickListItem,
    team,
  };
};

export default useTeamsPage;
