import React, { useState } from 'react';
import { defaultTeam } from '../lib/defaultData';
import { teamsData } from '../testData/TeamsTestData';
import { usersData } from '../testData/UsersTestData';
import { primaryListItem } from '../types/ListItem/PrimaryListItemType';
import { teamType } from '../types/teamsType';
import { userType } from '../types/usersType';
import usePrimaryList from './usePrimaryList';
import useTeamApi from './useTeamApi';
import useTeamListState from './useTeamListState';
import useTemplate from './useTemplate';

const useTeamsPage = () => {
  const { list, setList } = usePrimaryList();
  const listTemplateState = useTemplate(true);
  const createTemplateState = useTemplate(false);
  const detailTemplateState = useTemplate(false);
  const { fetchTeamById } = useTeamApi();

  // チームの詳細画面を作成したら使用する
  const [team, setTeam] = useState<teamType>(defaultTeam);
  const { teamList } = useTeamListState();

  // 詳細画面に渡す情報をステートにセット
  const onClickListItem = (id: number) => {
    console.log(`id=${id}`);
    console.log(teamList);
    const data = teamList.filter((t: teamType) => {
      return t.id === id;
    });
    console.log(data);
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
  const filterUserByteamId = (teamId: number) => {
    const filterById: userType[] = usersData.filter((u) => {
      return u.team_id === teamId;
    });

    const total: number = filterById.reduce((acc: number, val: userType): number => {
      return acc + val.point;
    }, 0);
    return total;
  };

  const filterList = (data: teamType[]) => {
    console.log(data);
    const primaryList: primaryListItem[] = data.map((t) => {
      const date = t.created_at.replace(/-/g, '/').substring(0, 10);

      const item: primaryListItem = {
        id: t.id,
        name: t.name,
        title: t.name,
        description: t.description,
        date,
        badgeText: `${t.point} point`,
        badgeColor: badgeConfig(t.point - t.penalty),
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
