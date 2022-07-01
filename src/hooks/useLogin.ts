import React from 'react';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const navigate = useNavigate();
  const login = (email: string, password: string) => {
    console.log(`email: ${email}`);
    console.log(`password: ${password}`);
    navigate('/home');
  };
  return { login };
};

export default useLogin;
