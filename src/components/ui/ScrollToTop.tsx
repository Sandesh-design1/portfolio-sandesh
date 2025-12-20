"use client";

import { useScrollTo } from "@/hooks/useScrollTo";
import Image from "next/image";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const scrollTo = useScrollTo();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 2000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleScroll = () => {
    scrollTo(0);
  };

  return (
    <div
      role="button"
      onClick={handleScroll}
      className={`ring-primary relative z-9999 mx-16 flex animate-bounce items-center justify-center gap-x-2 rounded-full p-3 transition-all duration-300 hover:ring-1 max-md:-top-4 lg:fixed lg:right-4 lg:bottom-12 lg:justify-end ${isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-10 opacity-0"} `}
    >
      <div className="flex items-center gap-x-2">
        <Image
          src="/icons/arrow-circle-down.svg"
          className="rotate-180"
          alt="Arrow"
          width={19}
          height={19}
        />
        <span className="text-primary/70 text-lg">Scroll to Top</span>
      </div>
    </div>
  );
};

export default ScrollToTop;
