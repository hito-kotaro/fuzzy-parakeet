import React, { VFC } from 'react';
import { detailTemplateType } from '../../../types/detailTemplateType';
import { primaryListItem } from '../../../types/ListItem/PrimaryListItemType';
import PrimaryListItemButton from '../../atoms/Buttons/PrimaryListItemButton';

type Props = {
  list: any[] | undefined;
  onClick: (detailHeaderData: detailTemplateType) => void;
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
      <div className="bg-base h-10" />
    </>
  );
};

export default PrimaryList;
