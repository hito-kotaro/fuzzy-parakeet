import React, { ChangeEvent, useState } from 'react';

const useSelectForm = () => {
  const [value, setValue] = useState('one');

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };
  return { value, handleChange };
};

export default useSelectForm;
