import React, { VFC } from 'react';
import { useNavigate } from 'react-router-dom';
import { primaryListItem } from '../../../types/ListItem/PrimaryListItemType';
import PrimaryListItemButton from '../../atoms/Buttons/PrimaryListItemButton';

type Props = {
  list: any[] | undefined;
};

const PrimaryList: VFC<Props> = (props) => {
  const { list } = props;
  const navigate = useNavigate();
  const id = 1;
  return (
    <>
      {list?.map((item: primaryListItem) => (
        <PrimaryListItemButton
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
