import React, { useState } from 'react';
import MyAvatar from '../atoms/Avatar/MyAvatar';
import LoginForm from '../organisms/LoginForm/LoginForm';
import RegisterAccountForm from '../organisms/RegisterAccountForm';

const LoginTemplate = () => {
  const [isRegister, setIsRegister] = useState(false);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };
  return (
    <div>
      <div className="h-10" />
      <div>
        <div className="flex justify-center">
          <MyAvatar size={96} name="Mother Frances" />
        </div>
        <div className="text-3xl font-mono text-center text-gray-500">QuestHub</div>
      </div>

      <div className="h-8" />
      <div className="text-xl font-mono text-center text-gray-500">
        {isRegister ? '新規登録' : 'ログイン'}
      </div>
      <div className="h-3" />

      <div className="px-5">
        {isRegister ? (
          <RegisterAccountForm toggleForm={toggleForm} />
        ) : (
          <LoginForm toggleForm={toggleForm} />
        )}
      </div>
    </div>
  );
};

export default LoginTemplate;
