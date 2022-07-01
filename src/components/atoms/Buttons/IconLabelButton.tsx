import React, { ReactElement, VFC } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

type Props = {
  path: string;
  iconColor: string;
  icon: ReactElement;
  text: string;
};

const IconLabelButton: VFC<Props> = (props) => {
  const { path, iconColor, icon, text } = props;
  const navigate = useNavigate();
  return (
    <button type="button" className="w-full" onClick={() => navigate(path)}>
      <div className="flex">
        <div className={`${iconColor} rounded-lg p-2`}>{icon}</div>
        <div className="border-b-1 w-full ml-5 flex">
          {text}
          <div className="ml-auto p-2">
            <IoIosArrowForward color="#BFBFBF" />
          </div>
        </div>
      </div>
    </button>
  );
};

export default IconLabelButton;
