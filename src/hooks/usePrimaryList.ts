import React, { useState } from 'react';
import { approveRequestData } from '../testData/ApproveRequestTestData';
import { usersData } from '../testData/UsersTestData';
import { approveRequestType } from '../types/approveRequestType';
import { badgeColor } from '../types/colorType';
import { primaryListItem } from '../types/ListItem/PrimaryListItemType';
import { userType } from '../types/usersType';

const usePrimaryList = () => {
  const [list, setList] = useState<primaryListItem[]>([]);

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
    const filterByStatus: approveRequestType[] = approveRequestData.filter((u) => {
      if (filterStatus === 'all') {
        return u;
      }
      return u.status === filterStatus;
    });

    insertApproveRequestToList(filterByStatus);
  };

  const filterByUserId = (userId: number) => {
    const filterById: approveRequestType[] = approveRequestData.filter((a) => {
      return a.applicantId === userId;
    });
    insertApproveRequestToList(filterById);
  };

  const filterUserByteamId = (teamId: number, userList: userType[]) => {
    console.log(userList);
    const filterById: userType[] = userList.filter((u) => {
      return u.team_id === teamId;
    });
    console.log(filterById);
    insertUserToList(filterById);
  };

  return { list, setList, filterByApproveStatus, filterByUserId, filterUserByteamId };
};

export default usePrimaryList;
