import { IconCheckCircle, IconClipboard, IconCopy, IconEdit, IconMinimize2 } from '@supabase/ui';
import React, { useEffect, VFC } from 'react';
import { detailTemplateType } from '../../types/detailTemplateType';
import { dropDownItem } from '../../types/Dropdown/dropDownItemType';
import { questType } from '../../types/Quest/QuestType';
import DetailCard from '../organisms/Cards/DetailCard/DetailCard';
import DetailHeader from '../organisms/Headers/DetailHeader';

type Props = {
  quest: questType;
  close: () => void;
  reportOpen: () => void;
};
const DetailTemplate: VFC<Props> = (props) => {
  const { quest, close, reportOpen } = props;
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
    { icon: <IconCheckCircle />, onClick: reportOpen, text: '完了報告', divider: false },
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
    <div className="w-full h-screen overflow-scroll bg-base">
      <DetailHeader
        closeDetail={close}
        // ロールによって表示するメニューを変える。
        dropDownItems={role === 1 ? memberMenu : memberMenu}
        name={quest.owner}
        title={quest.title}
        date={quest.date}
      />

      <div className="h-5" />
      <div>
        <DetailCard ownerName={quest.owner} description={quest.description} />
      </div>
    </div>
  );
};

export default DetailTemplate;
