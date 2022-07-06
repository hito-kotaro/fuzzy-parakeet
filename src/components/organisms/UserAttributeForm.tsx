import React, { useEffect, useState, VFC } from 'react';
import { roleSelectItem } from '../../lib/SelectItems';
import { teamsData } from '../../testData/TeamsTestData';
import { selectHandlerType } from '../../types/Handler/HandlerTypes';
import { SelectItem } from '../../types/Select/SelectItemType';
import SelectForm from '../atoms/InputForms/SelectForm/SelectForm';

type Props = {
  teamSelectHandler: selectHandlerType;
  roleSelectHandler: selectHandlerType;
};

const UserAttributeForm: VFC<Props> = (props) => {
  const { teamSelectHandler, roleSelectHandler } = props;
  const roleItems: SelectItem[] = roleSelectItem;
  const [teamSelect, setTeamSelect] = useState<SelectItem[]>([]);

  // teamsを取得
  useEffect(() => {
    // ItemListに入れる
    const list = teamsData.map((t) => {
      const item: SelectItem = {
        value: String(t.id),
        itemText: t.name,
      };
      return item;
    });
    setTeamSelect(list);
  }, []);

  return (
    <div>
      <fieldset>
        <legend className="text-gray-400">Team</legend>
        <SelectForm selectHandler={teamSelectHandler} selectItemList={teamSelect} />
      </fieldset>
      <div className="h-2" />
      <fieldset>
        <legend className="text-gray-400">Role</legend>
        <SelectForm selectHandler={roleSelectHandler} selectItemList={roleItems} />
      </fieldset>
    </div>
  );
};

export default UserAttributeForm;
