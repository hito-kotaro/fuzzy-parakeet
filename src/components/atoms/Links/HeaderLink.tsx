import React, { VFC } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

type Props = {
  to: string;
  linkText: string;
  backIcon?: boolean;
  onClick?: () => void;
};
const HeaderLink: VFC<Props> = (props) => {
  const { to, linkText, backIcon, onClick } = props;
  return (
    <Link to={to} onClick={onClick} className="text-blue-700 text-lg">
      <div className="flex">
        {backIcon ? <IoIosArrowBack color="#4B72E0" size={32} /> : ''}
        <div className="leading-8">{linkText}</div>
      </div>
    </Link>
  );
};

export default HeaderLink;
