"use client";
import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Define the shape of our context
interface LenisContextType {
  lenis: Lenis | null;
}

const LenisContext = createContext<LenisContextType>({
  lenis: null,
});

export const useLenis = () => useContext(LenisContext);

export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useLayoutEffect(() => {
    const newLenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Sync with GSAP
    gsap.registerPlugin(ScrollTrigger);
    newLenis.on("scroll", ScrollTrigger.update);

    const tickerUpdate = (time: number) => {
      newLenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerUpdate);
    gsap.ticker.lagSmoothing(0);

    // Save instance to state
    setLenis(newLenis);

    return () => {
      gsap.ticker.remove(tickerUpdate);
      newLenis.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis }}>{children}</LenisContext.Provider>
  );
};
