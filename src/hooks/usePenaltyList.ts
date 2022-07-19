import React from 'react';
import { useRecoilState } from 'recoil';
import { penaltyListState } from '../stores/penaltyListState';

const usePenaltyList = () => {
  const [penaltyList, setPenaltyList] = useRecoilState(penaltyListState);
  return { penaltyList, setPenaltyList };
};

export default usePenaltyList;
