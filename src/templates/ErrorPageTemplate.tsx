import React, { VFC } from 'react';

type Props = {
  title: string;
};
const ErrorPageTemplate: VFC<Props> = (props) => {
  const { title } = props;
  return <div>{title}</div>;
};

export default ErrorPageTemplate;
