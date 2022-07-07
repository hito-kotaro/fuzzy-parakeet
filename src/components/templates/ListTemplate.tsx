import React, { VFC, useEffect, ChangeEvent } from 'react';
import { selectHandlerType } from '../../types/Handler/HandlerTypes';
import { primaryListItem } from '../../types/ListItem/PrimaryListItemType';
import { SelectItem } from '../../types/Select/SelectItemType';
import useInputForm from '../atoms/InputForms/InputForm/useInputForm';
import useSearchForm from '../atoms/InputForms/SearchForm/useSearchForm';
import PrimaryList from '../molecules/Lists/PrimaryList';
import ListHeader from '../organisms/Headers/ListHeader';

type Props = {
  title: string;
  listData: primaryListItem[];
  onClick: (id: number) => void;
  onClickPlus?: () => void;
  selectItemList?: SelectItem[];
  selectHandler?: selectHandlerType;
};

const ListTemplate: VFC<Props> = (props) => {
  const { title, listData, onClick, onClickPlus, selectItemList, selectHandler } = props;
  const { result, search } = useSearchForm();
  const { input, onChange } = useInputForm();
  const onClickCreateButton = () => {};

  useEffect(() => {
    search(input, listData);
  }, [input, listData]);

  return (
    <div>
      <ListHeader
        title={title}
        input={input}
        onChange={onChange}
        onClick={onClickCreateButton}
        onClickPlus={onClickPlus}
        selectItemList={selectItemList}
        selectHandler={selectHandler}
      />

      <div className="h-full">
        <PrimaryList list={result} onClick={onClick} />
      </div>
    </div>
  );
};

export default ListTemplate;
