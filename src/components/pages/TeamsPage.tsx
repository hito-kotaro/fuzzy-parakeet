import React, { useEffect } from 'react';
import useTeamsPage from '../../hooks/useTeamsPage';
import CreateTeamTemplate from '../templates/CreateTeamTemplate';
import ListTemplate from '../templates/ListTemplate';

const TeamsPage = () => {
  const { list, listTemplateState, createTemplateState, filterList, onClickPlus } =
    useTeamsPage();
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
        className={` switch-components z-30 ${
          listTemplateState.isOpen ? display : hidden
        }`}
      >
        <ListTemplate
          title="Teams"
          listData={list}
          onClick={dummy}
          onClickPlus={onClickPlus}
        />
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
