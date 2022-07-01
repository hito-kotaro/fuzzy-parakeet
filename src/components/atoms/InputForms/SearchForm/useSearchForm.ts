import { useState } from 'react';
import { primaryListItem } from '../../../../types/ListItem/PrimaryListItemType';

const useSearchForm = () => {
  const [result, setResult] = useState<any>([]);
  // const [target, setTarget] = useState<primaryListItem[]>();

  const search = (input: string, list: primaryListItem[]) => {
    console.log('search');
    const filtered = list.filter((item: primaryListItem) => {
      return item.topText.includes(input);
    });

    setResult(filtered);
  };

  return { result, setResult, search };
};

export default useSearchForm;
