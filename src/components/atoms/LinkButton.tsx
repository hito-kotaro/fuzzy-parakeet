import React, { VFC } from 'react';

type Props = {
  onClick: () => void;
  children: string;
};
const LinkButton: VFC<Props> = (props) => {
  const { children, onClick } = props;
  return (
    <button type="button" className="w-full" onClick={onClick}>
      <div className="text-blue-600 ">{children}</div>
    </button>
  );
};

export default LinkButton;
