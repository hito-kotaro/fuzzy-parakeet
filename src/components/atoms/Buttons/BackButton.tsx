import React, { VFC } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

type Props = {
  onClick: () => void;
};
const BackButton: VFC<Props> = (props) => {
  const { onClick } = props;
  return (
    <button type="button" onClick={onClick}>
      <IoIosArrowBack color="#4B72E0" size={32} />
    </button>
  );
};
export default BackButton;
