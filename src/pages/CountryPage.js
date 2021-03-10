import React, { useState, useEffect, useCallback } from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';

const url = 'https://restcountries.eu/rest/v2/callingcode/';

const CountryPage = () => {
  const { callCode } = useParams();
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState([]);

  const getCountry = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${callCode}`);
      const data = await response.json();
      if (data) {
        const {
          capital,
          flag,
          name,
          population,
          region,
          nativeName,
          subregion,
          currencies: [currency],
        } = data[0];
        const { code, name: currName } = currency;
        const newCountry = {
          capital,
          flag,
          name,
          population,
          region,
          nativeName,
          subregion,
          code,
          currName,
        };
        setCountry(newCountry);
      } else {
        setCountry([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [callCode]);

  useEffect(() => {
    getCountry();
  }, [callCode, getCountry]);

  if (loading) {
    return (
      <div className="w-screen flex justify-center items-center  min-h-screen bg-gray-400">
        <Loading />
      </div>
    );
  }
  if (!country) {
    <h1>something went wrong</h1>;
  }

  const {
    capital,
    flag,
    name,
    population,
    region,
    nativeName,
    subregion,
    code,
    currName,
  } = country;

  return (
    <div className="bg-gray-400 min-h-screen font-roboto flex flex-col justify-center items-center p-12">
      <div className="max-w-md  shadow-lg">
        <img src={flag} alt={name} className="object-cover" />
      </div>
      <h1 className="mt-8 mb-4 text-4xl font-medium text-gray-900 antialiased">
        {name}
      </h1>
      <div className="h-0.5 bg-gray-700 w-full max-w-md "></div>
      <div className="mt-6 text-3xl flex-grow flex flex-col justify-around text-gray-900">
        <h2>
          {' '}
          <span className="font-medium">Population:</span>{' '}
          <span className="text-green-800">
            {new Intl.NumberFormat('de-DE').format(population)}
          </span>
        </h2>
        <h2>
          <span className="font-medium">Capital:</span> {capital}
        </h2>
        <h2>
          <span className="font-medium">Region:</span> {region}
        </h2>
        <h2>
          <span className="font-medium">Subregion:</span> {subregion}
        </h2>
        <h2>
          <span className="font-medium">Native name:</span> {nativeName}
        </h2>
        <h2>
          <span className="font-medium">Currency:</span> {currName} - {code}
        </h2>
      </div>
      <Link
        to="/"
        className="bg-gray-500 my-3 px-6 py-3 rounded text-gray-200 font-medium"
      >
        back to home
      </Link>
    </div>
  );
};

export default CountryPage;
