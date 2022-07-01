import React, { ReactElement, VFC } from 'react';

type Props = {
  children: string | ReactElement;
  color: string;
  onClick: () => void;
};

const PrimaryButton: VFC<Props> = (props) => {
  const { children, color, onClick } = props;
  return (
    <button type="button" onClick={onClick} className={`${color} rounded-lg text-2xl p-2 w-full`}>
      {children}
    </button>
  );
};

export default PrimaryButton;
