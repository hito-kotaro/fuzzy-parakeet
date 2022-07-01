import React, { ReactElement, VFC } from 'react';

type Props = {
  children: string | ReactElement;
  thema: string;
  onClick: () => void;
};

const PrimaryButton: VFC<Props> = (props) => {
  const { children, thema, onClick } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${thema} rounded-lg text-2xl p-2 w-full focus:outline-none`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
