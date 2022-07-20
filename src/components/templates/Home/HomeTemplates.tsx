import React, { useEffect, VFC } from 'react';
import { IconLogOut, IconSettings } from '@supabase/ui';
import UserCard from '../../organisms/Cards/UserCard';
import HomeHeader from '../../organisms/Headers/HomeHeader';
import MyWorkList from '../../organisms/Lists/MyWorkList';
import { dropDownItem } from '../../../types/dropdownType';
import useUserApi from '../../../hooks/useUserApi';
import { templateType } from '../../../types/templateType';
import { smallUserType } from '../../../types/usersType';

type Props = {
  isSafari: boolean;
  userInfo: smallUserType;
  dropdownItem: dropDownItem[];
};

const HomeTemplates: VFC<Props> = (props) => {
  const { isSafari, userInfo, dropdownItem } = props;
  const className = isSafari ? 'switch-components-safari' : 'switch-components';

  const { fetchUserInfo } = useUserApi();

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <>
      <HomeHeader title="ホーム" dropDownItems={dropdownItem} />

      <div className="h-6" />

      <div className="px-3">
        <UserCard team={userInfo.team} userName={userInfo.name} />
      </div>

      <div className="h-6" />

      <div className="px-3">
        <MyWorkList />
      </div>
    </>
  );
};
export default HomeTemplates;
