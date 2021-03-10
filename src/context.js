import React, { useState, useContext, useEffect, useCallback } from 'react';
import paginate from './paginate';

const url = 'https://restcountries.eu/rest/v2/name/';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(false);

  // pagination
  const [page, setPage] = useState(0);
  const [oneCountryPage, setOneCountryPage] = useState([]);

  const fetchCountries = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${url}${searchInput === '' ? 'a' : searchInput}`
      );
      const data = await response.json();
      if (data) {
        const newData = data.map(item => {
          const {
            capital,
            demonym,
            flag,
            numericCode,
            region,
            population,
            subregion,
            nativeName,
            name,
            alpha3Code,
            currencies,
            callingCodes: [callCode],
          } = item;
          const { code: currCode, name: currName } = currencies[0];
          return {
            capital,
            demonym,
            flag,
            numericCode,
            region,
            population,
            subregion,
            nativeName,
            name,
            alpha3Code,
            currCode,
            currName,
            callCode,
          };
        });
        setCountries(paginate(newData));
      } else {
        setCountries([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setCountries([]);
      setLoading(false);
    }
  }, [searchInput]);

  useEffect(() => {
    fetchCountries();
  }, [searchInput, fetchCountries]);

  useEffect(() => {
    setOneCountryPage(countries[page]);
  }, [loading, page]);

  const handlePage = index => {
    setPage(index);
  };

  return (
    <AppContext.Provider
      value={{
        countries,
        loading,
        setSearchInput,
        searchInput,
        page,
        handlePage,
        oneCountryPage,
        setPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
