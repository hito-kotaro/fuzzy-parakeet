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
      {list?.map((itema: primaryListItem) => (
        <PrimaryListItemButton
          iconName={itema.iconName}
          topText={itema.topText}
          bottomText={itema.bottomText}
          righetUpText={itema.righetUpText}
          rightBottomText={itema.rightBottomText}
        />
      ))}
    </>
  );
};

export default PrimaryList;
