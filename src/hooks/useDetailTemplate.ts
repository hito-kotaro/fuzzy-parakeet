import { useState } from 'react';
import { detailHeaderType } from '../types/Header/detailHeaderType';

const useDetailTemplate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [detailInfo, setDetailInfo] = useState<detailHeaderType>({
    id: -999,
    // itemList?: dropDownItem[];
    name: 'tgdjaiojfd@#)!_',
    title: 'defaultTitle',
    date: '',
    status: true,
    message: 'default',
  });

  const close = () => {
    setIsOpen(!isOpen);
  };

  const open = (detailHeaderData: detailHeaderType) => {
    setIsOpen(true);
    setDetailInfo(detailHeaderData);
  };

  return { isOpen, setIsOpen, detailInfo, setDetailInfo, close, open };
};

export default useDetailTemplate;
