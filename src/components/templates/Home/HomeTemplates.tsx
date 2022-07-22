import React, { useEffect, VFC } from 'react';
import UserCard from '../../organisms/Cards/UserCard';
import HomeHeader from '../../organisms/Headers/HomeHeader';
import MyWorkList from '../../organisms/Lists/MyWorkList';
import { dropDownItem } from '../../../types/dropdownType';
import useUserApi from '../../../hooks/useUserApi';
import type { scoreType } from '../../../types/scoreType';

type Props = {
  score: scoreType;
  isSafari: boolean;
  dropdownItem: dropDownItem[];
};

const HomeTemplates: VFC<Props> = (props) => {
  const { score, dropdownItem } = props;

  const { fetchUserInfo } = useUserApi();

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <>
      <HomeHeader title="ホーム" dropDownItems={dropdownItem} />

      <div className="h-6" />

      <div className="px-3">
        <UserCard score={score} />
      </div>

      <div className="h-6" />

      <div className="px-3">
        <MyWorkList />
      </div>
    </>
  );
};
export default HomeTemplates;
