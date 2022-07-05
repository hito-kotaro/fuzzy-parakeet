import React, { useState } from 'react';
import { primaryListItem } from '../types/ListItem/PrimaryListItemType';

const usePrimaryList = () => {
  const [list, setList] = useState<primaryListItem[]>([]);

  return { list, setList };
};

export default usePrimaryList;
