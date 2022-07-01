import React, { VFC } from 'react';
import InputForm from '../atoms/InputForms/InputForm/InputForm';
import useInputForm from '../atoms/InputForms/InputForm/useInputForm';
import PrimaryButton from '../atoms/Buttons/PrimaryButton/PrimaryButton';
import MyAvatar from '../atoms/Avatar/MyAvatar';
import LoginForm from '../organisms/LoginForm/LoginForm';

type Props = {
  title: string;
  thema: string;
};
const LoginTemplate: VFC<Props> = (props) => {
  const { title, thema } = props;

  const dummy = () => {
    console.log('test');
  };

  return (
    <div>
      <div className="h-10" />
      <div>
        <div className="flex justify-center">
          <MyAvatar size={108} name="Mother Frances" />
        </div>
        <div className="text-3xl font-mono text-center text-gray-500">QuestHub</div>
      </div>

      <div className="h-10" />

      <div className="px-5">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginTemplate;
