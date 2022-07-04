import React, { VFC } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { reportType } from '../../../types/reportType';
import HeaderLink from '../../atoms/Links/HeaderLink';

type Props = {
  title: string;
  id: number;
  reportTitle: string;
  reportDescription: string;
  onClickCancel: () => void;
  onClickReport: (r: reportType) => void;
};

const ReportHeader: VFC<Props> = (props) => {
  const { title, id, reportTitle, reportDescription, onClickCancel, onClickReport } = props;

  const report: reportType = {
    questId: id,
    // applicantIdはログイン中のユーザーのIdをlocalstorageから取得
    applicantId: 1,
    reportTitle,
    reportDescription,
  };

  return (
    <div className=" lead sticky top-0 z-50 bg-base drop-shadow-md p-2">
      <div className="flex justify-between">
        <Link to="/questboard" onClick={onClickCancel} className="text-blue-700 text-lg">
          <div className="flex">
            <div className="leading-8">キャンセル</div>
          </div>
        </Link>

        <Link
          to="/questboard"
          onClick={() => onClickReport(report)}
          className="text-blue-700 text-lg"
        >
          <div className="flex">
            <div className="leading-8">報告</div>
          </div>
        </Link>
      </div>
      <div className="w-full text-center">{title}</div>
    </div>
  );
};

export default ReportHeader;
