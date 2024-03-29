import React from 'react';

const SearchBox = ({ handleChange }) => {
  return (
    <div>
      <input type='search' placeholder='Search for Robots' id='searchField' name='searchField' className='form-control mb-3' onChange={handleChange} />
    </div>
  )
}

export default SearchBox;