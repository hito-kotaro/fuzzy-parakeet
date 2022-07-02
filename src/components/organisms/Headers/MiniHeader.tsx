import React, { VFC } from 'react';
import HeaderLink from '../../atoms/Links/HeaderLink';

type Props = {
  title: string;
  backTo: string;
  goTo: string;
  onClickBack?: () => void;
  onClickGo?: () => void;
  positiveLinkText: string;
};

const MiniHeader: VFC<Props> = (props) => {
  const { title, positiveLinkText, backTo, goTo, onClickGo, onClickBack } = props;
  return (
    <div className=" lead sticky top-0 z-50 bg-base drop-shadow-md p-2">
      <div className="flex justify-between">
        <HeaderLink to={backTo} onClick={onClickBack} linkText="キャンセル" />
        <HeaderLink to={goTo} onClick={onClickGo} linkText={positiveLinkText} />
      </div>
      <div className="w-full text-center">{title}</div>
    </div>
  );
};

export default MiniHeader;
