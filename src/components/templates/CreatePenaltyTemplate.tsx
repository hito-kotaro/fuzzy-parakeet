import React, { VFC } from 'react';
import { createPenaltyType } from '../../types/PenaltyType';
import useInputForm from '../atoms/InputForms/InputForm/useInputForm';
import DocumentationForm from '../molecules/DocumentationForm/DocumentationForm';
import MiniHeader from '../organisms/Headers/MiniHeader';

type Props = {
  close: () => void;
};
const createPenaltyTemplate: VFC<Props> = (props) => {
  const { close } = props;
  const titleHandler = useInputForm();
  const pointHandler = useInputForm();
  const descriptionHandler = useInputForm();

  const titlePlaceholder = 'タイトルを入力してください(必須)';
  const descriptionPlaceholder = 'ペナルティ内容を入力してください(任意)';
  const pointPlaceholder = 'ペナルティポイントを入力してください(必須)';

  const clear = () => {
    titleHandler.clear();
    descriptionHandler.clear();
  };

  const onClickCreate = () => {
    const newQuest: createPenaltyType = {
      ownerId: 0,
      owner: 'kotaro',
      title: titleHandler.input,
      description: descriptionHandler.input,
      created_at: '2022/12/21',
      updated_at: '',
      penalty: Number(pointHandler.input),
    };
    console.log(newQuest);
    clear();
    close();
  };

  const onClickCancel = () => {
    clear();
    close();
  };

  return (
    <div className="bg-base h-full">
      <MiniHeader
        title="新しいペナルティを発行"
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
          defaultTitle="PenaltyName"
        />
      </div>
    </div>
  );
};

export default createPenaltyTemplate;
