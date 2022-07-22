import { useState } from 'react';
import { approveRequestType } from '../types/approveRequestType';
import { badgeColor } from '../types/colorType';
import { primaryListItem } from '../types/ListItem/PrimaryListItemType';
import { userType } from '../types/usersType';
import useApproveRequestList from './useApproveRequestList';

const usePrimaryList = () => {
  const [list, setList] = useState<primaryListItem[]>([]);
  const { ARList } = useApproveRequestList();
  const badgeConfig = (status: string) => {
    let color: badgeColor = 'green';

    if (status === 'open') {
      color = 'green';
    } else if (status === 'approved') {
      color = 'blue';
    } else if (status === 'canceled') {
      color = 'yellow';
    } else {
      color = 'red';
    }

    return color;
  };

  const insertApproveRequestToList = (originData: approveRequestType[]) => {
    const primaryList: primaryListItem[] = originData.map((a) => {
      const color: badgeColor = badgeConfig(a.status);
      const item: primaryListItem = {
        id: a.id,
        name: a.applicant,
        title: a.title,
        description: a.description,
        date: a.created_at,
        badgeColor: color,
        badgeText: a.status,
      };
      return item;
    });
    setList(primaryList);
  };

  const insertUserToList = (originData: userType[]) => {
    const primaryList: primaryListItem[] = originData.map((a) => {
      const item: primaryListItem = {
        id: a.id,
        name: a.name,
        title: a.name,
        description: a.description ?? 'no comment',
        date: a.created_at,
        badgeColor: 'green',
        badgeText: `${a.point}`,
      };
      return item;
    });
    setList(primaryList);
  };

  const filterByApproveStatus = (filterStatus: string) => {
    const filterByStatus: approveRequestType[] = ARList.filter((a) => {
      if (filterStatus === 'all') {
        return a;
      }
      return a.status === filterStatus;
    });

    insertApproveRequestToList(filterByStatus);
  };

  const filterByUserId = (userId: number) => {
    const filterById: approveRequestType[] = ARList.filter((a) => {
      return a.applicant_id === userId;
    });
    insertApproveRequestToList(filterById);
  };

  const filterUserByteamId = (teamId: number, userList: userType[]) => {
    const filterById: userType[] = userList.filter((u) => {
      return u.team_id === teamId;
    });

    insertUserToList(filterById);
  };

  return { list, setList, filterByApproveStatus, filterByUserId, filterUserByteamId };
};

export default usePrimaryList;
