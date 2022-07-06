import React, { VFC } from 'react';
import { Select } from '@supabase/ui';
import type { SelectItem } from '../../../../types/Select/SelectItemType';
import { selectHandlerType } from '../../../../types/Handler/HandlerTypes';

type Props = {
  selectItemList: SelectItem[];
  selectHandler: selectHandlerType;
};

const SelectForm: VFC<Props> = (props) => {
  const { selectItemList, selectHandler } = props;
  return (
    <Select onChange={selectHandler.handleChange}>
      {selectItemList.map((item: SelectItem) => (
        <Select.Option value={item.value}>{item.itemText}</Select.Option>
      ))}
    </Select>
  );
};

export default SelectForm;
