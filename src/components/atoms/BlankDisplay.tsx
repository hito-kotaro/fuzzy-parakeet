import React, { VFC } from 'react';
import { BiMehBlank } from 'react-icons/bi';

type Props = {
  text: string;
};

const BlankDisplay: VFC<Props> = (props) => {
  const { text } = props;
  return (
    <div className="text-gray-500 text-center opacity-50">
      <div className="flex justify-center ">
        <BiMehBlank size={81} />
      </div>
      <div className=" text-lg">{text}</div>
    </div>
  );
};

export default BlankDisplay;
