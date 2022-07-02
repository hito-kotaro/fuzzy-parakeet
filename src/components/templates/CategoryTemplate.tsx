import React, { ReactElement, useEffect, useState, VFC } from 'react';
import { Badge } from '@supabase/ui';
import useSearchForm from '../atoms/InputForms/SearchForm/useSearchForm';
import CategoryHeader from '../organisms/Headers/CategoryHeader';
import useInputForm from '../atoms/InputForms/InputForm/useInputForm';
import PrimaryList from '../molecules/Lists/PrimaryList';
import DetailHeader from '../organisms/Headers/DetailHeader';
import DetailTemplate from './DetailTemplate';
import useDetailTemplate from '../../hooks/useDetailTemplate';
import { primaryListItem } from '../../types/ListItem/PrimaryListItemType';

type Props = {
  title: string;
  listData: primaryListItem[];
};

const CategoryTemplate: VFC<Props> = (props) => {
  const { title, listData } = props;
  const { open, close, isOpen, detailInfo } = useDetailTemplate();
  const { result, search } = useSearchForm();
  const { input, onChange } = useInputForm();
  const onClickCreateButton = () => {};

  useEffect(() => {
    search(input, listData);
  }, [input, listData]);

  return (
    <div className="h-screen overflow-scroll">
      <DetailTemplate isOpen={isOpen} closeDetail={close} headerData={detailInfo} />

      <CategoryHeader
        title={title}
        input={input}
        onChange={onChange}
        onClick={onClickCreateButton}
      />
      <PrimaryList list={result} onClick={open} />
    </div>
  );
};

export default CategoryTemplate;
