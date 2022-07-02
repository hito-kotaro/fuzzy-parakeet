import { Badge } from '@supabase/ui';
import React from 'react';
import IconLabel from '../../../atoms/Labels/IconLabel';

const DetailCard = () => {
  return (
    <div className="border-1 p-2">
      <div className="flex">
        <IconLabel size="medium" name="sato_hiroki" />
        <div className="ml-auto text-gray-400">date</div>
      </div>
      <div>
        <Badge color="blue">owner</Badge>
      </div>
      <div className="">
        <div className="border-1 h-56 p-2">description</div>
      </div>
    </div>
  );
};

export default DetailCard;
