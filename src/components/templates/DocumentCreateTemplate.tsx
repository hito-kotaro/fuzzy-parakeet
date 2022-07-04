import React, { VFC } from 'react';
import useInputForm from '../atoms/InputForms/InputForm/useInputForm';
import DocumentationForm from '../molecules/DocumentationForm/DocumentationForm';
import MiniHeader from '../organisms/Headers/MiniHeader';

type Props = {
  toggleComponent: () => void;
  title: string;
  titlePlaceholder: string;
  descriptionPlaceholder: string;
  addPointForm?: boolean;
  pointPlaceholder?: string;
};

const DocumentCreateTemplate: VFC<Props> = (props) => {
  const {
    toggleComponent,
    title,
    titlePlaceholder,
    descriptionPlaceholder,
    addPointForm,
    pointPlaceholder,
  } = props;

  const titleHandler = useInputForm();
  const descriptionHandler = useInputForm();
  const pointHandler = useInputForm();

  return (
    <div className="">
      <MiniHeader
        title={title}
        backTo=""
        onClickBack={toggleComponent}
        goTo="/questboard"
        onClickGo={toggleComponent}
        positiveLinkText="報告"
      />
      <div className="h-2" />

      <DocumentationForm
        titleHandler={titleHandler}
        titlePlaceholder={titlePlaceholder}
        descriptionHandler={descriptionHandler}
        descriptionPlaceholder={descriptionPlaceholder}
        pointHandler={pointHandler}
        pointPlaceholder={pointPlaceholder ?? '付与ポイントを入力してください(必須)'}
        addPointForm={addPointForm}
      />
    </div>
  );
};

export default DocumentCreateTemplate;
