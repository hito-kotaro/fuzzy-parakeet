import { useState } from 'react';
import { defaultTeam } from '../lib/defaultData';
import { primaryListItem } from '../types/ListItem/PrimaryListItemType';
import { teamType } from '../types/teamsType';
import { userType } from '../types/usersType';
import usePrimaryList from './usePrimaryList';
import useTeamListState from './useTeamListState';
import useTemplate from './useTemplate';
import useUserList from './useUserList';

const useTeamsPage = () => {
  const { list, setList } = usePrimaryList();
  const listTemplateState = useTemplate(true);
  const createTemplateState = useTemplate(false);
  const detailTemplateState = useTemplate(false);
  const { userList } = useUserList();

  // チームの詳細画面を作成したら使用する
  const [team, setTeam] = useState<teamType>(defaultTeam);
  const { teamList } = useTeamListState();

  // 詳細画面に渡す情報をステートにセット
  const onClickListItem = (id: number) => {
    const data = teamList.filter((t: teamType) => {
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
  const filterUserByteamId = (teamId: number) => {
    const filterById: userType[] = userList.filter((u) => {
      return u.team_id === teamId;
    });

    const total: number = filterById.reduce((acc: number, val: userType): number => {
      return acc + val.point;
    }, 0);
    return total;
  };

  const filterList = (data: teamType[]) => {
    const primaryList: primaryListItem[] = data.map((t) => {
      const date = t.created_at.replace(/-/g, '/').substring(0, 10);
      const point = filterUserByteamId(t.id) - t.penalty;
      const item: primaryListItem = {
        id: t.id,
        name: t.name,
        title: t.name,
        description: t.description,
        date,
        badgeText: `${point} point`,
        badgeColor: badgeConfig(point),
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
