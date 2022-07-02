import React, { useState } from 'react';
import { primaryListItem } from '../types/ListItem/PrimaryListItemType';
import { questType } from '../types/Quest/QuestType';

const useQuestBordPage = () => {
  const [questList, setQuestList] = useState<questType[]>();

  return { questList, setQuestList };
};

export default useQuestBordPage;
