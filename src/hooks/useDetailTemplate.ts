import { ReactElement, useState } from 'react';

const useDetailTemplate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [detailInfo, setDetailInfo] = useState<any>();

  const close = () => {
    setIsOpen(!isOpen);
  };

  const open = (
    id: number,
    iconName: string,
    topText: string,
    bottomText: string | ReactElement,
    rightUpText: string,
    rightBottomText: string | number | ReactElement,
    status: boolean,
    message: string,
  ) => {
    setIsOpen(true);
    const data = {
      id,
      iconName,
      topText,
      bottomText,
      rightUpText,
      rightBottomText,
      status,
      message,
    };
    setDetailInfo(data);
  };

  return { isOpen, setIsOpen, detailInfo, setDetailInfo, close, open };
};

export default useDetailTemplate;
