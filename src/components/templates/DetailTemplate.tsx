import React, { VFC } from 'react';
import { detailHeaderType } from '../../types/Header/detailHeaderType';
import DetailCard from '../organisms/Cards/DetailCard/DetailCard';
import DetailHeader from '../organisms/Headers/DetailHeader';

type Props = {
  isOpen: boolean;
  closeDetail: () => void;
  headerData: detailHeaderType;
};
const DetailTemplate: VFC<Props> = (props) => {
  const { isOpen, closeDetail, headerData } = props;

  return (
    <div
      className={`absolute z-50 bg-base h-screen w-full duration-500 ${
        isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      <DetailHeader headerData={headerData} closeDetail={closeDetail} />
      <div className="h-5" />
      <div>
        <DetailCard />
      </div>
    </div>
  );
};

export default DetailTemplate;
