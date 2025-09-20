import { useEffect, useRef, useState } from 'react';

export const useHeaderScroll = () => {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const update = () => {
      const currentScrollY = window.scrollY;
      
      // Check if mobile menu is open (Bootstrap adds 'show' class when navbar is expanded)
      const isMobileMenuOpen = document.querySelector('.navbar-collapse.show') !== null;
      
      // Don't hide header if mobile menu is open or on mobile devices
      const isMobile = window.innerWidth <= 991;
      
      if (!isMobileMenuOpen && !isMobile) {
        if (currentScrollY > lastScrollYRef.current && currentScrollY > 100) {
          setIsHeaderHidden(true);
        } else if (currentScrollY < lastScrollYRef.current) {
          setIsHeaderHidden(false);
        }
      } else {
        // Always show header on mobile or when menu is open
        setIsHeaderHidden(false);
      }

      lastScrollYRef.current = currentScrollY;
      tickingRef.current = false;
    };

    const handleScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(update);
        tickingRef.current = true;
      }
    };

    const handleResize = () => {
      // Reset header state on resize
      setIsHeaderHidden(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isHeaderHidden;
};
