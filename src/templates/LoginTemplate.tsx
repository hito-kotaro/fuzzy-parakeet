import React, { VFC } from 'react';
import InputForm from '../components/atoms/InputForm';
import useInputForm from '../components/atoms/useInputForm';

type Props = {
  title: string;
};
const LoginTemplate: VFC<Props> = (props) => {
  const { title } = props;
  const emailInputHandler = useInputForm();
  const passwordInputHandler = useInputForm();

  return (
    <div>
      <InputForm inputHandler={emailInputHandler} placeholder="hogehoge@email.com" />
      <InputForm inputHandler={passwordInputHandler} placeholder="password" password />
    </div>
  );
};

export default LoginTemplate;
