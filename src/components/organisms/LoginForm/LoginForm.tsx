import React from 'react';
import useLogin from '../../../hooks/useLogin';
import PrimaryButton from '../../atoms/Buttons/PrimaryButton/PrimaryButton';
import InputForm from '../../atoms/InputForms/InputForm/InputForm';
import useInputForm from '../../atoms/InputForms/InputForm/useInputForm';

const LoginForm = () => {
  const emailInputHandler = useInputForm();
  const passwordInputHandler = useInputForm();
  const { login } = useLogin();

  const onClick = () => {
    console.log('test');
  };

  return (
    <>
      <div className="h-12">
        <InputForm inputHandler={emailInputHandler} placeholder="hogehoge@email.com" />
      </div>

      <div className="h-5" />

      <div className="h-12">
        <InputForm inputHandler={passwordInputHandler} placeholder="password" password />
      </div>

      <div className="h-5" />
      <div className="px-5">
        <PrimaryButton
          onClick={() => login(emailInputHandler.input, passwordInputHandler.input)}
          thema="primary"
        >
          Login
        </PrimaryButton>
      </div>
    </>
  );
};

export default LoginForm;
