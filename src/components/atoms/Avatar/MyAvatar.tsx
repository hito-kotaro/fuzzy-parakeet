import React, { VFC } from 'react';
import Avatar from 'boring-avatars';

type Props = {
  size: number;
  name: string;
  isTeam?: boolean;
};

const MyAvatar: VFC<Props> = (props) => {
  const { size, name, isTeam } = props;
  return (
    <div className="rounded-full overflow-hidden">
      <Avatar
        size={size}
        name={name}
        variant={isTeam ? 'bauhaus' : 'beam'}
        colors={['#FFAD08', '#EDD75A', '#73B06F', '#0C8F8F', '#405059']}
      />
    </div>
  );
};

export default MyAvatar;
