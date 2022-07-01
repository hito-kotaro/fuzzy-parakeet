import React, { VFC } from 'react';
import InputForm from '../components/atoms/InputForms/InputForm/InputForm';
import useInputForm from '../components/atoms/InputForms/InputForm/useInputForm';
import PrimaryButton from '../components/atoms/Buttons/PrimaryButton/PrimaryButton';
import MyAvator from '../components/atoms/Avator/MyAvator';

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
      <div className="flex justify-center">
        <MyAvator size={108} name="Mother Frances" />
      </div>

      <div className="h-10" />

      <div className="px-5">
        <div className="h-12">
          <InputForm inputHandler={emailInputHandler} placeholder="hogehoge@email.com" />
        </div>

        <div className="h-5" />

        <div className="h-12">
          <InputForm inputHandler={passwordInputHandler} placeholder="password" password />
        </div>

        <div className="h-5" />
        <div className="px-5">
          <PrimaryButton onClick={dummy} thema="primary">
            Login
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default LoginTemplate;
