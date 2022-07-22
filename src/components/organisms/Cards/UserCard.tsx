import React, { VFC } from 'react';
import { scoreItem } from '../../../types/ScoreDisplayType';
import { scoreType } from '../../../types/scoreType';
import ScoreDisplay from '../ScoreDisplay';

type Props = {
  score: scoreType;
};

const UserCard: VFC<Props> = (props) => {
  const { score } = props;
  const scores: scoreItem[] = [
    {
      score: score.user_score,
      label: '個人',
      color: 'bg-emerald-400',
    },
    {
      score: score.team_score,
      label: 'チーム',
      color: 'bg-rose-500',
    },
    {
      score: score.account_score,
      label: 'アカウント',
      color: 'bg-indigo-400',
    },
  ];

  return (
    <div className="border-1 rounded-lg p-2 light-color drop-shadow-lg">
      <ScoreDisplay items={scores} displayTitle="スコアボード" />
      {/* <div className="flex">
        <MyAvatar size={48} name={userName} />
        <div className="ml-5 leading-12 text-xl">{`${userName}`}</div>
      </div>
      <div className="h-12" /> */}
      {/* <div className="text-right">
        <ScoreLabel point={10} penalty={20} />
      </div> */}
    </div>
  );
};

export default UserCard;
