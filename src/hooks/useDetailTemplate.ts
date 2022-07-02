import React, { useState } from 'react';

const useDetailTemplate = () => {
  const [isOpen, setIsOpen] = useState(false);
  return { isOpen, setIsOpen };
};

export default useDetailTemplate;
