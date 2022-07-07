import React, { VFC } from 'react';
import { scoreItem } from '../../types/ScoreDisplayType';
import ScoreDisplayItem from '../atoms/ScoreDisplayItem';

type Props = {
  items: scoreItem[];
};
const ScoreDisplay: VFC<Props> = (props) => {
  const { items } = props;
  return (
    <fieldset>
      <legend className="text-gray-400">チームスコア</legend>
      <div className="flex justify-around">
        {items.map((item: scoreItem) => (
          <ScoreDisplayItem
            score={item.score}
            label={item.label}
            color={item.color}
            key={item.label}
          />
        ))}
      </div>
    </fieldset>
  );
};

export default ScoreDisplay;
