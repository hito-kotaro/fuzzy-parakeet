import { ChangeEvent, useState } from 'react';

const useSearchForm = () => {
  const [input, setInput] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return { input, onChange };
};

export default useSearchForm;
