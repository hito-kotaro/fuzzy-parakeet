import React, { useState } from 'react';
import useLogin from './useLogin';

const useRegisterAccounts = () => {
  const { login } = useLogin();
  const [emailConfirm, setEmailConfirm] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const regex =
    /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;

  const verifyEmail = (str: string) => {
    return regex.test(str);
  };

  const verifyPassword = (str: string) => {
    return str.length >= 8;
  };
  const emailCheck = (str1: string, str2: string) => {
    if (
      str1 === str2 &&
      str1 !== '' &&
      str2 !== '' &&
      verifyEmail(str1) &&
      verifyEmail(str2)
    ) {
      setEmailConfirm(true);
    } else {
      setEmailConfirm(false);
    }
  };

  const passwordCheck = (str1: string, str2: string) => {
    if (
      str1 === str2 &&
      str1 !== '' &&
      str2 !== '' &&
      verifyPassword(str1) &&
      verifyPassword(str2)
    ) {
      setPasswordConfirm(true);
    } else {
      setPasswordConfirm(false);
    }
  };

  const checkIsReady = () => {
    if (emailConfirm && passwordConfirm) {
      setIsReady(true);
    } else {
      setIsReady(false);
    }
  };

  return {
    isReady,
    emailConfirm,
    passwordConfirm,
    checkIsReady,
    emailCheck,
    passwordCheck,
  };
};

export default useRegisterAccounts;
