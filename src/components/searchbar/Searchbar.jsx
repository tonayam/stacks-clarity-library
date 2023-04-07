import React from 'react';

const Searchbar = () => {
  return (
    <div className='searchbar'>
      <input
        type='text'
        placeholder='Search: Transactions , block, address...'
      />
    </div>
  );
};

export default Searchbar;
