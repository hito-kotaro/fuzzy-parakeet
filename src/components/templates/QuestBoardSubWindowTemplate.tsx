import { IconCheckCircle, IconEdit, IconMinimize2 } from '@supabase/ui';
import React, { useState, VFC } from 'react';
import { detailTemplateType } from '../../types/detailTemplateType';
import { dropDownItem } from '../../types/Dropdown/dropDownItemType';
import DetailCard from '../organisms/Cards/DetailCard/DetailCard';
import DetailHeader from '../organisms/Headers/DetailHeader';
import DocumentCreateTemplate from './DocumentCreateTemplate';
import ReportTemplate from './ReportTemplate';

type Props = {
  isOpen: boolean;
  closeDetail: () => void;
  headerData: detailTemplateType;
};

const QuestBoardSubWindowTemplate: VFC<Props> = (props) => {
  const { isOpen, closeDetail, headerData } = props;
  const [isDetail, setIsDetail] = useState(true);
  const role = 1;
  console.log('questBordSubWindow');

  const questReport = () => {
    setIsDetail(false);
  };

  const toggleComponent = () => {
    setIsDetail(!isDetail);
  };

  const questEdit = () => {
    console.log('edit');
  };

  const questClose = () => {
    console.log('close');
  };

  const memberMenu: dropDownItem[] = [
    { icon: <IconCheckCircle />, onClick: toggleComponent, text: '完了報告', divider: false },
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
      {isDetail ? (
        <>
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
        </>
      ) : (
        <DocumentCreateTemplate
          toggleComponent={toggleComponent}
          title={headerData.title}
          titlePlaceholder="タイトルを入力してください(必須)"
          descriptionPlaceholder="報告内容を入力してください(必須)"
        />
      )}
    </div>
  );
};

export default QuestBoardSubWindowTemplate;
