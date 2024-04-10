'use client';

import { useEffect, useState } from 'react';

const useLocationHash = () => {
  const [hash, setHash] = useState<string>('');

  console.log('hash', hash);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash;
    setHash(hash);
  }, []);

  return { hash, setHash };
};

export default useLocationHash;
