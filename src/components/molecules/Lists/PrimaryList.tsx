import React, { VFC } from 'react';
import { useNavigate } from 'react-router-dom';
import { primaryListItem } from '../../../types/ListItem/PrimaryListItemType';
import PrimaryListItem from '../PrimaryListItem';

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
        <button
          type="button"
          className="w-full"
          onClick={() => navigate(`detail/${id}`, { state: { item: itema } })}
        >
          <PrimaryListItem
            iconName={itema.iconName}
            topText={itema.topText}
            bottomText={itema.bottomText}
            righetUpText={itema.righetUpText}
            rightBottomText={itema.rightBottomText}
          />
        </button>
      ))}
    </>
  );
};

export default PrimaryList;
