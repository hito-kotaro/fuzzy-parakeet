import { useRecoilState } from 'recoil';
import { approveRequestState } from '../stores/approveRequestListState';

const useApproveRequestList = () => {
  const [ARList, setARList] = useRecoilState(approveRequestState);
  return { ARList, setARList };
};

export default useApproveRequestList;
