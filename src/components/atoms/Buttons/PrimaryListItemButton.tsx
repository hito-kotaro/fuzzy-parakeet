import React, { ReactElement, VFC } from 'react';
import MyAvatar from '../Avatar/MyAvatar';

type Props = {
  id: number;
  iconName: string;
  topText: string;
  bottomText: string | ReactElement;
  rightUpText: string;
  rightBottomText: string | number | ReactElement;
  onClick: (
    id: number,
    iconName: string,
    topText: string,
    bottomText: string | ReactElement,
    rightUpText: string,
    rightBottomText: string | number | ReactElement,
  ) => void;
};

const PrimaryListItemButton: VFC<Props> = (props) => {
  const { id, iconName, topText, bottomText, rightUpText, rightBottomText, onClick } = props;

  return (
    <button
      type="button"
      className="w-full"
      onClick={() => onClick(id, iconName, topText, bottomText, rightUpText, rightBottomText)}
    >
      <div className="flex border-b-1 px-3 py-2 bg-white">
        <div className="w-1/5 ">
          <MyAvatar size={44} name={iconName} />
        </div>

        <div className="w-3/5 text-left">
          <div className="text-sm text-gray-500 whitespace-nowrap truncate">{topText}</div>
          <div className="text-lg  whitespace-nowrap truncate">{bottomText}</div>
        </div>
        <div className="text-right text-gray-400">
          <div>{rightUpText}</div>
          <div>{rightBottomText}</div>
        </div>
      </div>
    </button>
  );
};

export default PrimaryListItemButton;
