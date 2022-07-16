import React from 'react';
import { useRecoilState } from 'recoil';
import { questListState } from '../stores/questListState';

const useQuestList = () => {
  const [questList, setQuestList] = useRecoilState(questListState);
  return { questList, setQuestList };
};

export default useQuestList;
