import React, { VFC } from 'react';
import { primaryListItem } from '../../../types/ListItem/PrimaryListItemType';
import PrimaryListItem from '../PrimaryListItem';

type Props = {
  list: any[];
};

const PrimaryList: VFC<Props> = (props) => {
  const { list } = props;

  return (
    <>
      {list.map((itema: primaryListItem) => (
        <button type="button" className="w-full">
          <PrimaryListItem
            iconName={itema.iconName}
            topText={itema.topText}
            bottomText={itema.bottomText}
            righetUpText={itema.righetUpText}
            rightBottomText={itema.bottomText}
          />
        </button>
      ))}
      ;
    </>
  );
};

export default PrimaryList;
