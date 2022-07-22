import React, { VFC } from 'react';
// import { updateUserPasswordType } from '../../types/usersType';
import MyAvatar from '../atoms/Avatar/MyAvatar';
import useInputForm from '../atoms/InputForms/InputForm/useInputForm';
import ConfirnInputForm from '../organisms/ConfirmInputForm';
import MiniHeader from '../organisms/Headers/MiniHeader';

type Props = {
  close: () => void;
  name: string;
};
const UserUpdateTemplate: VFC<Props> = (props) => {
  const { name, close } = props;
  const passwordInputHandler = useInputForm();
  const confirmInputHandler = useInputForm();

  const update = () => {
    // const updateUser: updateUserPasswordType = {
    //   id: 1,
    //   password: passwordInputHandler.input,
    // };

    passwordInputHandler.clear();
    confirmInputHandler.clear();
    close();
  };

  return (
    <div className="bg-base h-full">
      <MiniHeader
        title="ユーザー情報の更新"
        createText="更新"
        onClickCancel={close}
        onClickCreate={update}
      />
      <div className="h-5" />

      <div className="px-3">
        <div className="flex justify-center">
          <MyAvatar size={64} name={name} />
        </div>
        <div className="text-center">{name}</div>

        <div className="h-5" />

        <ConfirnInputForm
          legend="new passowrd"
          inputPlaceholder="新しいパスワード"
          textType="password"
          inputHandler={passwordInputHandler}
          confirmInputHandler={confirmInputHandler}
        />
      </div>
    </div>
  );
};

export default UserUpdateTemplate;
