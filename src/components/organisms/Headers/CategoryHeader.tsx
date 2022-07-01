import React, { VFC } from 'react';
import { IoIosAdd } from 'react-icons/io';
import SearchForm from '../../atoms/InputForms/SearchForm/SearchForm';
import SelectForm from '../../atoms/InputForms/SelectForm/SelectForm';
import HeaderLink from '../../atoms/Links/HeaderLink';

type Props = {
  title: string;
  searchHandler: any;
  onClick: () => void;
  selectItemList?: { value: string; itemText: string }[];
  selectHandler?: any;
};

const CategoryHeader: VFC<Props> = (props) => {
  const { title, searchHandler, selectHandler, onClick, selectItemList } = props;
  return (
    <>
      <div className=" sticky top-0 z-50 bg-base drop-shadow-md p-2 w-full">
        <div className="flex">
          <HeaderLink to="/home" linkText="ホーム" backIcon />
          <div className="ml-auto">
            <button onClick={onClick} type="button" className="border-2 border-link rounded-full">
              <IoIosAdd size={24} color="#4B72E0" />
            </button>
          </div>
        </div>
        <div className="mt-3">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <SearchForm searchHandler={searchHandler} />
          <div className="w-1/3 mt-2 ml-auto">
            {selectItemList ? (
              <SelectForm selectItemList={selectItemList} selectHandler={selectHandler} />
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryHeader;
