import { Badge } from '@supabase/ui';
import Avatar from 'boring-avatars';
import React, { VFC } from 'react';

type Props = {
  id: number;
  name: string;
  title: string;
  description: string;
  date: string;
  badgeColor: 'red' | 'green' | 'gray' | 'yellow' | 'blue' | 'indigo' | 'purple' | 'pink';
  badgeText: string;
  onClick: (id: number) => void;
  isTeam?: boolean;
};

const PrimaryListItemButton: VFC<Props> = (props) => {
  const { id, name, title, description, date, badgeColor, badgeText, onClick, isTeam } =
    props;
  const isNoText = description.length === 0;

  return (
    <button type="button" className="w-full" onClick={() => onClick(id)}>
      <div className="flex border-b-1 px-3 py-2 bg-white w-full">
        <div className="rounded-full overflow-hidden h-11 w-11">
          <Avatar
            size={44}
            name={name}
            variant={isTeam ? 'bauhaus' : 'beam'}
            colors={['#FFAD08', '#EDD75A', '#73B06F', '#0C8F8F', '#405059']}
          />
        </div>

        <div className="w-2" />
        <div className="text-left w-3/5">
          <div className="text-sm text-gray-500 whitespace-nowrap truncate">{title}</div>

          <div
            className={`text-lg  whitespace-nowrap truncate ${
              isNoText ? 'text-gray-400' : ''
            }`}
          >
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
