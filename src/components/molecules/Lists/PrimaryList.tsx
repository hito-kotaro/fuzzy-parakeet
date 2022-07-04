import React, { VFC } from 'react';
import { primaryListItem } from '../../../types/ListItem/PrimaryListItemType';
import PrimaryListItemButton from '../../atoms/Buttons/PrimaryListItemButton';

type Props = {
  list: any[] | undefined;
  onClick: (id: number) => void;
};

const PrimaryList: VFC<Props> = (props) => {
  const { list, onClick } = props;

  return (
    <>
      {list?.map((item: primaryListItem) => (
        <PrimaryListItemButton
          key={item.id}
          id={item.id}
          name={item.name}
          title={item.title}
          description={item.description}
          date={item.date}
          badge={item.badge}
          onClick={onClick}
        />
      ))}
    </>
  );
};

export default PrimaryList;
