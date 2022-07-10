import Avatar from 'boring-avatars';
import React, { VFC } from 'react';

type Props = {
  name: string;
  isTeam?: boolean;
};

const IconLabel: VFC<Props> = (props) => {
  const { name, isTeam } = props;

  return (
    <div className="flex">
      {/* <MyAvatar size={px} name={name} isTeam={isTeam} /> */}
      {/* <div className="rounded-full overflow-hidden"> */}
      <Avatar
        size={28}
        name={name}
        variant={isTeam ? 'bauhaus' : 'beam'}
        colors={['#FFAD08', '#EDD75A', '#73B06F', '#0C8F8F', '#405059']}
      />
      {/* </div> */}
      <div className=" leading-7 ml-2">{name}</div>
    </div>
  );
};

export default IconLabel;
