import React, { VFC } from 'react';
import { userType } from '../../types/usersType';
import MyAvatar from '../atoms/Avatar/MyAvatar';
import useSelectForm from '../atoms/InputForms/SelectForm/useSelectForm';
import MiniHeader from '../organisms/Headers/MiniHeader';
import UserAttributeForm from '../organisms/UserAttributeForm';

type Props = {
  close: () => void;
  user: userType;
};
const UserAttributeUpdateTemplate: VFC<Props> = (props) => {
  const { user, close } = props;
  const teamSelectHandler = useSelectForm('');
  const roleSelectHandler = useSelectForm('');

  const updateAttribute = () => {
    // 後で更新用APIにアクセスする
    // const newUserAttribute: updateUserAttributeType = {
    //   id: user.id,
    //   team_id: Number(teamSelectHandler.value),
    //   role_id: Number(roleSelectHandler.value),
    // };

    close();
  };
  return (
    <div className="bg-base h-full">
      <MiniHeader
        title="ユーザー属性の更新"
        createText="更新"
        onClickCancel={close}
        onClickCreate={updateAttribute}
      />
      <div className="h-5" />
      <div className="px-3">
        <div className="flex justify-center">
          <MyAvatar size={64} name={user.name} />
        </div>
        <div className="text-center">{user.name}</div>

        <div className="h-5" />

        <UserAttributeForm
          teamSelectHandler={teamSelectHandler}
          roleSelectHandler={roleSelectHandler}
        />
      </div>
    </div>
  );
};

export default UserAttributeUpdateTemplate;
