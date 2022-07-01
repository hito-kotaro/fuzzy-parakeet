import { Badge } from '@supabase/ui';
import React, { VFC } from 'react';
import { IoIosAdd } from 'react-icons/io';
import { primaryListItem } from '../../types/ListItem/PrimaryListItemType';
import SearchForm from '../atoms/InputForms/SearchForm/SearchForm';
import useSearchForm from '../atoms/InputForms/SearchForm/useSearchForm';
import SelectForm from '../atoms/InputForms/SelectForm/SelectForm';
import useSelectForm from '../atoms/InputForms/SelectForm/useSelectForm';
import HeaderLink from '../atoms/Links/HeaderLink';
import PrimaryListItem from '../molecules/PrimaryListItem';
import CategoryHeader from '../organisms/Headers/CategoryHeader';

type Props = {
  title: string;
};

const CategoryTemplate: VFC<Props> = (props) => {
  const { title } = props;
  const searchHandler = useSearchForm();
  const selectHandler = useSelectForm();
  const onClick = () => {
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
    <div className="h-screen overflow-scroll">
      <div className=" sticky top-0 z-50 bg-base drop-shadow-md p-2 w-full">
        <div className="flex">
          <HeaderLink to="/home" linkText="ホーム" backIcon />
          <div className="ml-auto">
            <button onClick={onClick} type="button" className="border-2 border-link rounded-full">
              <IoIosAdd size={24} color="#4B72E0" />
            </button>
          </div>
        </div>
        <div className="mt-3">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <SearchForm searchHandler={searchHandler} />
        </div>
      </div>

      {primaryListItemList.map((itema: primaryListItem) => (
        <PrimaryListItem
          iconName={itema.owner}
          topText={itema.title}
          bottomText={itema.description}
          righetUpText={itema.date}
          rightBottomText={`${itema.point}point`}
        />
      ))}
    </div>
  );
};

export default CategoryTemplate;
