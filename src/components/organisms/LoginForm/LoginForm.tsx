import React, { VFC } from 'react';
import useLoading from '../../../hooks/useLoading';
import useLogin from '../../../hooks/useLogin';
import PrimaryButton from '../../atoms/Buttons/PrimaryButton/PrimaryButton';
import InputForm from '../../atoms/InputForms/InputForm/InputForm';
import useInputForm from '../../atoms/InputForms/InputForm/useInputForm';
import LinkButton from '../../atoms/LinkButton';
import Loading from '../../atoms/Loading';

type Props = {
  toggleForm: () => void;
};

const LoginForm: VFC<Props> = (props) => {
  const { toggleForm } = props;
  const { isLoading } = useLoading();
  const accountInputHandler = useInputForm();
  const emailInputHandler = useInputForm();
  const passwordInputHandler = useInputForm();
  const { login } = useLogin();

  return (
    <>
      <div className="h-12">
        <InputForm
          inputHandler={accountInputHandler}
          placeholder="9桁のアカウントID"
          color="bg-gray-200"
          rounded="rounded-lg"
          type="number"
        />
      </div>

      <div className="h-5" />

      <div className="h-12">
        <InputForm
          inputHandler={emailInputHandler}
          placeholder="hogehoge@email.com"
          color="bg-gray-200"
          rounded="rounded-lg"
          type="text"
        />
      </div>

      <div className="h-5" />

      <div className="h-12">
        <InputForm
          inputHandler={passwordInputHandler}
          placeholder="password"
          color="bg-gray-200"
          rounded="rounded-lg"
          type="password"
        />
      </div>

      <div className="h-5" />
      <div className="px-5">
        <PrimaryButton
          onClick={() =>
            login(
              Number(accountInputHandler.input),
              emailInputHandler.input,
              passwordInputHandler.input,
            )
          }
          thema="primary"
        >
          {isLoading ? <Loading size={32} /> : 'Login'}
        </PrimaryButton>
        <div className="h-5" />
        <LinkButton onClick={toggleForm}>新規登録</LinkButton>
      </div>
    </>
  );
};

export default LoginForm;
