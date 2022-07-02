import React, { useState } from 'react';

const useDetailTemplate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [detailInfo, setDetailInfo] = useState<any>();
  return { isOpen, setIsOpen, detailInfo, setDetailInfo };
};

export default useDetailTemplate;
