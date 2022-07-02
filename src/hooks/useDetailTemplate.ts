import { useState } from 'react';
import { detailTemplateType } from '../types/detailTemplateType';
import { detailHeaderType } from '../types/Header/detailHeaderType';

const useDetailTemplate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [detailInfo, setDetailInfo] = useState<detailTemplateType>({
    id: -999,
    // itemList?: dropDownItem[];
    name: 'tgdjaiojfd@#)!_',
    title: 'defaultTitle',
    description: '',
    date: '',
    status: true,
    message: 'default',
  });

  const close = () => {
    setIsOpen(!isOpen);
  };

  const open = (detailHeaderData: detailTemplateType) => {
    setIsOpen(true);
    setDetailInfo(detailHeaderData);
  };

  return { isOpen, setIsOpen, detailInfo, setDetailInfo, close, open };
};

export default useDetailTemplate;
