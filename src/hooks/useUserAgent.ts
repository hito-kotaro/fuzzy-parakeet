import { useRecoilValue } from 'recoil';
import userAgentState from '../stores/userAgentState';

const useUserAgent = () => {
  const isSafari = useRecoilValue(userAgentState);

  return { isSafari };
};

export default useUserAgent;
