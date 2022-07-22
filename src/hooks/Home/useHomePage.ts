import useLogin from '../useLogin';
import useTemplate from '../useTemplate';
import useUserAgent from '../useUserAgent';
import useUserInfo from '../useUserInfo';

const useHomePage = () => {
  const { isSafari } = useUserAgent();
  const userConfigTemplate = useTemplate(false);
  const { logout } = useLogin();
  const { userInfo } = useUserInfo();
  return { isSafari, userConfigTemplate, logout, userInfo };
};

export default useHomePage;
