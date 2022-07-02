import React, { ReactElement, VFC } from 'react';
import { detailTemplateType } from '../../../types/detailTemplateType';
import MyAvatar from '../Avatar/MyAvatar';

type Props = {
  id: number;
  iconName: string;
  topText: string;
  bottomText: string;
  rightUpText: string;
  rightBottomText: string | number | ReactElement;
  onClick: (detailHeaderData: detailTemplateType) => void;
};

const PrimaryListItemButton: VFC<Props> = (props) => {
  const { id, iconName, topText, bottomText, rightUpText, rightBottomText, onClick } = props;
  const isNoText = bottomText.length === 0;
  const detailHeaderData: detailTemplateType = {
    id,
    name: iconName,
    title: topText,
    description: bottomText,
    date: rightUpText,
    status: true,
    message: `${rightBottomText}`,
  };
  return (
    <button type="button" className="w-full" onClick={() => onClick(detailHeaderData)}>
      <div className="flex border-b-1 px-3 py-2 bg-white">
        <div className="w-1/5 ">
          <MyAvatar size={44} name={iconName} />
        </div>

        <div className="w-3/5 text-left">
          <div className="text-sm text-gray-500 whitespace-nowrap truncate">{topText}</div>
          <div className={`text-lg  whitespace-nowrap truncate ${isNoText ? 'text-gray-400' : ''}`}>
            {isNoText ? 'No Text' : bottomText}
          </div>
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
