import React, { VFC } from 'react';
import { createTeamType } from '../../types/teamsType';
import useInputForm from '../atoms/InputForms/InputForm/useInputForm';
import DocumentationForm from '../molecules/DocumentationForm/DocumentationForm';
import MiniHeader from '../organisms/Headers/MiniHeader';

type Props = {
  close: () => void;
};

const CreateTeamTemplate: VFC<Props> = (props) => {
  const { close } = props;
  const nameHandler = useInputForm();
  const descriptionHandler = useInputForm();

  const namePlaceholder = 'チーム名を入力してください(必須)';
  const descriptionPlaceholder = 'コメントを入力してください(任意)';

  const clear = () => {
    nameHandler.clear();
    descriptionHandler.clear();
  };

  const onClickCancel = () => {
    clear();
    close();
  };

  const onClickCreate = () => {
    const newTeam: createTeamType = {
      name: nameHandler.input,
      description: descriptionHandler.input,
      teamTotalPoint: 0,
      teamPenalty: 0,
      created_at: 'today',
      updated_at: '',
    };

    console.log(newTeam);

    clear();
    close();
  };

  return (
    <div className="bg-base h-screen">
      <MiniHeader
        title="新しいチームを作成"
        createText="作成"
        onClickCancel={onClickCancel}
        onClickCreate={onClickCreate}
      />
      <div className="h-2" />
      <DocumentationForm
        titleHandler={nameHandler}
        titlePlaceholder={namePlaceholder}
        descriptionHandler={descriptionHandler}
        descriptionPlaceholder={descriptionPlaceholder}
      />
    </div>
  );
};

export default CreateTeamTemplate;
