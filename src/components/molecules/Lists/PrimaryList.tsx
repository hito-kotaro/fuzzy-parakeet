import React, { ReactElement, VFC } from 'react';
import { primaryListItem } from '../../../types/ListItem/PrimaryListItemType';
import PrimaryListItemButton from '../../atoms/Buttons/PrimaryListItemButton';

type Props = {
  list: any[] | undefined;
  onClick: (
    id: number,
    iconName: string,
    topText: string,
    bottomText: string | ReactElement,
    righetUpText: string,
    rightBottomText: string | number | ReactElement,
  ) => void;
};

const PrimaryList: VFC<Props> = (props) => {
  const { list, onClick } = props;

  return (
    <>
      {list?.map((item: primaryListItem) => (
        <PrimaryListItemButton
          id={item.id}
          iconName={item.iconName}
          topText={item.topText}
          bottomText={item.bottomText}
          rightUpText={item.rightUpText}
          rightBottomText={item.rightBottomText}
          onClick={onClick}
        />
      ))}
    </>
  );
};

export default PrimaryList;
