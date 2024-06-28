"use client";

import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<{
    width?: number;
    height?: number;
    isMobile?: boolean;
  }>({
    width: undefined,
    height: undefined,
    isMobile: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < 1024,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
