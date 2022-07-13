import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import useTeamApi from '../../hooks/useTeamApi';
import useTeamsPage from '../../hooks/useTeamsPage';
import useUserAgent from '../../hooks/useUserAgent';
import CreateTeamTemplate from '../templates/CreateTeamTemplate';
import ListTemplate from '../templates/ListTemplate';
import TeamDetailTemplate from '../templates/TeamDetailTemplate';

const TeamsPage = () => {
  const {
    list,
    team,
    listTemplateState,
    detailTemplateState,
    createTemplateState,
    filterList,
    onClickPlus,
    onClickListItem,
  } = useTeamsPage();

  const { fetchAllTeam, teamListRaw } = useTeamApi();
  const { isSafari } = useUserAgent();
  const className = isSafari ? 'switch-components-safari' : 'switch-components';

  const display = 'translate-x-0 opacity-100';
  const hidden = '-translate-x-full opacity-0';

  // レンダリング時にバックエンドからチーム一覧を取得
  useEffect(() => {
    fetchAllTeam();
  }, []);

  useEffect(() => {
    console.log('update raw team list');
    filterList(teamListRaw);
  }, [teamListRaw]);

  const dummy = () => {
    console.log('test');
  };

  return (
    <>
      <div
        className={` ${className} z-30 ${listTemplateState.isOpen ? display : hidden}`}
      >
        <ListTemplate
          title="Teams"
          listData={list}
          onClick={onClickListItem}
          onClickPlus={onClickPlus}
        />
      </div>

      <div
        className={` ${className} z-30 overflow-scroll ${
          detailTemplateState.isOpen ? display : hidden
        }`}
      >
        <TeamDetailTemplate data={team} close={detailTemplateState.close} />
      </div>

      <div
        className={` ${className} z-40 ${createTemplateState.isOpen ? display : hidden}`}
      >
        <CreateTeamTemplate close={createTemplateState.close} />
      </div>
    </>
  );
};

export default TeamsPage;
