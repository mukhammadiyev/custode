import { useState, useEffect } from 'react';

const useDevice = () => {
  // Initialize with a check for SSR (Server Side Rendering) compatibility
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Define the breakpoint (768px is the standard Tailwind 'md' breakpoint)
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Run once on mount
    checkIsMobile();

    // Add event listener for window resizing
    window.addEventListener('resize', checkIsMobile);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
};

export default useDevice;