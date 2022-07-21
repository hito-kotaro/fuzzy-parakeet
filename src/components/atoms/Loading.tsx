import React, { VFC } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

type Props = {
  size: number;
};

const Loading: VFC<Props> = (props) => {
  const { size } = props;
  const classname = `w-${size} h-${size} mx-auto animate-spin border-8 border-gray-600 rounded-full border-t-transparent `;

  return (
    <div className="flex justify-center animate-spin">
      <AiOutlineLoading3Quarters size={size} />
    </div>
  );
};

export default Loading;
