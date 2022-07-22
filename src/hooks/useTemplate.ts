import { useState } from 'react';

const useTemplate = (defaultState: boolean) => {
  const [isOpen, setIsOpen] = useState(defaultState);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return { isOpen, open, close };
};

export default useTemplate;
