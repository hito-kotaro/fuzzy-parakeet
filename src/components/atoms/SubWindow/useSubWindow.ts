import React, { useState } from 'react';

const useSubWindow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [detailInfo, setDetailInfo] = useState();

  return { isOpen, setIsOpen, detailInfo, setDetailInfo };
};

export default useSubWindow;
