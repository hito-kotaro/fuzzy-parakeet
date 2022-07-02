import React, { VFC } from 'react';
import { primaryListItem } from '../../../types/ListItem/PrimaryListItemType';
import PrimaryListItemButton from '../../atoms/Buttons/PrimaryListItemButton';

type Props = {
  list: any[] | undefined;
};

const PrimaryList: VFC<Props> = (props) => {
  const { list } = props;

  return (
    <>
      {list?.map((item: primaryListItem) => (
        <PrimaryListItemButton
          id={item.id}
          iconName={item.iconName}
          topText={item.topText}
          bottomText={item.bottomText}
          righetUpText={item.righetUpText}
          rightBottomText={item.rightBottomText}
        />
      ))}
    </>
  );
};

export default PrimaryList;
