import React, { VFC } from 'react';
import { primaryListItem } from '../../types/ListItem/PrimaryListItemType';
import useSearchForm from '../atoms/InputForms/SearchForm/useSearchForm';
import PrimaryListItem from '../molecules/PrimaryListItem';
import CategoryHeader from '../organisms/Headers/CategoryHeader';
import { questData } from '../../testData/QuestTestData';

type Props = {
  title: string;
};

const CategoryTemplate: VFC<Props> = (props) => {
  const { title } = props;

  const searchHandler = useSearchForm();
  const onClick = () => {
    console.log('push create button');
  };

  return (
    <div className="h-screen overflow-scroll">
      <CategoryHeader title={title} searchHandler={searchHandler} onClick={onClick} />
      {questData.map((itema: primaryListItem) => (
        <button type="button" className="w-full">
          <PrimaryListItem
            iconName={itema.owner}
            topText={itema.title}
            bottomText={itema.description}
            righetUpText={itema.date}
            rightBottomText={`${itema.point}point`}
          />
        </button>
      ))}
    </div>
  );
};

export default CategoryTemplate;
