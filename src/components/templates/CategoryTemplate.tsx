import React, { ReactElement, useEffect, useState, VFC } from 'react';
import { Badge } from '@supabase/ui';
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
  const { isOpen, setIsOpen, detailInfo, setDetailInfo } = useDetailTemplate();
  const { result, search } = useSearchForm();
  const { input, onChange } = useInputForm();

  const onClickCreateButton = () => {};
  const onClick = (
    id: number,
    iconName: string,
    topText: string,
    bottomText: string | ReactElement,
    rightUpText: string,
    rightBottomText: string | number | ReactElement,
  ) => {
    setIsOpen(true);
    const data = { id, iconName, topText, bottomText, rightUpText, rightBottomText };
    setDetailInfo(data);
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
        header={<DetailHeader headerData={detailInfo} toggleIsOpen={toggleIsOpen} />}
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
