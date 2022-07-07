import React, { VFC } from 'react';
import { Link } from 'react-router-dom';
import { createQuestType } from '../../../types/Quest/QuestType';

type Props = {
  title: string;
  createText: string;
  onClickCancel: () => void;
  onClickCreate: () => void;
};

const CreateQuestHeader: VFC<Props> = (props) => {
  const { title, createText, onClickCancel, onClickCreate } = props;
  const dummyLink = '';
  return (
    <div className="sticky top-0 z-50 bg-base drop-shadow-md p-2">
      <div className="flex justify-between">
        <Link to={dummyLink} onClick={onClickCancel} className="text-blue-700 text-lg">
          <div className="flex">
            <div className="leading-8">キャンセル</div>
          </div>
        </Link>

        <Link to={dummyLink} onClick={onClickCreate} className="text-blue-700 text-lg">
          <div className="flex">
            <div className="leading-8">{createText}</div>
          </div>
        </Link>
      </div>
      <div className="w-full text-center">{title}</div>
    </div>
  );
};

export default CreateQuestHeader;
