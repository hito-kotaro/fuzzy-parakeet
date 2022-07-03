import React, { useEffect, VFC } from 'react';
import useInputForm from '../atoms/InputForms/InputForm/useInputForm';
import DocumentationForm from '../molecules/DocumentationForm/DocumentationForm';
import MiniHeader from '../organisms/Headers/MiniHeader';

type Props = {
  toggleComponent: () => void;
  questTitle: string;
};

const ReportTemplate: VFC<Props> = (props) => {
  const { toggleComponent, questTitle } = props;
  const titleHandler = useInputForm();
  const descriptionHandler = useInputForm();
  // const pointHandler = useInputForm();

  const titlePlaceholder = 'タイトルを入力してください(必須)';
  const descriptionPlaceholder = '報告内容を入力してください(必須)';
  // const pointPlaceholder = '付与ポイントを入力してください(必須)';

  useEffect(() => {}, []);
  return (
    <div className="">
      <MiniHeader
        title={questTitle}
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
        // pointHandler={pointHandler}
        // pointPlaceholder={pointPlaceholder}
        // addPointForm
      />
    </div>
  );
};

export default ReportTemplate;
