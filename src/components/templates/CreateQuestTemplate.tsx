import React, { VFC } from 'react';
import { createQuestType } from '../../types/Quest/QuestType';
import useInputForm from '../atoms/InputForms/InputForm/useInputForm';
import DocumentationForm from '../molecules/DocumentationForm/DocumentationForm';
import CreateQuestHeader from '../organisms/Headers/CreateQuestHeader';

type Props = {
  close: () => void;
  issueQuest: (q: createQuestType) => void;
};

const CreateQuestTemplate: VFC<Props> = (props) => {
  const { close, issueQuest } = props;
  const titleHandler = useInputForm();
  const pointHandler = useInputForm();
  const descriptionHandler = useInputForm();

  const titlePlaceholder = 'タイトルを入力してください(必須)';
  const descriptionPlaceholder = 'クエスト内容を入力してください(任意)';
  const pointPlaceholder = '達成ポイントを入力してください(必須)';
  const clear = () => {
    titleHandler.clear();
    descriptionHandler.clear();
  };

  const onClockCancel = () => {
    clear();
    close();
  };

  return (
    <div className="bg-base h-screen">
      <CreateQuestHeader
        onClickCancel={onClockCancel}
        onClickIssue={issueQuest}
        title={titleHandler.input}
        description={descriptionHandler.input}
        reward={Number(pointHandler.input)}
      />

      <div className="h-2" />

      <DocumentationForm
        titleHandler={titleHandler}
        titlePlaceholder={titlePlaceholder}
        descriptionHandler={descriptionHandler}
        descriptionPlaceholder={descriptionPlaceholder}
        pointHandler={pointHandler}
        pointPlaceholder={pointPlaceholder}
        addPointForm
        defaultTitle="QuestName"
      />
    </div>
  );
};

export default CreateQuestTemplate;
