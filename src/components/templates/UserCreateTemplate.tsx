import React, { useEffect, useState, VFC } from 'react';
import { defaultTeam } from '../../lib/defaultData';
import { teamsData } from '../../testData/TeamsTestData';
import { SelectItem } from '../../types/Select/SelectItemType';
import { createUserType } from '../../types/usersType';
import MyAvatar from '../atoms/Avatar/MyAvatar';
import InputForm from '../atoms/InputForms/InputForm/InputForm';
import useInputForm from '../atoms/InputForms/InputForm/useInputForm';
import useSelectForm from '../atoms/InputForms/SelectForm/useSelectForm';
import EmailInputForm from '../organisms/EmailInputForm';
import MiniHeader from '../organisms/Headers/MiniHeader';
import UserAttributeForm from '../organisms/UserAttributeForm';
import UserNameInputForm from '../organisms/UserNameInputForm';

type Props = {
  close: () => void;
};

const UserCreateTemplate: VFC<Props> = (props) => {
  const { close } = props;
  const [teams, setTeams] = useState(teamsData);
  const [teamSelect, setTeamSelect] = useState<SelectItem[]>();
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
    <div className="h-screen bg-base">
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
            <EmailInputForm
              emailInputHandler={emailInputHandler}
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
