import React, { VFC } from 'react';
import { inputHandlerType } from '../../../types/Handler/HandlerTypes';

type Props = {
  inputHandler: inputHandlerType;
  color: string;
  placeholder: string;
  rounded?: string;
};

const TextArea: VFC<Props> = (props) => {
  const { inputHandler, placeholder, color, rounded } = props;
  const { input, onChange } = inputHandler;
  return (
    <div className={`${color} ${rounded} w-full h-full`}>
      <textarea
        value={input}
        onChange={onChange}
        placeholder={placeholder}
        className={`${color} ${rounded} text-lg w-full h-full focus:outline-none px-2 overflow-y-scroll`}
      />
    </div>
  );
};

export default TextArea;
