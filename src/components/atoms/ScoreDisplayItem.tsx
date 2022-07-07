import React, { VFC } from 'react';

type Props = {
  score: number;
  label: string;
  color: string;
};

const ScoreDisplayItem: VFC<Props> = (props) => {
  const { score, label, color } = props;
  return (
    <div className={`h-16 w-16 rounded-full font-mono ${color}`}>
      <div className="leading-16 text-center text-white">{score}</div>
      <div className="text-center">{label}</div>
    </div>
  );
};

export default ScoreDisplayItem;
