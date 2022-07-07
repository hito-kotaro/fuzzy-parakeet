import { penaltyType } from '../types/PenaltyType';

export const penaltyData: penaltyType[] = [
  {
    id: 1,
    title: '飲み会後の欠勤',
    owner: 'sato',
    ownerId: 1,
    description: '平日の飲み会でお酒を飲んで翌日体調不良による遅刻欠勤があった場合',
    penalty: 30,
    created_at: '2022/02/02',
    updated_at: '',
  },
  {
    id: 2,
    title: '提出物遅れ',
    owner: 'sato',
    ownerId: 1,
    description: '期限日の23:59:59までに提出できなかったらアウト',
    penalty: 10,
    created_at: '2022/02/02',
    updated_at: '',
  },
  {
    id: 3,
    title: '無断遅刻/欠勤',
    owner: 'sato',
    ownerId: 1,
    description: '勤怠連絡なしの遅刻欠勤',
    penalty: 10,
    created_at: '2022/02/02',
    updated_at: '',
  },
];
