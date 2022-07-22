import React, { VFC } from 'react';
import { scoreItem } from '../../types/ScoreDisplayType';
import ScoreDisplayItem from '../atoms/ScoreDisplayItem';

type Props = {
  items: scoreItem[];
  displayTitle: string;
};
const ScoreDisplay: VFC<Props> = (props) => {
  const { items, displayTitle } = props;
  return (
    <fieldset>
      <legend className="text-gray-400">{displayTitle}</legend>
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
