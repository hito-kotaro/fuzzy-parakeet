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
import useUserInfo from '../../hooks/useUserInfo';

const TeamsPage = () => {
  // const [list, setList] = useState<primaryListItem[]>([]);
  const { userInfo } = useUserInfo();
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
  const { teamList } = useTeamListState();
  const className = isSafari ? 'switch-components-safari' : 'switch-components';
  const { isLoading } = useLoading();
  const display = 'translate-x-0 opacity-100';
  const hidden = '-translate-x-full opacity-0';

  // レンダリング時にバックエンドからチーム一覧を取得
  useEffect(() => {
    fetchAllTeam();
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
          <div>
            <div className="h-10" />
            <Loading size={64} />
          </div>
        ) : (
          <ListTemplate
            title="チーム"
            blankText="チームがありません"
            listData={list}
            onClick={onClickListItem}
            onClickPlus={
              userInfo.role === 'root' || userInfo.role === 'master'
                ? onClickPlus
                : undefined
            }
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
