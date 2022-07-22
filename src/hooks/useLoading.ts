import { useRecoilState } from 'recoil';
import { loadingState } from '../stores/loadingState';

const useLoading = () => {
  const [isLoading, setIsLoading] = useRecoilState(loadingState);
  return { isLoading, setIsLoading };
};

export default useLoading;
