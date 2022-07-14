import React, { VFC } from 'react';
import { createUserType } from '../../types/usersType';
import MyAvatar from '../atoms/Avatar/MyAvatar';
import useInputForm from '../atoms/InputForms/InputForm/useInputForm';
import useSelectForm from '../atoms/InputForms/SelectForm/useSelectForm';
import ConfirnInputForm from '../organisms/ConfirmInputForm';
import MiniHeader from '../organisms/Headers/MiniHeader';
import UserAttributeForm from '../organisms/UserAttributeForm';
import UserNameInputForm from '../organisms/UserNameInputForm';

type Props = {
  close: () => void;
};

const UserCreateTemplate: VFC<Props> = (props) => {
  const { close } = props;
  const firstNameInputHandler = useInputForm();
  const lastNameInputHandler = useInputForm();
  const emailInputHandler = useInputForm();
  const confirmInputHandler = useInputForm();
  const roleSelectHandler = useSelectForm('0');
  const teamSelectHandler = useSelectForm('0');
  const space = 'h-5';

  const clear = () => {
    roleSelectHandler.setValue('1');
    teamSelectHandler.setValue('1');
    firstNameInputHandler.clear();
    lastNameInputHandler.clear();
    emailInputHandler.clear();
    confirmInputHandler.clear();
  };

  const createUser = () => {
    
    const newUser: createUserType = {
      name: `${lastNameInputHandler.input}_${firstNameInputHandler.input}`,
      email: emailInputHandler.input,
      roleId: Number(roleSelectHandler.value),
      teamId: Number(teamSelectHandler.value),
      password: 'password',
    };
    console.log(newUser);

    clear();
    close();
  };

  return (
    <div className="bg-base h-full">
      <div>
        <MiniHeader
          title="新しいユーザーを作成"
          createText="作成"
          onClickCancel={close}
          onClickCreate={createUser}
        />
      </div>

      <div className={space} />

      <div className="px-3">
        <div>
          <div className="flex justify-center">
            <MyAvatar
              size={64}
              name={`${lastNameInputHandler.input}_${firstNameInputHandler.input}`}
            />
          </div>

          <div className={space} />

          <div>
            <UserNameInputForm
              lastNameInputHandler={lastNameInputHandler}
              firstNameInputHandler={firstNameInputHandler}
            />
          </div>

          <div className={space} />

          <div>
            <ConfirnInputForm
              legend="Email"
              textType="text"
              inputPlaceholder="newcomer@probi.com"
              inputHandler={emailInputHandler}
              confirmInputHandler={confirmInputHandler}
            />
          </div>
          <div className={space} />

          <div>
            <UserAttributeForm
              teamSelectHandler={teamSelectHandler}
              roleSelectHandler={roleSelectHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCreateTemplate;
