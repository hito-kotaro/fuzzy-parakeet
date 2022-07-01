import React, { VFC } from 'react';
import MyAvatar from '../Avatar/MyAvatar';

type Props = {
  size: 'large' | 'medium' | 'small';
  name: string;
};
const AvatarLabel: VFC<Props> = (props) => {
  const { size, name } = props;
  let px: number;
  let leading: number;
  let textSize: string;

  switch (size) {
    case 'large':
      px = 48;
      leading = 12;
      textSize = 'text-xl';
      break;
    case 'medium':
      px = 40;
      leading = 10;
      textSize = 'text-lg';
      break;
    case 'small':
      px = 28;
      leading = 7;
      textSize = 'text-sm';
      break;
    default:
      px = 40;
      leading = 10;
      textSize = '';
  }

  return (
    <div className="flex">
      <MyAvatar size={px} name={name} />
      <div className={`leading-${leading} ${textSize} ml-2 `}>kotaro</div>
    </div>
  );
};

export default AvatarLabel;
