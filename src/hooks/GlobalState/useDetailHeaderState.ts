import { useRecoilState } from 'recoil';
import { detailHeaderState } from '../../stores/detailHeaderState';

const useDetailHeaderState = () => {
  const [headerData, setHeaderData] = useRecoilState(detailHeaderState);

  return { headerData, setHeaderData };
};

export default useDetailHeaderState;
