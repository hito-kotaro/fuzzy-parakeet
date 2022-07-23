import { IconCheckCircle } from '@supabase/ui';
import React, { useEffect, useState, VFC } from 'react';
import useUserInfo from '../../hooks/useUserInfo';
import { dropDownItem } from '../../types/dropdownType';
import { penaltyType } from '../../types/PenaltyType';
import { templateType } from '../../types/templateType';
import DetailCard from '../organisms/Cards/DetailCard/DetailCard';
import DetailHeader from '../organisms/Headers/DetailHeader';

type Props = {
  data: penaltyType;
  close: () => void;
  applyTemplateState: templateType;
};

const PenaltyDetailTemplate: VFC<Props> = (props) => {
  const { data, close, applyTemplateState } = props;
  const { userInfo } = useUserInfo();
  const [menu, setMenu] = useState<dropDownItem[]>([]);

  const makeMenu = () => {
    const newMenu: dropDownItem[] = [];

    const applyPenaltyMenu: dropDownItem = {
      icon: <IconCheckCircle stroke="red" />,
      onClick: applyTemplateState.open,
      text: 'ペナルティ適用',
      divider: false,
    };

    if (userInfo.role !== 'member') {
      newMenu.push(applyPenaltyMenu);
    }

    setMenu(newMenu);
  };

  useEffect(() => {
    makeMenu();
  }, [data]);

  return (
    <div className="bg-base h-full">
      <DetailHeader
        closeDetail={close}
        // ロールによって表示するメニューを変える。
        isDropdown
        dropDownItems={menu}
        name={data.owner}
        title={data.title}
        date=""
        // isDropdown={data.status === 'open'}
      />

      <DetailCard
        ownerName={data.owner}
        description={data.description}
        date=""
        badgeText="owner"
        badgeColor="purple"
      />
    </div>
  );
};

export default PenaltyDetailTemplate;
