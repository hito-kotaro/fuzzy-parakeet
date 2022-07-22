import React, { VFC, useEffect } from 'react';
import { selectHandlerType } from '../../types/Handler/HandlerTypes';
import { primaryListItem } from '../../types/ListItem/PrimaryListItemType';
import { SelectItem } from '../../types/Select/SelectItemType';
import BlankDisplay from '../atoms/BlankDisplay';
import useInputForm from '../atoms/InputForms/InputForm/useInputForm';
import useSearchForm from '../atoms/InputForms/SearchForm/useSearchForm';
import PrimaryList from '../molecules/Lists/PrimaryList';
import ListHeader from '../organisms/Headers/ListHeader';

type Props = {
  title: string;
  listData: primaryListItem[];
  onClick: (id: number) => void;
  blankText: string;
  onClickPlus?: () => void;
  selectItemList?: SelectItem[];
  selectHandler?: selectHandlerType;
};

const ListTemplate: VFC<Props> = (props) => {
  const {
    title,
    listData,
    blankText,
    onClick,
    onClickPlus,
    selectItemList,
    selectHandler,
  } = props;
  const { result, search } = useSearchForm();
  const { input, onChange } = useInputForm();

  useEffect(() => {
    search(input, listData);
  }, [input, listData]);

  return (
    <div>
      <ListHeader
        title={title}
        input={input}
        onChange={onChange}
        onClickPlus={onClickPlus}
        selectItemList={selectItemList}
        selectHandler={selectHandler}
      />

      <div className="h-full">
        {result.length > 0 ? (
          <PrimaryList list={result} onClick={onClick} />
        ) : (
          <div>
            <div className="h-5" />
            <BlankDisplay text={blankText} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ListTemplate;
