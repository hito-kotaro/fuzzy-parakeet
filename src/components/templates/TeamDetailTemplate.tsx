import React, { useEffect, useState, VFC } from 'react';
import usePrimaryList from '../../hooks/usePrimaryList';
import useUserApi from '../../hooks/useUserApi';
import useUserList from '../../hooks/useUserList';
import { primaryListItem } from '../../types/ListItem/PrimaryListItemType';
import { scoreItem } from '../../types/ScoreDisplayType';
import { teamType } from '../../types/teamsType';
import PrimaryList from '../molecules/Lists/PrimaryList';
import DetailHeader from '../organisms/Headers/DetailHeader';
import ScoreDisplay from '../organisms/ScoreDisplay';

type Props = {
  data: teamType;
  close: () => void;
  //   menuItem: dropDownItem[];
};

const TeamDetailTemplate: VFC<Props> = (props) => {
  const { data, close } = props;
  const { userList } = useUserList();
  const { fetchUserAll } = useUserApi();
  const [totalUserPoint, setTotalUserPoint] = useState(0);
  const { list, filterUserByteamId } = usePrimaryList();

  // scoreを取得する
  const scores: scoreItem[] = [
    {
      score: totalUserPoint,
      label: 'point',
      color: 'bg-emerald-400',
    },
    {
      score: data.penalty,
      label: 'penalty',
      color: 'bg-rose-500',
    },
    {
      score: data.point - data.penalty,
      label: 'total',
      color: 'bg-indigo-400',
    },
  ];

  useEffect(() => {
    fetchUserAll();
  }, []);
  // 同じチームIDを持つユーザーをPrimaryListに格納

  useEffect(() => {
    // ユーザの一覧を取得
    filterUserByteamId(data.id, userList);
  }, [data.id]);

  useEffect(() => {
    // チームメンバーのpointを合計する。
    const total: number = list.reduce((acc: number, val: primaryListItem): number => {
      return acc + Number(val.badgeText);
    }, 0);
    setTotalUserPoint(total);
  }, [list]);

  const dummy = () => {
    console.log('test');
  };
  //   console.log(data);
  return (
    <div className="bg-base h-full">
      <DetailHeader
        name={data.name}
        date={data.created_at}
        title={data.description}
        iconSize="large"
        closeDetail={close}
        dropDownItems={[]}
        isTeam
      />

      <div className="h-10" />

      <div className="px-3">
        <ScoreDisplay items={scores} displayTitle="チームスコア" />
      </div>

      <div className="h-10" />

      <fieldset>
        <legend className="text-gray-400 px-3">チームメンバー</legend>
        <PrimaryList list={list} onClick={dummy} />
      </fieldset>
    </div>
  );
};

export default TeamDetailTemplate;
