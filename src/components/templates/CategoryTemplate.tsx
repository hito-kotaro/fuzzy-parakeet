import React, { useEffect, useState, VFC } from 'react';
import { primaryListItem } from '../../types/ListItem/PrimaryListItemType';
import useSearchForm from '../atoms/InputForms/SearchForm/useSearchForm';
import PrimaryListItem from '../molecules/PrimaryListItem';
import CategoryHeader from '../organisms/Headers/CategoryHeader';
import { questType } from '../../types/Quest/QuestType';
import useInputForm from '../atoms/InputForms/InputForm/useInputForm';
import PrimaryList from '../molecules/Lists/PrimaryList';

type Props = {
  title: string;
  listData: any[];
};

const CategoryTemplate: VFC<Props> = (props) => {
  const { title, listData } = props;
  const { result, search } = useSearchForm();
  const { input, onChange } = useInputForm();

  const onClick = () => {
    console.log('push create button');
  };

  useEffect(() => {
    search(input, listData);
  }, [input]);

  return (
    <div className="h-screen overflow-scroll">
      <CategoryHeader title={title} input={input} onChange={onChange} onClick={onClick} />
      <PrimaryList list={result} />
    </div>
  );
};

export default CategoryTemplate;
