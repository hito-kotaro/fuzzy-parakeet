import { ChangeEvent, useState } from 'react';

const useSearchForm = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<any>([]);
  const [target, setTarget] = useState<any>([]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setResult(
      target.filter((item: any) => {
        return item.title.include(input) && input.length !== 0;
      }),
    );
  };

  return { input, onChange, search, result, setTarget };
};

export default useSearchForm;
