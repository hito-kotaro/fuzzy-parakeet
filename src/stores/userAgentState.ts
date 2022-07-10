import { atom } from 'recoil';

const checkUserAgent = () => {
  const agent = window.navigator.userAgent.toLowerCase();
  if (agent.indexOf('safari') !== -1 && agent.indexOf('iphone') !== -1) {
    return true;
  }

  return false;
};

export const userAgentState = atom<boolean>({
  key: 'AGENT',
  default: checkUserAgent(),
});

export default userAgentState;
