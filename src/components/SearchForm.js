import React, { useRef, useEffect } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { searchInput, setSearchInput, setPage } = useGlobalContext();
  const value = useRef('');

  useEffect(() => {
    value.current.focus();
  }, []);

  const searchCountry = e => {
    setSearchInput(e.target.value);
    setPage(0);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <section className="p-4">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col font-roboto my-4 bg-gray-300 p-8 shadow-lg rounded">
          <label
            htmlFor="name"
            className="pb-2 text-gray-600 font-medium tracking-wider uppercase"
          >
            enter the name of the country
          </label>
          <input
            type="text"
            id="name"
            ref={value}
            value={searchInput}
            onChange={e => searchCountry(e)}
            className="bg-white focus:outline-none w-96 text-2xl text-gray-600 py-2 px-4  "
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
