import React, { ReactElement, VFC } from 'react';
import { dropDownItem } from '../../../types/Dropdown/dropDownItemType';
import { detailHeaderType } from '../../../types/Header/detailHeaderType';
import { primaryListItem } from '../../../types/ListItem/PrimaryListItemType';
import PrimaryListItemButton from '../../atoms/Buttons/PrimaryListItemButton';

type Props = {
  list: any[] | undefined;
  onClick: (detailHeaderData: detailHeaderType) => void;
};

const PrimaryList: VFC<Props> = (props) => {
  const { list, onClick } = props;

  return (
    <>
      {list?.map((item: primaryListItem) => (
        <PrimaryListItemButton
          key={item.id}
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
