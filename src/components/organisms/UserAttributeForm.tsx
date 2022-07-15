import React, { useEffect, useState, VFC } from 'react';
import useTeamApi from '../../hooks/useTeamApi';
import useTeamListState from '../../hooks/useTeamListState';
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
  const { teamList } = useTeamListState();
  const { fetchAllTeam } = useTeamApi();
  // teamsを取得
  useEffect(() => {
    fetchAllTeam();
  }, []);

  useEffect(() => {
    // ItemListに入れる
    const list = teamList.map((t) => {
      const item: SelectItem = {
        value: String(t.id),
        itemText: t.name,
      };
      return item;
    });
    setTeamSelect(list);
  }, [teamList]);

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
