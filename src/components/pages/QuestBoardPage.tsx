import { IconCheckCircle } from '@supabase/ui';
import React, { useEffect, useState } from 'react';
import useLoading from '../../hooks/useLoading';
import usePrimaryList from '../../hooks/usePrimaryList';
import useQuestApi from '../../hooks/useQuestApi';
import useQuestBordPage from '../../hooks/useQuestBordPage';
import useQuestList from '../../hooks/useQuestList';
import useTemplate from '../../hooks/useTemplate';
import useUserAgent from '../../hooks/useUserAgent';
import { questData } from '../../testData/QuestTestData';
import { dropDownItem } from '../../types/dropdownType';
import { primaryListItem } from '../../types/ListItem/PrimaryListItemType';
import { createQuestType, questType } from '../../types/Quest/QuestType';
import { reportType } from '../../types/reportType';
import CreateQuestTemplate from '../templates/CreateQuestTemplate';
import DetailTemplate from '../templates/DetailTemplate';
import ListTemplate from '../templates/ListTemplate';
import ReportTemplate from '../templates/ReportTemplate';

const QuestBoardPage = () => {
  const { isLoading } = useLoading();
  const { fetchQuestAll } = useQuestApi();
  const display = 'translate-x-0 opacity-100';
  const hidden = '-translate-x-full opacity-0';
  const defaultQuest: questType = {
    id: -999,
    owner: 'けつばん',
    title: 'けつばん',
    description: 'けつばん',
    date: '20xx/xx/xx',
    reward: -999,
    status: false,
  };

  const { isSafari } = useUserAgent();
  const className = isSafari ? 'switch-components-safari' : 'switch-components';
  // const { questList, setQuestList } = useQuestBordPage();
  const { list, setList } = usePrimaryList();
  const [quest, setQuest] = useState<questType>(defaultQuest);
  const listTemplate = useTemplate(true);
  const detailTemplate = useTemplate(false);
  const reportTemplate = useTemplate(false);
  const createTemplate = useTemplate(false);
  const { questList } = useQuestList();

  useEffect(() => {
    // クエストを取得
    fetchQuestAll();
  }, []);

  // クエスト情報をprimaryListItemに投入
  useEffect(() => {
    const primaryList: primaryListItem[] = questList.map((q) => {
      const item: primaryListItem = {
        id: q.id,
        name: q.owner,
        title: q.title,
        description: q.description,
        date: 'no',
        badgeColor: 'green',
        badgeText: `${q.reward}point`,
      };
      return item;
    });
    setList(primaryList);
  }, [questList]);

  // PrimaryListItemをクリックしたときに詳細を表示する
  const onClickListItem = (id: number) => {
    // idで対象データを探す
    const data = questList.filter((d: questType) => {
      return d.id === id;
    });
    setQuest(data[0]);
    detailTemplate.open();
  };

  // クエスト発行画面の表示
  const onClickPlus = () => {
    console.log('create');
    createTemplate.open();
  };

  const issueQuest = (q: createQuestType) => {
    console.log(q);
    createTemplate.close();
  };

  const memberMenu: dropDownItem[] = [
    {
      icon: <IconCheckCircle />,
      onClick: reportTemplate.open,
      text: '完了報告',
      divider: false,
    },
  ];

  return (
    <>
      <div className={`${className} z-30 ${listTemplate.isOpen ? display : hidden}`}>
        <ListTemplate
          title="QuestBoard"
          blankText="クエストがありません"
          listData={list}
          onClick={onClickListItem}
          onClickPlus={onClickPlus}
        />
      </div>

      <div className={`${className} z-40 ${detailTemplate.isOpen ? display : hidden}`}>
        <DetailTemplate
          data={{
            name: quest.owner,
            title: quest.title,
            description: quest.description,
            date: quest.date,
          }}
          close={detailTemplate.close}
          dropDownMenu={memberMenu}
        />
      </div>

      <div className={`${className} z-50 ${reportTemplate.isOpen ? display : hidden}`}>
        <ReportTemplate
          questTitle={quest.title}
          questId={quest.id}
          close={reportTemplate.close}
        />
      </div>
      <div className={`${className} z-50 ${createTemplate.isOpen ? display : hidden}`}>
        <CreateQuestTemplate close={createTemplate.close} />
      </div>
    </>
  );
};

export default QuestBoardPage;
