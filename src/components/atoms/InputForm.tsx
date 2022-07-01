import React, { VFC } from 'react';
import type { inputHandlerType } from '../../types/Handler/HandlerTypes';

type Props = {
  inputHandler: inputHandlerType;
  password?: boolean;
  placeholder: string;
};

const InputForm: VFC<Props> = (props) => {
  const { inputHandler, placeholder, password } = props;
  const { input, onChange } = inputHandler;
  return (
    <div className="w-full bg-gray-200 rounded-lg">
      <input
        type={password ? 'password' : 'text'}
        value={input}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-gray-200 text-lg w-full focus:outline-none px-2"
      />
    </div>
  );
};

export default InputForm;
