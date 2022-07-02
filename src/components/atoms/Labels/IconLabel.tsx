import React, { useEffect, useState, VFC } from 'react';
import MyAvatar from '../Avatar/MyAvatar';

type Props = {
  size: 'large' | 'medium' | 'small';
  name: string;
};

const IconLabel: VFC<Props> = (props) => {
  const { size, name } = props;
  const [className, setClassName] = useState('leading-10');
  const [px, setPx] = useState(40);

  const setLabelSize = () => {
    switch (size) {
      case 'large':
        setClassName('leading-12 text-xl');
        setPx(48);
        break;
      case 'medium':
        setClassName('leading-10');
        setPx(40);
        break;
      case 'small':
        setClassName('leading-7 text-sm');
        setPx(28);
        break;
      default:
        setClassName('leading-10');
        setPx(40);
    }
  };

  useEffect(() => {
    setLabelSize();
  }, []);

  return (
    <div className="flex">
      <MyAvatar size={px} name={name} />
      <div className={`${className} ml-2 `}>{name}</div>
    </div>
  );
};

export default IconLabel;
