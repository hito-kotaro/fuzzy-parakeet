import { IconCheckCircle, IconClipboard, IconCopy, IconEdit, IconMinimize2 } from '@supabase/ui';
import React, { VFC } from 'react';
import { detailTemplateType } from '../../types/detailTemplateType';
import { dropDownItem } from '../../types/Dropdown/dropDownItemType';
import DetailCard from '../organisms/Cards/DetailCard/DetailCard';
import DetailHeader from '../organisms/Headers/DetailHeader';

type Props = {
  isOpen: boolean;
  closeDetail: () => void;
  headerData: detailTemplateType;
};
const DetailTemplate: VFC<Props> = (props) => {
  const { isOpen, closeDetail, headerData } = props;
  const role = 1;

  const questReport = () => {
    console.log('report');
  };

  const questEdit = () => {
    console.log('edit');
  };

  const questClose = () => {
    console.log('close');
  };

  const memberMenu: dropDownItem[] = [
    { icon: <IconCheckCircle />, onClick: questReport, text: '完了報告', divider: false },
  ];

  const masterMenu: dropDownItem[] = [
    { icon: <IconEdit />, onClick: questEdit, text: 'クエストを編集', divider: false },
    {
      icon: <IconMinimize2 stroke="red" />,
      onClick: questClose,
      text: 'クエストをクローズ',
      divider: true,
    },
  ];

  return (
    <div
      className={`absolute z-50 bg-base h-screen w-full duration-500 ${
        isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      <DetailHeader
        headerData={headerData}
        closeDetail={closeDetail}
        // ロールによって表示するメニューを変える。
        dropDownItems={role === 1 ? memberMenu : memberMenu}
      />
      <div className="h-5" />
      <div>
        <DetailCard ownerName={headerData.name} description={headerData.description} />
      </div>
    </div>
  );
};

export default DetailTemplate;
