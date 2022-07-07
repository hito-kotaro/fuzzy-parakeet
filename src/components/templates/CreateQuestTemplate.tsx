import React, { VFC } from 'react';
import { createQuestType } from '../../types/Quest/QuestType';
import useInputForm from '../atoms/InputForms/InputForm/useInputForm';
import DocumentationForm from '../molecules/DocumentationForm/DocumentationForm';
import MiniHeader from '../organisms/Headers/MiniHeader';

type Props = {
  close: () => void;
};

const CreateQuestTemplate: VFC<Props> = (props) => {
  const { close } = props;
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

  const onClickCancel = () => {
    clear();
    close();
  };

  const onClickCreate = () => {
    const newQuest: createQuestType = {
      owner: 'kotaro',
      title: titleHandler.input,
      description: descriptionHandler.input,
      date: '2022/12/21',
      point: Number(pointHandler.input),
      status: true,
    };
    console.log(newQuest);
    clear();
    close();
  };

  return (
    <div className="bg-base h-full">
      <MiniHeader
        title="新しいクエストを発行"
        createText="発行"
        onClickCancel={onClickCancel}
        onClickCreate={onClickCreate}
      />

      <div className="h-2" />
      <div>
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
    </div>
  );
};

export default CreateQuestTemplate;
