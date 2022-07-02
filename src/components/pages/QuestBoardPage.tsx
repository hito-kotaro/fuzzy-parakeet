import React, { useEffect } from 'react';
import useDetailTemplate from '../../hooks/useDetailTemplate';
import usePrimaryList from '../../hooks/usePrimaryList';
import useQuestBordPage from '../../hooks/useQuestBordPage';
import { questData } from '../../testData/QuestTestData';
import { primaryListItem } from '../../types/ListItem/PrimaryListItemType';
import CategoryTemplate from '../templates/CategoryTemplate';
import QuestBoardSubWindowTemplate from '../templates/QuestBoardSubWindowTemplate';

const QuestBoardPage = () => {
  const { open, close, isOpen, detailInfo } = useDetailTemplate();
  const { questList, setQuestList } = useQuestBordPage();
  const { list, setList } = usePrimaryList();

  useEffect(() => {
    // クエストを取得
    setQuestList(questData);
  }, []);

  useEffect(() => {
    const primaryList: primaryListItem[] = questData.map((quest) => {
      const item: primaryListItem = {
        id: quest.id,
        iconName: quest.owner,
        topText: quest.title,
        bottomText: quest.description,
        rightUpText: quest.date,
        rightBottomText: `${quest.point}point`,
      };
      return item;
    });
    setList(primaryList);
  }, [questList]);

  return (
    <CategoryTemplate
      openSubWindow={open}
      title="QuestBoard"
      listData={list}
      SubWindow={
        <QuestBoardSubWindowTemplate isOpen={isOpen} closeDetail={close} headerData={detailInfo} />
      }
    />
  );
};

export default QuestBoardPage;
