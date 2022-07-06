import React, { VFC } from 'react';
import { inputHandlerType } from '../../types/Handler/HandlerTypes';
import InputForm from '../atoms/InputForms/InputForm/InputForm';

type Props = {
  legend: string;
  inputPlaceholder: string;
  textType: string;
  inputHandler: inputHandlerType;
  confirmInputHandler: inputHandlerType;
};

const ConfirnInputForm: VFC<Props> = (props) => {
  const { legend, textType, inputPlaceholder, inputHandler, confirmInputHandler } = props;

  return (
    <fieldset className="border-b-1 border-gray-300 ">
      <legend className="text-gray-400">{legend}</legend>
      <div className="h-10">
        <InputForm
          inputHandler={inputHandler}
          color="bg-gray-200"
          placeholder={inputPlaceholder}
          type={textType}
        />
      </div>

      <div className="h-2" />

      <div className="h-10">
        <InputForm
          inputHandler={confirmInputHandler}
          color="bg-gray-200"
          placeholder="confirm input"
          type={textType}
        />
      </div>

      <div className="h-3" />
    </fieldset>
  );
};

export default ConfirnInputForm;
