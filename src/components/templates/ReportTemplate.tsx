import React, { useEffect, VFC } from 'react';
import InputForm from '../atoms/InputForms/InputForm/InputForm';
import useInputForm from '../atoms/InputForms/InputForm/useInputForm';
import TextArea from '../atoms/InputForms/TextArea';
import MiniHeader from '../organisms/Headers/MiniHeader';

type Props = {
  toggleComponent: () => void;
  questTitle: string;
};

const ReportTemplate: VFC<Props> = (props) => {
  const { toggleComponent, questTitle } = props;
  const titleHandler = useInputForm();
  const descriptionHandler = useInputForm();

  const titlePlaceholder = '報告書のタイトルを入力してください(必須)';
  const descriptionPlaceholder = '報告内容を入力してください(必須)';

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
      <div className="px-2">
        <div className="h-10 border-1 border-gray-300">
          <InputForm
            inputHandler={titleHandler}
            placeholder={titlePlaceholder}
            password
            color="bg-base"
          />
        </div>
        <div className="h-2" />
        <div className="h-70% border-1 border-gray-300">
          <TextArea
            inputHandler={descriptionHandler}
            placeholder={descriptionPlaceholder}
            color="bg-base"
          />
        </div>
      </div>
    </div>
  );
};

export default ReportTemplate;
