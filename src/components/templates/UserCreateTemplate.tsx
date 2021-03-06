import React, { VFC } from 'react';
import { toast } from 'react-hot-toast';
import { createUserType } from '../../types/usersType';
import MyAvatar from '../atoms/Avatar/MyAvatar';
import useInputForm from '../atoms/InputForms/InputForm/useInputForm';
import useSelectForm from '../atoms/InputForms/SelectForm/useSelectForm';
import ConfirnInputForm from '../organisms/ConfirmInputForm';
import MiniHeader from '../organisms/Headers/MiniHeader';
import UserAttributeForm from '../organisms/UserAttributeForm';
import UserNameInputForm from '../organisms/UserNameInputForm';
import useUserApi from '../../hooks/useUserApi';

type Props = {
  close: () => void;
};

const UserCreateTemplate: VFC<Props> = (props) => {
  const { close } = props;
  const firstNameInputHandler = useInputForm();
  const lastNameInputHandler = useInputForm();
  const emailInputHandler = useInputForm();
  const confirmInputHandler = useInputForm();
  const roleSelectHandler = useSelectForm('1');
  const teamSelectHandler = useSelectForm('0');
  const space = 'h-5';
  const { createUser } = useUserApi();

  const clear = () => {
    roleSelectHandler.setValue('1');
    teamSelectHandler.setValue('1');
    firstNameInputHandler.clear();
    lastNameInputHandler.clear();
    emailInputHandler.clear();
    confirmInputHandler.clear();
  };

  const create = () => {
    if (roleSelectHandler.value === '0') {
      toast.error('ロールを選択してください');
    } else if (teamSelectHandler.value === '0') {
      toast.error('チームを選択してください');
    } else {
      const newUser: createUserType = {
        name: `${lastNameInputHandler.input}_${firstNameInputHandler.input}`,
        email: emailInputHandler.input,
        role_id: Number(roleSelectHandler.value),
        team_id: Number(teamSelectHandler.value),
        password: 'password',
      };

      createUser(newUser);
      clear();
      close();
    }
  };

  return (
    <div className="bg-base h-full">
      <div>
        <MiniHeader
          title="新しいユーザーを作成"
          createText="作成"
          onClickCancel={close}
          onClickCreate={create}
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
