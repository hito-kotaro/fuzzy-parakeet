import React, { VFC } from 'react';
import { reportType } from '../../types/reportType';
import useInputForm from '../atoms/InputForms/InputForm/useInputForm';
import DocumentationForm from '../molecules/DocumentationForm/DocumentationForm';
import ReportHeader from '../organisms/Headers/ReportHeader';

type Props = {
  questTitle: string;
  questId: number;
  close: () => void;
  sendReport: (r: reportType) => void;
};

const ReportTemplate: VFC<Props> = (props) => {
  const { questId, questTitle, close, sendReport } = props;
  const titleHandler = useInputForm();
  const descriptionHandler = useInputForm();
  // const pointHandler = useInputForm();

  const titlePlaceholder = 'タイトルを入力してください(必須)';
  const descriptionPlaceholder = '報告内容を入力してください(必須)';
  // const pointPlaceholder = '付与ポイントを入力してください(必須)';

  const clear = () => {
    titleHandler.clear();
    descriptionHandler.clear();
  };
  const onClickCancel = () => {
    clear();
    close();
  };

  const onClickReport = (r: reportType) => {
    sendReport(r);
    clear();
  };

  return (
    <div className="bg-base h-screen">
      <ReportHeader
        title={`${questTitle}-report`}
        id={questId}
        reportTitle={`${questTitle}-report`}
        reportDescription={descriptionHandler.input}
        onClickCancel={onClickCancel}
        onClickReport={onClickReport}
      />

      <div className="h-2" />

      <DocumentationForm
        // titleHandler={titleHandler}
        titlePlaceholder={titlePlaceholder}
        descriptionHandler={descriptionHandler}
        descriptionPlaceholder={descriptionPlaceholder}
        defaultTitle={`${questTitle}-report`}
        // pointHandler={pointHandler}
        // pointPlaceholder={pointPlaceholder}
        // addPointForm
      />
    </div>
  );
};

export default ReportTemplate;
