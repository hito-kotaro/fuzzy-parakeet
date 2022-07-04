import { Badge } from '@supabase/ui';
import React, { ReactElement, VFC } from 'react';
import MyAvatar from '../Avatar/MyAvatar';

type Props = {
  id: number;
  name: string;
  title: string;
  description: string;
  date: string;
  badgeColor: 'red' | 'green' | 'gray' | 'yellow' | 'blue' | 'indigo' | 'purple' | 'pink';
  badgeText: string;
  onClick: (id: number) => void;
};

const PrimaryListItemButton: VFC<Props> = (props) => {
  const { id, name, title, description, date, badgeColor, badgeText, onClick } = props;
  const isNoText = description.length === 0;

  return (
    <button type="button" className="w-full" onClick={() => onClick(id)}>
      <div className="flex border-b-1 px-3 py-2 bg-white">
        <MyAvatar size={44} name={name} />

        <div className="ml-5 text-left">
          <div className="text-sm text-gray-500 whitespace-nowrap truncate">{title}</div>
          <div className={`text-lg  whitespace-nowrap truncate ${isNoText ? 'text-gray-400' : ''}`}>
            {isNoText ? 'No Text' : description}
          </div>
        </div>
        <div className="ml-auto text-right text-gray-400">
          <div>{date}</div>
          <Badge color={badgeColor}>{badgeText}</Badge>
        </div>
      </div>
    </button>
  );
};

export default PrimaryListItemButton;
