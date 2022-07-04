import { useState } from 'react';
import { primaryListItem } from '../../../../types/ListItem/PrimaryListItemType';

const useSearchForm = () => {
  const [result, setResult] = useState<any>([]);

  const search = (input: string, list: primaryListItem[]) => {
    const filtered = list.filter((item: primaryListItem) => {
      return item.title.includes(input);
    });

    setResult(filtered);
  };

  return { result, setResult, search };
};

export default useSearchForm;
