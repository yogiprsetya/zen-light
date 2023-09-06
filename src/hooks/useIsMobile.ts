import { useEffect, useState } from 'react';

const MOBILE_SCREEN_SIZE = 767.99;

export const useIsMobile = () => {
  const [width, setWidth] = useState<number>(1440);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      handleWindowSizeChange();
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return { isMobile: width <= MOBILE_SCREEN_SIZE };
};
