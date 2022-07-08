import React from 'react';
import MyAvatar from '../atoms/Avatar/MyAvatar';

const TestPage = () => {
  return (
    <div>
      <div className="p-5">
        <MyAvatar size={64} name="Mary Roebling" />
      </div>
    </div>
  );
};

export default TestPage;
