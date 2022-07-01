import React, { ReactElement, VFC } from 'react';
import MyAvatar from '../atoms/Avatar/MyAvatar';

type Props = {
  iconName: string;
  topText: string;
  bottomText: string | ReactElement;
  righetUpText: string;
  rightBottomText: string | number | ReactElement;
};

const PrimaryListItem: VFC<Props> = (props) => {
  const { iconName, topText, bottomText, righetUpText, rightBottomText } = props;
  return (
    <div className="flex border-b-1 px-3 py-2 bg-white">
      <div className="w-1/5 ">
        <MyAvatar size={44} name={iconName} />
      </div>

      <div className="w-3/5 text-left">
        <div className="text-sm text-gray-500 whitespace-nowrap truncate">{topText}</div>
        <div className="text-lg  whitespace-nowrap truncate">{bottomText}</div>
      </div>
      <div className="text-right text-gray-400">
        <div>{righetUpText}</div>
        <div>{rightBottomText}</div>
      </div>
    </div>
  );
};

export default PrimaryListItem;
