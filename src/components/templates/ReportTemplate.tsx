import React, { VFC } from 'react';
import useApproveRequestApi from '../../hooks/useApproveRequestApi';
import { createApproveRequests } from '../../types/approveRequestType';
import useInputForm from '../atoms/InputForms/InputForm/useInputForm';
import DocumentationForm from '../molecules/DocumentationForm/DocumentationForm';
import ReportHeader from '../organisms/Headers/ReportHeader';

type Props = {
  questTitle: string;
  questId: number;
  close: () => void;
};

const ReportTemplate: VFC<Props> = (props) => {
  const { questId, questTitle, close } = props;
  const descriptionHandler = useInputForm();
  const { createReport } = useApproveRequestApi();
  const titlePlaceholder = 'タイトルを入力してください(必須)';
  const descriptionPlaceholder = '報告内容を入力してください(必須)';

  const clear = () => {
    descriptionHandler.clear();
  };

  const onClickCancel = () => {
    clear();
    close();
  };

  const onClickReport = () => {
    const newReport: createApproveRequests = {
      title: `${questTitle}-report`,
      description: descriptionHandler.input,
      quest_id: questId,
    };

    createReport(newReport);
    clear();
    close();
  };

  return (
    <div className="bg-base h-full">
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
        titlePlaceholder={titlePlaceholder}
        descriptionHandler={descriptionHandler}
        descriptionPlaceholder={descriptionPlaceholder}
        defaultTitle={`${questTitle}-report`}
      />
    </div>
  );
};

export default ReportTemplate;
