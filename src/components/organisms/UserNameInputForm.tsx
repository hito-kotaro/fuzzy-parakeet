import React, { VFC } from 'react';
import { inputHandlerType } from '../../types/Handler/HandlerTypes';
import InputForm from '../atoms/InputForms/InputForm/InputForm';

type Props = {
  firstNameInputHandler: inputHandlerType;
  lastNameInputHandler: inputHandlerType;
};

const UserNameInputForm: VFC<Props> = (props) => {
  const { firstNameInputHandler, lastNameInputHandler } = props;

  return (
    <fieldset className="border-b-1 border-gray-300">
      <legend className="text-gray-400">UserName</legend>
      <div className="flex h-10">
        <InputForm
          inputHandler={lastNameInputHandler}
          color="bg-gray-200"
          placeholder="LastName"
          type="text"
        />

        <div className="w-3" />

        <InputForm
          inputHandler={firstNameInputHandler}
          color="bg-gray-200"
          placeholder="FirstName"
          type="text"
        />
      </div>
      <div className="h-3" />
    </fieldset>
  );
};

export default UserNameInputForm;
