import React from 'react';
import { useGlobalContext } from '../context';

const Buttons = () => {
  const { countries, handlePage, page } = useGlobalContext();
  return (
    <div className="flex justify-center items-center flex-wrap w-3/4 mt-4 mb-4 m-auto">
      {countries.length > 1 &&
        countries.map((item, index) => {
          return (
            <button
              key={index}
              className={`m-2 h-10 w-10 rounded font-roboto ${
                index === page ? 'bg-gray-500' : null
              } shadow p-2 focus:outline-none hover:bg-gray-300 bg-gray-200`}
              onClick={() => handlePage(index)}
            >
              {index + 1}
            </button>
          );
        })}
    </div>
  );
};

export default Buttons;
