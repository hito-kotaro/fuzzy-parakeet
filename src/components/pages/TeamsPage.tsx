import React, { useEffect } from 'react';
import useTeamsPage from '../../hooks/useTeamsPage';
import DetailHeader from '../organisms/Headers/DetailHeader';
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
  const display = 'translate-x-0 opacity-100';
  const hidden = '-translate-x-full opacity-0';

  useEffect(() => {
    filterList();
  }, []);

  const dummy = () => {
    console.log('test');
  };

  return (
    <>
      <div
        className={` switch-components bg-red-200 z-30 ${
          listTemplateState.isOpen ? display : hidden
        }`}
      >
        <ListTemplate
          title="Teams"
          listData={list}
          onClick={onClickListItem}
          onClickPlus={onClickPlus}
        />
      </div>

      <div
        className={` switch-components z-30 overflow-scroll ${
          detailTemplateState.isOpen ? display : hidden
        }`}
      >
        <TeamDetailTemplate data={team} close={detailTemplateState.close} />
      </div>

      <div
        className={` switch-components z-40 ${
          createTemplateState.isOpen ? display : hidden
        }`}
      >
        <CreateTeamTemplate close={createTemplateState.close} />
      </div>
    </>
  );
};

export default TeamsPage;
