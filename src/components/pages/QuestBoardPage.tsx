import { Badge } from '@supabase/ui';
import React, { useEffect, useState } from 'react';
import usePrimaryList from '../../hooks/usePrimaryList';
import useQuestBordPage from '../../hooks/useQuestBordPage';
import useTemplate from '../../hooks/useTemplate';
import { questData } from '../../testData/QuestTestData';
import { primaryListItem } from '../../types/ListItem/PrimaryListItemType';
import { questType } from '../../types/Quest/QuestType';
import { reportType } from '../../types/reportType';
import DetailTemplate from '../templates/DetailTemplate';
import ListTemplate from '../templates/ListTemplate';
import ReportTemplate from '../templates/ReportTemplate';

const QuestBoardPage = () => {
  const display = 'translate-x-0 opacity-100';
  const hidden = '-translate-x-full opacity-0';
  const defaultQuest: questType = {
    id: -999,
    owner: 'けつばん',
    title: 'けつばん',
    description: 'けつばん',
    date: '20xx/xx/xx',
    point: -999,
    status: false,
  };

  const { questList, setQuestList } = useQuestBordPage();
  const { list, setList } = usePrimaryList();
  const [quest, setQuest] = useState<questType>(defaultQuest);
  const listTemplate = useTemplate(true);
  const detailTemplate = useTemplate(false);
  const reportTemplate = useTemplate(false);
  const createTemplate = useTemplate(false);

  useEffect(() => {
    // クエストを取得
    setQuestList(questData);
  }, []);

  // クエスト情報をprimaryListItemに投入
  useEffect(() => {
    const primaryList: primaryListItem[] = questData.map((q) => {
      const item: primaryListItem = {
        id: q.id,
        name: q.owner,
        title: q.title,
        description: q.description,
        date: q.date,
        badge: <Badge>{`${q.point}point`}</Badge>,
      };
      return item;
    });
    setList(primaryList);
  }, [questList]);

  // PrimaryListItemをクリックしたときに詳細を表示する
  const onClickListItem = (id: number) => {
    // idで対象データを探す
    const data = questData.filter((d: questType) => {
      return d.id === id;
    });
    setQuest(data[0]);
    detailTemplate.open();
  };

  // 報告作成用関数 後でAPI通信実装
  const onClickReportCreate = (r: reportType) => {
    console.log(r.questId);
    console.log(r.applicantId);
    console.log(r.reportTitle);
    console.log(r.reportDescription);
    reportTemplate.close();
  };

  return (
    <>
      <div className={` switch-components z-30 ${listTemplate.isOpen ? display : hidden}`}>
        <ListTemplate title="QuestBoard" listData={list} onClick={onClickListItem} />
      </div>

      <div className={`switch-components z-40 ${detailTemplate.isOpen ? display : hidden}`}>
        <DetailTemplate
          quest={quest}
          close={detailTemplate.close}
          reportOpen={reportTemplate.open}
        />
      </div>

      <div className={`switch-components z-50 ${reportTemplate.isOpen ? display : hidden}`}>
        <ReportTemplate
          questTitle={quest.title}
          questId={quest.id}
          sendReport={onClickReportCreate}
          close={reportTemplate.close}
        />
      </div>
    </>
  );
};

export default QuestBoardPage;
