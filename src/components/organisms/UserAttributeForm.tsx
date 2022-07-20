import React, { useEffect, useState, VFC } from 'react';
import { useNavigate } from 'react-router-dom';
import useTeamApi from '../../hooks/useTeamApi';
import useTeamListState from '../../hooks/useTeamListState';
import { roleSelectItem } from '../../lib/SelectItems';
import { selectHandlerType } from '../../types/Handler/HandlerTypes';
import { SelectItem } from '../../types/Select/SelectItemType';
import SelectForm from '../atoms/InputForms/SelectForm/SelectForm';
import LinkButton from '../atoms/LinkButton';

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
  const navigate = useNavigate();
  // teamsを取得
  useEffect(() => {
    fetchAllTeam();
  }, []);

  useEffect(() => {
    // ItemListに入れる
    const defaultList: SelectItem = { value: '', itemText: 'チームを選択してください' };

    const dataList = teamList.map((t) => {
      const item: SelectItem = {
        value: String(t.id),
        itemText: t.name,
      };
      return item;
    });
    const list: SelectItem[] = [defaultList, ...dataList];
    setTeamSelect(list);
  }, [teamList]);

  const dummy = () => {
    navigate('/teams');
  };
  return (
    <div>
      <fieldset>
        <legend className="text-gray-400">Team</legend>
        <SelectForm selectHandler={teamSelectHandler} selectItemList={teamSelect} />
      </fieldset>
      <LinkButton onClick={dummy}>新しいチームを作成する</LinkButton>
      <div className="h-2" />
      <fieldset>
        <legend className="text-gray-400">Role</legend>
        <SelectForm selectHandler={roleSelectHandler} selectItemList={roleItems} />
      </fieldset>
    </div>
  );
};

export default UserAttributeForm;
