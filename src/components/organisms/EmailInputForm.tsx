import React, { VFC } from 'react';
import { inputHandlerType } from '../../types/Handler/HandlerTypes';
import InputForm from '../atoms/InputForms/InputForm/InputForm';

type Props = {
  emailInputHandler: inputHandlerType;
  confirmInputHandler: inputHandlerType;
};

const EmailInputForm: VFC<Props> = (props) => {
  const { emailInputHandler, confirmInputHandler } = props;

  return (
    <fieldset className="border-b-1 border-gray-300 ">
      <legend className="text-gray-400">Email</legend>
      <div className="h-10">
        <InputForm
          inputHandler={emailInputHandler}
          color="bg-gray-200"
          placeholder="newcomer@probie.com"
          type="text"
        />
      </div>

      <div className="h-2" />

      <div className="h-10">
        <InputForm
          inputHandler={confirmInputHandler}
          color="bg-gray-200"
          placeholder="confirm email adders"
          type="text"
        />
      </div>

      <div className="h-3" />
    </fieldset>
  );
};

export default EmailInputForm;
