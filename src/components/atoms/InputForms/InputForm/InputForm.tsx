import React, { VFC } from 'react';
import type { inputHandlerType } from '../../../../types/Handler/HandlerTypes';

type Props = {
  inputHandler: inputHandlerType;
  color: string;
  placeholder: string;
  password?: boolean;
  rounded?: string;
};

const InputForm: VFC<Props> = (props) => {
  const { inputHandler, placeholder, password, color, rounded } = props;
  const { input, onChange } = inputHandler;
  return (
    <div className={`${color} ${rounded} w-full h-full`}>
      <input
        type={password ? 'password' : 'text'}
        value={input}
        onChange={onChange}
        placeholder={placeholder}
        className={`${color} ${rounded} text-lg w-full h-full focus:outline-none px-2`}
      />
    </div>
  );
};

export default InputForm;
