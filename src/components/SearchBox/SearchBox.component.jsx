import React from 'react';

const SearchBox = (props) => {
  return (
    <div>
      <input type='search' placeholder='Search for Robots' id='searchText' name='searchText' className='form-control mb-3' onChange={props.handleChange} />
    </div>
  )
}

export default SearchBox;