import React, { VFC } from 'react';
import usePenaltyApi from '../../hooks/usePenaltyApi';
import { issuePenaltyType, penaltyType } from '../../types/PenaltyType';
import { SelectItem } from '../../types/Select/SelectItemType';
import useInputForm from '../atoms/InputForms/InputForm/useInputForm';
import SelectForm from '../atoms/InputForms/SelectForm/SelectForm';
import useSelectForm from '../atoms/InputForms/SelectForm/useSelectForm';
import TextArea from '../atoms/InputForms/TextArea';
import MiniHeader from '../organisms/Headers/MiniHeader';

type Props = {
  data: penaltyType;
  teamSelect: SelectItem[];
  close: () => void;
};

const ApplyPenaltyTemplate: VFC<Props> = (props) => {
  const { data, teamSelect, close } = props;
  const selectHandler = useSelectForm('');
  const { issuePenalty } = usePenaltyApi();
  const descriptionHandler = useInputForm();
  const placeholder = 'ペナルティーの詳細を入力(任意)';

  const onClickCreate = () => {
    const issuePenaltyData: issuePenaltyType = {
      team_id: Number(selectHandler.value),
      penalty_id: data.id,
      // description: descriptionHandler.input,
    };
    issuePenalty(issuePenaltyData);

    close();
  };

  return (
    <div className="bg-base h-full">
      <MiniHeader
        title={`${data.title} を適用`}
        createText="適用"
        onClickCancel={close}
        onClickCreate={onClickCreate}
      />
      <SelectForm selectItemList={teamSelect} selectHandler={selectHandler} />
      <TextArea
        inputHandler={descriptionHandler}
        color="bg-base"
        placeholder={placeholder}
      />
    </div>
  );
};

export default ApplyPenaltyTemplate;
