import React, { ChangeEvent, VFC } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

type Props = {
  searchHandler: {
    input: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
};
const SearchForm: VFC<Props> = (props) => {
  const { searchHandler } = props;
  return (
    <div className="flex w-full bg-gray-200 rounded-lg">
      <AiOutlineSearch size={40} color="#BCBCBC" />
      <input
        value={searchHandler.input}
        onChange={searchHandler.onChange}
        type="text"
        placeholder="search"
        className="bg-gray-200 text-lg w-full focus:outline-none px-2"
      />
    </div>
  );
};

export default SearchForm;
