import React, { ReactElement, VFC } from 'react';
import DetailHeader from '../../organisms/Headers/DetailHeader';

type Props = {
  header: ReactElement;
};
const SubWinodw: VFC<Props> = (props) => {
  const { header } = props;

  return <div className="absolute z-50 h-screen bg-red-200 w-full">{header}</div>;
};

export default SubWinodw;
