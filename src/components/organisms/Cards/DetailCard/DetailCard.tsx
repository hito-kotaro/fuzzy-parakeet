import { Badge } from '@supabase/ui';
import React, { VFC } from 'react';
import IconLabel from '../../../atoms/Labels/IconLabel';

type Props = {
  ownerName: string;
  date: string;
  description: string;
  badgeText: string;
  badgeColor?:
    | 'gray'
    | 'red'
    | 'yellow'
    | 'green'
    | 'blue'
    | 'indigo'
    | 'purple'
    | 'pink';
};
const DetailCard: VFC<Props> = (props) => {
  const { ownerName, date, description, badgeText, badgeColor } = props;

  const isNoDescription = description.length === 0;

  return (
    <>
      <div className="h-5" />
      <div className="border-1 p-2">
        <div className="flex">
          <IconLabel size="medium" name={ownerName} />
          <div className="ml-auto">
            <Badge color={badgeColor}>{badgeText}</Badge>
            <div className="text-gray-400 text-right">{date}</div>
          </div>
        </div>
        <div className="h-2" />
        <div className="">
          <div className="border-1 p-2">
            <div className={`${isNoDescription ? 'text-gray-400' : ''}`}>
              {description.length === 0 ? '説明はありません' : description}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailCard;
