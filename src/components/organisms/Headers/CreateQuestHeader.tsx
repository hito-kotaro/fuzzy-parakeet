import React, { VFC } from 'react';
import { Link } from 'react-router-dom';
import { createQuestType } from '../../../types/Quest/QuestType';

type Props = {
  title: string;
  description: string;
  reward: number;
  onClickCancel: () => void;
  onClickIssue: (q: createQuestType) => void;
};

const CreateQuestHeader: VFC<Props> = (props) => {
  const { onClickCancel, onClickIssue, title, description, reward } = props;

  const newQuest: createQuestType = {
    owner: 'kotaro',
    title,
    description,
    date: '2022/12/31',
    point: reward,
    status: true,
  };

  return (
    <div className=" lead sticky top-0 z-50 bg-base drop-shadow-md p-2">
      <div className="flex justify-between">
        <Link to="/questboard" onClick={onClickCancel} className="text-blue-700 text-lg">
          <div className="flex">
            <div className="leading-8">キャンセル</div>
          </div>
        </Link>

        <Link
          to="/questboard"
          onClick={() => onClickIssue(newQuest)}
          className="text-blue-700 text-lg"
        >
          <div className="flex">
            <div className="leading-8">発行</div>
          </div>
        </Link>
      </div>
      <div className="w-full text-center">新しいクエストを発行</div>
    </div>
  );
};

export default CreateQuestHeader;
