import React, { ReactElement, VFC } from 'react';

type Props = {
  header: ReactElement;
  isOpen: boolean;
};
const DetailTemplate: VFC<Props> = (props) => {
  const { header, isOpen } = props;

  return (
    <div
      className={`absolute z-50 h-screen bg-red-200 w-full duration-500 ${
        isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      {header}
    </div>
  );
};

export default DetailTemplate;
