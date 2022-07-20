import React, { useEffect } from 'react';
import useTeamApi from '../../hooks/useTeamApi';
import useTeamListState from '../../hooks/useTeamListState';
import useTeamsPage from '../../hooks/useTeamsPage';
import useUserAgent from '../../hooks/useUserAgent';
import CreateTeamTemplate from '../templates/CreateTeamTemplate';
import ListTemplate from '../templates/ListTemplate';
import TeamDetailTemplate from '../templates/TeamDetailTemplate';
import Loading from '../atoms/Loading';
import useLoading from '../../hooks/useLoading';

const TeamsPage = () => {
  // const [list, setList] = useState<primaryListItem[]>([]);
  const {
    list,
    filterList,
    team,
    listTemplateState,
    detailTemplateState,
    createTemplateState,
    onClickPlus,
    onClickListItem,
  } = useTeamsPage();

  const { fetchAllTeam } = useTeamApi();
  const { isSafari } = useUserAgent();
  const { teamList, setTeamList } = useTeamListState();
  const className = isSafari ? 'switch-components-safari' : 'switch-components';
  const { isLoading } = useLoading();
  const display = 'translate-x-0 opacity-100';
  const hidden = '-translate-x-full opacity-0';

  // レンダリング時にバックエンドからチーム一覧を取得
  useEffect(() => {
    fetchAllTeam();
    console.log(teamList);
  }, []);

  // teamを作成、削除したときにBEから一覧を再取得
  useEffect(() => {
    filterList(teamList);
  }, [teamList]);

  return (
    <>
      <div
        className={` ${className} z-30 ${listTemplateState.isOpen ? display : hidden}`}
      >
        {isLoading ? (
          <Loading />
        ) : (
          <ListTemplate
            title="Teams"
            blankText="チームがありません"
            listData={list}
            onClick={onClickListItem}
            onClickPlus={onClickPlus}
          />
        )}
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
