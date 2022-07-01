import { Badge } from '@supabase/ui';
import React, { VFC } from 'react';
import { primaryListItem } from '../../types/ListItem/PrimaryListItemType';
import useSearchForm from '../atoms/InputForms/SearchForm/useSearchForm';
import useSelectForm from '../atoms/InputForms/SelectForm/useSelectForm';
import PrimaryListItem from '../molecules/PrimaryListItem';
import CategoryHeader from '../organisms/Headers/CategoryHeader';

type Props = {
  title: string;
};

const CategoryTemplate: VFC<Props> = (props) => {
  const { title } = props;
  const searchHandler = useSearchForm();
  const selectHandler = useSelectForm();
  const buttonAction = () => {
    console.log('push create button');
  };

  const primaryListItemList: primaryListItem[] = [
    {
      owner: 'sato_hiroki',
      title: '月報提出',
      description: '翌月第一営業日中に提出',
      date: '2022/6/29',
      point: 1,
    },
    {
      owner: 'sato_hiroki',
      title: '作業報告書提出',
      description: '翌月第一営業日中に提出',
      date: '2022/6/29',
      point: 1,
    },
    {
      owner: 'sato_hiroki',
      title: 'プレゼン実施',
      description: '発電会でプレゼンを行う',
      date: '2022/6/29',
      point: 3,
    },
    {
      owner: 'sato_hiroki',
      title: '資格取得',
      description: '宣言した資格を取得する',
      date: '2022/6/29',
      point: 10,
    },
    {
      owner: 'sato_hiroki',
      title: '資格取得',
      description: '宣言した資格を取得する',
      date: '2022/6/29',
      point: 10,
    },
    {
      owner: 'sato_hiroki',
      title: '資格取得',
      description: '宣言した資格を取得する',
      date: '2022/6/29',
      point: 10,
    },
    {
      owner: 'sato_hiroki',
      title: '資格取得',
      description: '宣言した資格を取得する',
      date: '2022/6/29',
      point: 10,
    },
    {
      owner: 'sato_hiroki',
      title: '資格取得',
      description: '宣言した資格を取得する',
      date: '2022/6/29',
      point: 10,
    },
    {
      owner: 'sato_hiroki',
      title: '資格取得',
      description: '宣言した資格を取得する',
      date: '2022/6/29',
      point: 10,
    },
    {
      owner: 'sato_hiroki',
      title: '資格取得',
      description: '宣言した資格を取得する',
      date: '2022/6/29',
      point: 10,
    },
    {
      owner: 'sato_hiroki',
      title: '資格取得',
      description: '宣言した資格を取得する',
      date: '2022/6/29',
      point: 10,
    },
    {
      owner: 'sato_hiroki',
      title: '資格取得',
      description: '宣言した資格を取得する',
      date: '2022/6/29',
      point: 10,
    },
    {
      owner: 'sato_hiroki',
      title: '資格取得',
      description: '宣言した資格を取得する',
      date: '2022/6/29',
      point: 10,
    },
    {
      owner: 'sato_hiroki',
      title: '資格取得',
      description: '宣言した資格を取得する',
      date: '2022/6/29',
      point: 10,
    },
    {
      owner: 'sato_hiroki',
      title: '資格取得',
      description: '宣言した資格を取得する',
      date: '2022/6/29',
      point: 10,
    },
    {
      owner: 'sato_hiroki',
      title: '資格取得',
      description: '宣言した資格を取得する',
      date: '2022/6/29',
      point: 10,
    },
    {
      owner: 'sato_hiroki',
      title: '資格取得',
      description: '宣言した資格を取得する',
      date: '2022/6/29',
      point: 10,
    },
    {
      owner: 'sato_hiroki',
      title: '資格取得',
      description: '宣言した資格を取得する',
      date: '2022/6/29',
      point: 10,
    },
    {
      owner: 'sato_hiroki',
      title: '資格取得',
      description: '宣言した資格を取得する',
      date: '2022/6/29',
      point: 10,
    },
    {
      owner: 'sato_hiroki',
      title: '資格取得',
      description: '宣言した資格を取得する',
      date: '2022/6/29',
      point: 10,
    },
  ];

  return (
    <>
      <div>
        <CategoryHeader
          title={title}
          searchHandler={searchHandler}
          selectHandler={selectHandler}
          onClick={buttonAction}
        />
      </div>

      <div className="h-3" />

      <div>
        {primaryListItemList.map((item: primaryListItem) => (
          <PrimaryListItem
            iconName={item.owner}
            topText={item.title}
            bottomText={item.description}
            righetUpText={item.date}
            rightBottomText={`${item.point}point`}
          />
        ))}
      </div>
    </>
  );
};

export default CategoryTemplate;
