import React, { VFC } from 'react';
import InputForm from '../components/atoms/InputForm';
import useInputForm from '../components/atoms/useInputForm';
import PrimaryButton from '../components/Buttons/PrimaryButton/PrimaryButton';

type Props = {
  title: string;
};
const LoginTemplate: VFC<Props> = (props) => {
  const { title } = props;
  const emailInputHandler = useInputForm();
  const passwordInputHandler = useInputForm();

  const dummy = () => {
    console.log('test');
  };
  return (
    <div>
      <InputForm inputHandler={emailInputHandler} placeholder="hogehoge@email.com" />
      <InputForm inputHandler={passwordInputHandler} placeholder="password" password />
      <PrimaryButton onClick={dummy} color="bg-primary">
        Login
      </PrimaryButton>
    </div>
  );
};

export default LoginTemplate;
