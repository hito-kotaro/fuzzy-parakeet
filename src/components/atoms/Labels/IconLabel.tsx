import Avatar from 'boring-avatars';
import React, { useEffect, useState, VFC } from 'react';
import MyAvatar from '../Avatar/MyAvatar';

type Props = {
  size?: 'large' | 'medium' | 'small';
  name: string;
  isTeam?: boolean;
};

const IconLabel: VFC<Props> = (props) => {
  const { size, name, isTeam } = props;
  const [className, setClassName] = useState('leading-10');
  const [px, setPx] = useState(40);

  // const setLabelSize = () => {
  //   switch (size) {
  //     case 'large':
  //       setClassName('leading-12 text-xl');
  //       setPx(48);
  //       break;
  //     case 'medium':
  //       setClassName('leading-10');
  //       setPx(40);
  //       break;
  //     case 'small':
  //       setClassName('leading-7 text-sm');
  //       setPx(28);
  //       break;
  //     default:
  //       setClassName('leading-10');
  //       setPx(40);
  //   }
  // };

  // useEffect(() => {
  //   setLabelSize();
  // }, []);
  // setLabelSize();
  return (
    <div className="flex">
      {/* <MyAvatar size={px} name={name} isTeam={isTeam} /> */}
      <div className="rounded-full overflow-hidden">
        <Avatar
          size={40}
          name={name}
          variant={isTeam ? 'bauhaus' : 'beam'}
          colors={['#FFAD08', '#EDD75A', '#73B06F', '#0C8F8F', '#405059']}
        />
      </div>
      <div className={`${className} ml-2 `}>{name}</div>
    </div>
  );
};

export default IconLabel;
