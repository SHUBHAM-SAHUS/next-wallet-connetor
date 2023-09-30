import React from 'react';
import Image from 'next/image';

// loader component
const LoadingSpinner = () => {
  return (
    <>
      <div>
        <Image priority src="/assets/Rolling-1.2s-225px.svg" alt="Loading..." height={18} width={18} />
      </div>
    </>
  );
};

export default LoadingSpinner;
