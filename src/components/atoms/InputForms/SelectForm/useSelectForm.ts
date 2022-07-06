import React, { ChangeEvent, useState } from 'react';

const useSelectForm = (defaultValue: string) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  return { value, handleChange, setValue };
};

export default useSelectForm;
