import React, { useEffect, useState, VFC } from 'react';
import { primaryListItem } from '../../types/ListItem/PrimaryListItemType';
import useSearchForm from '../atoms/InputForms/SearchForm/useSearchForm';
import PrimaryListItem from '../molecules/PrimaryListItem';
import CategoryHeader from '../organisms/Headers/CategoryHeader';
import { questType } from '../../types/Quest/QuestType';
import useInputForm from '../atoms/InputForms/InputForm/useInputForm';

type Props = {
  title: string;
  ListData: any[];
};

const CategoryTemplate: VFC<Props> = (props) => {
  const { title, ListData } = props;
  const { input, result, search, setTarget } = useSearchForm();

  const onClick = () => {
    console.log('push create button');
  };

  useEffect(() => {
    setTarget(ListData);
  });

  return (
    <div className="h-screen overflow-scroll">
      <CategoryHeader title={title} input={input} onChange={search} onClick={onClick} />
      {result.map((itema: primaryListItem) => (
        <button type="button" className="w-full">
          <PrimaryListItem
            iconName={itema.iconName}
            topText={itema.topText}
            bottomText={itema.bottomText}
            righetUpText={itema.righetUpText}
            rightBottomText={itema.bottomText}
          />
        </button>
      ))}
    </div>
  );
};

export default CategoryTemplate;
