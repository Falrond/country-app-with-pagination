import React from 'react';
import Loading from './Loading';
import Country from './Country';
import { useGlobalContext } from '../context';
import Buttons from './Buttons';

const Countries = () => {
  const { loading, oneCountryPage } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (!Array.isArray(oneCountryPage) || oneCountryPage.length < 1) {
    return <h1 className="text-2xl">there are no matching countries</h1>;
  }
  return (
    <section className=" flex flex-col">
      <div className="m-auto md:grid grid-flow-row grid-cols-3 gap-8 lg:grid-cols-4">
        {oneCountryPage.map(item => {
          return <Country key={item.numericCode} {...item} />;
        })}
      </div>
      <Buttons />
    </section>
  );
};

export default Countries;
