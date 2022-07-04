import React, { VFC, useEffect } from 'react';
import { detailTemplateType } from '../../types/detailTemplateType';
import { primaryListItem } from '../../types/ListItem/PrimaryListItemType';
import useInputForm from '../atoms/InputForms/InputForm/useInputForm';
import useSearchForm from '../atoms/InputForms/SearchForm/useSearchForm';
import PrimaryList from '../molecules/Lists/PrimaryList';
import ListHeader from '../organisms/Headers/ListHeader';

type Props = {
  title: string;
  listData: primaryListItem[];
  onClick: (id: number) => void;
  onClickPlus: () => void;
};

const ListTemplate: VFC<Props> = (props) => {
  const { title, listData, onClick, onClickPlus } = props;
  const { result, search } = useSearchForm();
  const { input, onChange } = useInputForm();
  const onClickCreateButton = () => {};

  useEffect(() => {
    search(input, listData);
  }, [input, listData]);

  return (
    <div className="h-screen overflow-scroll">
      <ListHeader
        title={title}
        input={input}
        onChange={onChange}
        onClick={onClickCreateButton}
        onClickPlus={onClickPlus}
      />
      <PrimaryList list={result} onClick={onClick} />
    </div>
  );
};

export default ListTemplate;
