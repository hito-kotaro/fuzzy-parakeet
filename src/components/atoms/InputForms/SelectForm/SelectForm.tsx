import React, { ChangeEvent, VFC } from 'react';
import { Select } from '@supabase/ui';
import type { SelectItem } from '../../../../types/Select/SelectItemType';

type Props = {
  selectItemList: SelectItem[];
  selectHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const SelectForm: VFC<Props> = (props) => {
  const { selectItemList, selectHandler } = props;
  return (
    <Select onChange={selectHandler} className="bg-red-200">
      {selectItemList.map((item: SelectItem) => (
        <Select.Option value={item.value}>{item.itemText}</Select.Option>
      ))}
    </Select>
  );
};

export default SelectForm;
