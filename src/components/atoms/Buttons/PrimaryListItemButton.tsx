import React, { ReactElement, VFC } from 'react';
import { detailTemplateType } from '../../../types/detailTemplateType';
import MyAvatar from '../Avatar/MyAvatar';

type Props = {
  id: number;
  name: string;
  title: string;
  description: string;
  date: string;
  badge: ReactElement;
  onClick: (id: number) => void;
};

const PrimaryListItemButton: VFC<Props> = (props) => {
  const { id, name, title, description, date, badge, onClick } = props;
  const isNoText = description.length === 0;
  const detailHeaderData: detailTemplateType = {
    id,
    name,
    title,
    description,
    date,
    status: true,
    message: 'test',
  };

  return (
    <button type="button" className="w-full" onClick={() => onClick(id)}>
      <div className="flex border-b-1 px-3 py-2 bg-white">
        <div className="w-1/5 ">
          <MyAvatar size={44} name={name} />
        </div>

        <div className="w-3/5 text-left">
          <div className="text-sm text-gray-500 whitespace-nowrap truncate">{title}</div>
          <div className={`text-lg  whitespace-nowrap truncate ${isNoText ? 'text-gray-400' : ''}`}>
            {isNoText ? 'No Text' : description}
          </div>
        </div>
        <div className="text-right text-gray-400">
          <div>{date}</div>
          <div>{badge}</div>
        </div>
      </div>
    </button>
  );
};

export default PrimaryListItemButton;
