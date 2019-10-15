import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className='spinner-div'>
      <div className="spinner-border text-light" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <strong className='text-light mt-2'>Loading...</strong>
    </div>
  )
}

export default LoadingSpinner;