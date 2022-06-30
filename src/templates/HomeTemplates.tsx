import React, { VFC } from 'react';

type Props = {
  title: string;
};
const HomeTemplates: VFC<Props> = (props) => {
  const { title } = props;
  return <div>{title}</div>;
};

export default HomeTemplates;
