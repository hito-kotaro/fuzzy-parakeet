import React, { VFC } from 'react';
import MyAvatar from '../../atoms/Avatar/MyAvatar';

type Props = {
  team: string;
  userName: string;
};

const UserCard: VFC<Props> = (props) => {
  const { team, userName } = props;
  return (
    <div className="border-1 rounded-lg p-2 light-color">
      <div className="flex">
        <MyAvatar size={48} name={userName} />
        <div className="ml-5 leading-12 text-xl">{`${team}/${userName}`}</div>
      </div>
      <div className="h-12" />
      {/* <div className="text-right">
        <ScoreLabel point={10} penalty={20} />
      </div> */}
    </div>
  );
};

export default UserCard;
