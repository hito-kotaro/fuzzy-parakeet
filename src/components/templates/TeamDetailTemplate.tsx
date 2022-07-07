import React, { VFC } from 'react';
import { scoreItem } from '../../types/ScoreDisplayType';
import { teamType } from '../../types/teamsType';
import ScoreDisplayItem from '../atoms/ScoreDisplayItem';
import DetailHeader from '../organisms/Headers/DetailHeader';
import ScoreDisplay from '../organisms/ScoreDisplay';

type Props = {
  data: teamType;
  close: () => void;
  //   menuItem: dropDownItem[];
};

const TeamDetailTemplate: VFC<Props> = (props) => {
  const { data, close } = props;
  // scoreを取得する
  const scores: scoreItem[] = [
    {
      score: data.teamTotalPoint,
      label: 'point',
      color: 'bg-emerald-400',
    },
    {
      score: data.teamPenalty,
      label: 'penalty',
      color: 'bg-rose-500',
    },
    {
      score: data.teamTotalPoint - data.teamPenalty,
      label: 'total',
      color: 'bg-indigo-400',
    },
  ];
  //   console.log(data);
  return (
    <div className="bg-base h-screen  ">
      <DetailHeader
        name={data.name}
        date={data.created_at}
        title="Team詳細"
        iconSize="large"
        closeDetail={close}
        dropDownItems={[]}
        isTeam
      />
      <div className="h-10" />
      <div className="px-3">
        <ScoreDisplay items={scores} />
      </div>
    </div>
  );
};

export default TeamDetailTemplate;
