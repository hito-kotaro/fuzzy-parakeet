import { IconCheckCircle } from '@supabase/ui';
import React, { useEffect, useState } from 'react';
import useLoading from '../../hooks/useLoading';
import usePrimaryList from '../../hooks/usePrimaryList';
import useQuestApi from '../../hooks/useQuestApi';
import useQuestList from '../../hooks/useQuestList';
import useTemplate from '../../hooks/useTemplate';
import useUserAgent from '../../hooks/useUserAgent';
import { dropDownItem } from '../../types/dropdownType';
import { primaryListItem } from '../../types/ListItem/PrimaryListItemType';
import { questType } from '../../types/Quest/QuestType';
import CreateQuestTemplate from '../templates/CreateQuestTemplate';
import DetailTemplate from '../templates/DetailTemplate';
import ListTemplate from '../templates/ListTemplate';
import ReportTemplate from '../templates/ReportTemplate';
import Loading from '../atoms/Loading';
import useUserInfo from '../../hooks/useUserInfo';

const QuestBoardPage = () => {
  const { userInfo } = useUserInfo();
  const { isLoading } = useLoading();
  const [menu, setMenu] = useState<dropDownItem[]>([]);
  const { fetchQuestAll } = useQuestApi();
  const display = 'translate-x-0 opacity-100';
  const hidden = '-translate-x-full opacity-0';
  const defaultQuest: questType = {
    id: 0,
    owner: '',
    title: '',
    description: '',
    date: '',
    reward: 0,
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

  const dummy = () => {
    console.log('dummy');
  };

  const makeMenu = () => {
    const newMenu: dropDownItem[] = [];

    const createReport: dropDownItem = {
      icon: <IconCheckCircle />,
      onClick: reportTemplate.open,
      text: '完了報告',
      divider: false,
    };

    const deleteQuest: dropDownItem = {
      icon: <IconCheckCircle />,
      onClick: dummy,
      text: 'クエスト削除',
      divider: true,
    };

    const updateQuest: dropDownItem = {
      icon: <IconCheckCircle />,
      onClick: dummy,
      text: 'クエスト更新',
      divider: false,
    };
    console.log(userInfo.role);
    if (userInfo.role === 'reader' || userInfo.role === 'member') {
      newMenu.push(createReport);
    } else {
      newMenu.push(updateQuest);
      newMenu.push(deleteQuest);
    }

    setMenu(newMenu);
  };

  useEffect(() => {
    // クエストを取得
    fetchQuestAll();

    // menuを作成
    makeMenu();
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
    createTemplate.open();
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
        {isLoading ? (
          <div>
            <div className="h-10" />
            <Loading size={64} />
          </div>
        ) : (
          <ListTemplate
            title="クエストボード"
            blankText="クエストがありません"
            listData={list}
            onClick={onClickListItem}
            onClickPlus={onClickPlus}
          />
        )}
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
          dropDownMenu={menu}
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
