import React, { VFC } from 'react';
import { Button, Divider, Dropdown, Typography } from '@supabase/ui';
import { BsThreeDots } from 'react-icons/bs';
import type { dropDownItem } from '../../../types/Dropdown/dropDownItemType';

type Props = {
  itemList: dropDownItem[];
};

const DropdownButton: VFC<Props> = (props) => {
  const { itemList } = props;
  return (
    <Dropdown
      className="outline-none"
      overlay={itemList.map((item: dropDownItem) => (
        <>
          {item.divider ? <Divider light /> : ''}
          <Dropdown.Item icon={item.icon} onClick={item.onClick}>
            <Typography.Text>{item.text}</Typography.Text>
          </Dropdown.Item>
        </>
      ))}
    >
      <Button as="span" type="text" icon={<BsThreeDots size={24} className="outline-none" />} />
    </Dropdown>
  );
};

export default DropdownButton;
