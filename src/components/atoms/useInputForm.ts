import { ChangeEvent, useState } from 'react';

const useInputForm = () => {
  const [input, setInput] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const clear = () => {
    setInput('');
  };

  return { input, clear, onChange };
};

export default useInputForm;
