import React from 'react';

const Pagination = ({ coinsPerPage, totalCoins, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='flex flex-row justify-end cursor-pointer my-8 mr-4'>
        {pageNumbers.map(number => (
          <li key={number} >
            <a onClick={() => paginate(number)} className='border-[3px] border-spacing-3  p-[6px] mx-1 hover:bg-amber-300'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;