import { ChangeEvent, useState } from 'react';

const useInputForm = () => {
  const [input, setInput] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const clear = () => {
    setInput('');
  };

  return { input, clear, onChange, setInput };
};

export default useInputForm;
