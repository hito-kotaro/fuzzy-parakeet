import React, { useEffect } from 'react';
import usePrimaryList from '../../hooks/usePrimaryList';
import useQuestBordPage from '../../hooks/useQuestBordPage';
import { questData } from '../../testData/QuestTestData';
import { primaryListItem } from '../../types/ListItem/PrimaryListItemType';
import { questType } from '../../types/Quest/QuestType';
import CategoryTemplate from '../templates/CategoryTemplate';

const QuestBoardPage = () => {
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

  return <CategoryTemplate title="QuestBoard" listData={list} />;
};

export default QuestBoardPage;
