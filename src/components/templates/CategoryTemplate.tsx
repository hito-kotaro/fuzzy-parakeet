import React, { ReactElement, useEffect, useState, VFC } from 'react';
import useSearchForm from '../atoms/InputForms/SearchForm/useSearchForm';
import CategoryHeader from '../organisms/Headers/CategoryHeader';
import useInputForm from '../atoms/InputForms/InputForm/useInputForm';
import PrimaryList from '../molecules/Lists/PrimaryList';
import DetailHeader from '../organisms/Headers/DetailHeader';
import DetailTemplate from './DetailTemplate';
import useSubWindow from '../atoms/SubWindow/useSubWindow';
import useDetailTemplate from '../../hooks/useDetailTemplate';

type Props = {
  title: string;
  listData: any[];
};

const CategoryTemplate: VFC<Props> = (props) => {
  const { title, listData } = props;
  const { isOpen, setIsOpen } = useDetailTemplate();
  const { result, search } = useSearchForm();
  const { input, onChange } = useInputForm();

  const onClickCreateButton = () => {};
  const onClick = (
    id: number,
    iconName: string,
    topText: string,
    bottomText: string | ReactElement,
    righetUpText: string,
    rightBottomText: string | number | ReactElement,
  ) => {
    setIsOpen(true);
    const test = { id, iconName, topText, bottomText, righetUpText, rightBottomText };
    console.log(test);
  };
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    search(input, listData);
  }, [input]);

  return (
    <div className="h-screen overflow-scroll">
      <DetailTemplate
        isOpen={isOpen}
        header={
          <DetailHeader
            headerData={{
              itemList: [],
              name: '',
              title: '',
              badged: undefined,
            }}
            toggleIsOpen={toggleIsOpen}
          />
        }
      />
      <CategoryHeader
        title={title}
        input={input}
        onChange={onChange}
        onClick={onClickCreateButton}
      />
      <PrimaryList list={result} onClick={onClick} />
    </div>
  );
};

export default CategoryTemplate;
