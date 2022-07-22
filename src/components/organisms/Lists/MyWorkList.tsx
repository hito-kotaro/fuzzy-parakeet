import React from 'react';
import { BsFillInboxFill } from 'react-icons/bs';
import { GiStamper } from 'react-icons/gi';
import { AiOutlineUser, AiOutlineWarning } from 'react-icons/ai';
import { RiTeamLine } from 'react-icons/ri';
import IconLabelButton from '../../atoms/Buttons/IconLabelButton';

const MyWorkList = () => {
  const space = 3;
  return (
    <div className="border-1 p-2 rounded-lg light-color">
      <div className={`h-${space}`} />

      <IconLabelButton
        text="クエストボード"
        icon={<BsFillInboxFill color="#ffffff" />}
        iconColor="bg-green-500"
        path="/questboard"
      />

      <div className={`h-${space}`} />

      <IconLabelButton
        text="承認依頼"
        icon={<GiStamper color="#ffffff" />}
        iconColor="bg-blue-500"
        path="/approverequest"
      />

      <div className={`h-${space}`} />

      <IconLabelButton
        text="チーム"
        icon={<RiTeamLine color="#ffffff" />}
        iconColor="bg-purple-500"
        path="/teams"
      />

      <div className={`h-${space}`} />

      <IconLabelButton
        text="ユーザー"
        icon={<AiOutlineUser color="#ffffff" />}
        iconColor="bg-orange-500"
        path="/users"
      />

      <div className={`h-${space}`} />

      <IconLabelButton
        text="ペナルティー発行"
        icon={<AiOutlineWarning color="#ffffff" />}
        iconColor="bg-rose-500"
        path="/penalty"
      />

      <div className={`h-${space}`} />
    </div>
  );
};

export default MyWorkList;
