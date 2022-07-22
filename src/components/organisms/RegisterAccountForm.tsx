import React, { useEffect, VFC } from 'react';
import useAccountApi from '../../hooks/useAccountApi';
import useRegisterAccounts from '../../hooks/useRegisterAccounts';
import PrimaryButton from '../atoms/Buttons/PrimaryButton/PrimaryButton';
import InputForm from '../atoms/InputForms/InputForm/InputForm';
import useInputForm from '../atoms/InputForms/InputForm/useInputForm';
import LinkButton from '../atoms/LinkButton';

type Props = {
  toggleForm: () => void;
};

const RegisterAccountForm: VFC<Props> = (props) => {
  const { toggleForm } = props;
  const emailInputHandler = useInputForm();
  const emailConfirmInputHandler = useInputForm();
  const passwordInputHandler = useInputForm();
  const passwordConfirmInputHandler = useInputForm();
  const { registerAccount } = useAccountApi();
  const {
    isReady,
    emailConfirm,
    passwordConfirm,
    checkIsReady,
    emailCheck,
    passwordCheck,
  } = useRegisterAccounts();

  const dummy = () => {};

  useEffect(() => {
    emailCheck(emailInputHandler.input, emailConfirmInputHandler.input);
    passwordCheck(passwordInputHandler.input, passwordConfirmInputHandler.input);
  }, [
    emailInputHandler.input,
    emailConfirmInputHandler.input,
    passwordInputHandler.input,
    passwordConfirmInputHandler.input,
  ]);

  useEffect(() => {
    checkIsReady();
  }, [emailConfirm, passwordConfirm]);

  return (
    <>
      <fieldset className="border-b-1 border-gray-400">
        <div className="h-12">
          <InputForm
            inputHandler={emailInputHandler}
            placeholder="email"
            color="bg-gray-200"
            rounded="rounded-lg"
            type="text"
          />
        </div>

        <div className="h-5" />

        <div className="h-12">
          <InputForm
            inputHandler={emailConfirmInputHandler}
            placeholder="email 確認"
            color="bg-gray-200"
            rounded="rounded-lg"
            type="text"
          />
        </div>
        <div className="h-5" />
      </fieldset>
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

      <div className="h-12">
        <InputForm
          inputHandler={passwordConfirmInputHandler}
          placeholder="password 確認"
          color="bg-gray-200"
          rounded="rounded-lg"
          type="password"
        />
      </div>
      <div className="h-5" />

      <div className="px-5">
        {isReady ? (
          <PrimaryButton
            onClick={() =>
              registerAccount(emailInputHandler.input, passwordInputHandler.input)
            }
            thema="primary"
          >
            Login
          </PrimaryButton>
        ) : (
          <PrimaryButton onClick={dummy} thema="secondary">
            Login
          </PrimaryButton>
        )}
        <div className="h-5" />
        <LinkButton onClick={toggleForm}>アカウントをお持ちの方</LinkButton>
      </div>
    </>
  );
};

export default RegisterAccountForm;
