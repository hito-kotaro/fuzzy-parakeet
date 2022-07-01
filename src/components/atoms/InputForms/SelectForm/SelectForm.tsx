import React, { VFC } from 'react';
import { Select } from '@supabase/ui';
import type { SelectItem } from '../../../../types/Select/SelectItemType';

type Props = {
  selectItemList: SelectItem[];
  selectHandler: any;
};

const SelectForm: VFC<Props> = (props) => {
  const { selectItemList, selectHandler } = props;

  return (
    <Select onChange={selectHandler.handleChange} className="text-red-700">
      {selectItemList.map((item: SelectItem) => (
        <Select.Option value={item.value}>{item.itemText}</Select.Option>
      ))}
    </Select>
  );
};

export default SelectForm;
