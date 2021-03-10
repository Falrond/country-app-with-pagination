import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({ name, flag, region, callCode }) => {
  return (
    <div className="w-52 rounded overflow-hidden my-2 font-roboto shadow-lg">
      <div className="h-36">
        <img src={flag} alt={name} className="object-cover h-full w-full" />
      </div>

      <div className=" h-32 text-gray-700 p-4 bg-gray-200 uppercase text-center flex flex-col justify-center">
        <h2 className="text-md tracking-wider text-md font-medium">{name}</h2>
        <h3 className="text-sm tracking-wider">{region}</h3>
      </div>
      <Link
        to={`/country/${callCode}`}
        className="py-2 text-blue-400 bg-gray-200 uppercase text-center font-medium text-sm block border-t border-gray-400 "
      >
        show more
      </Link>
    </div>
  );
};

export default Country;
