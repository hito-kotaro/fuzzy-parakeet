import React, { ReactElement, useEffect, VFC } from 'react';
import useSearchForm from '../atoms/InputForms/SearchForm/useSearchForm';
import CategoryHeader from '../organisms/Headers/CategoryHeader';
import useInputForm from '../atoms/InputForms/InputForm/useInputForm';
import PrimaryList from '../molecules/Lists/PrimaryList';
import { primaryListItem } from '../../types/ListItem/PrimaryListItemType';
import { detailTemplateType } from '../../types/detailTemplateType';

type Props = {
  title: string;
  listData: primaryListItem[];
  openSubWindow: (detailHeaderData: any) => void;
  SubWindow: ReactElement;
};

const CategoryTemplate: VFC<Props> = (props) => {
  const { title, listData, openSubWindow, SubWindow } = props;
  const { result, search } = useSearchForm();
  const { input, onChange } = useInputForm();
  const onClickCreateButton = () => {};

  useEffect(() => {
    search(input, listData);
  }, [input, listData]);

  return (
    <div className="h-screen overflow-scroll">
      {SubWindow}
      <CategoryHeader
        title={title}
        input={input}
        onChange={onChange}
        onClick={onClickCreateButton}
      />
      <PrimaryList list={result} onClick={openSubWindow} />
    </div>
  );
};

export default CategoryTemplate;
