import React, { VFC } from 'react';

type Props = {
  title: string;
};
const LoginTemplate: VFC<Props> = (props) => {
  const { title } = props;
  return <div>{title}</div>;
};

export default LoginTemplate;
