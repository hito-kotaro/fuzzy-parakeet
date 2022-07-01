import React, { VFC } from 'react';
import InputForm from '../components/atoms/InputForms/InputForm/InputForm';
import useInputForm from '../components/atoms/InputForms/InputForm/useInputForm';
import PrimaryButton from '../components/atoms/Buttons/PrimaryButton/PrimaryButton';
import MyAvator from '../components/atoms/Avator/MyAvator';
import LoginForm from '../components/organisms/LoginForm/LoginForm';

type Props = {
  title: string;
  thema: string;
};
const LoginTemplate: VFC<Props> = (props) => {
  const { title, thema } = props;
  const emailInputHandler = useInputForm();
  const passwordInputHandler = useInputForm();

  const dummy = () => {
    console.log('test');
  };
  return (
    <div>
      <div className="h-10" />
      <div>
        <div className="flex justify-center">
          <MyAvator size={108} name="Mother Frances" />
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
