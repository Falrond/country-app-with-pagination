import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-4xl text-center">page not found</h1>
      <Link
        to="/"
        className="m-auto bg-blue-400 font-medium text-xl py-2 px-4 rounded text-white"
      >
        back home
      </Link>
    </section>
  );
};

export default Error;
