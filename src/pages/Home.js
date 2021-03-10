import React from 'react';
import Buttons from '../components/Buttons';
import Countries from '../components/Countries';
import SearchForm from '../components/SearchForm';

const Home = () => {
  return (
    <main className="flex flex-col bg-gray-400 items-center min-h-screen">
      <SearchForm />
      <Countries />
    </main>
  );
};

export default Home;
