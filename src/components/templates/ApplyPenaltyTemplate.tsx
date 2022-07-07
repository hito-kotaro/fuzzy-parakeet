import React, { VFC } from 'react';
import { applyPenaltyType, penaltyType } from '../../types/PenaltyType';
import MiniHeader from '../organisms/Headers/MiniHeader';

type Props = {
  data: penaltyType;
  close: () => void;
};

const ApplyPenaltyTemplate: VFC<Props> = (props) => {
  const { data, close } = props;
  const onClickCreate = () => {
    const applyPenaltyData: applyPenaltyType = {
      teamId: 0,
      penaltyId: data.id,
      created_at: '2022/2/2',
      updated_at: '',
    };
    console.log(applyPenaltyData);
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
    </div>
  );
};

export default ApplyPenaltyTemplate;
