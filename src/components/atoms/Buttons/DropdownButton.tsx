import React, { VFC } from 'react';
import { Button, Divider, Dropdown, Typography } from '@supabase/ui';
import { BsThreeDots } from 'react-icons/bs';
import type { DropDownItem } from '../../../types/Dropdown/DropDownItemType';

type Props = {
  itemList: DropDownItem[];
};

const DropdownButton: VFC<Props> = (props) => {
  const { itemList } = props;
  return (
    <Dropdown
      overlay={itemList.map((item: DropDownItem) => (
        <>
          {item.divider ? <Divider light /> : ''}
          <Dropdown.Item icon={item.icon} onClick={item.onClick}>
            <Typography.Text>{item.text}</Typography.Text>
          </Dropdown.Item>
        </>
      ))}
    >
      <Button type="text" icon={<BsThreeDots size={24} className=" focus:outline-none" />} />
    </Dropdown>
  );
};

export default DropdownButton;
