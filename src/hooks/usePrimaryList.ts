import React, { useState } from 'react';
import { approveRequestData } from '../testData/ApproveRequestTestData';
import { approveRequestType } from '../types/approveRequestType';
import { badgeColor } from '../types/colorType';
import { primaryListItem } from '../types/ListItem/PrimaryListItemType';

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

  return { list, setList, filterByApproveStatus, filterByUserId };
};

export default usePrimaryList;
