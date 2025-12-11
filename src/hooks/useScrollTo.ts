import { useLenis } from "@/context/LenisContext";

export const useScrollTo = () => {
  const { lenis } = useLenis();

  const scrollTo = (target: string | number | HTMLElement) => {
    // Debugging logs
    if (!lenis) {
      console.warn("Lenis instance is missing! Check Context Provider.");
      return;
    }

    const element =
      typeof target === "string" ? document.querySelector(target) : target;
    if (!element && typeof target !== "number") {
      console.warn(`Target element "${target}" not found in DOM.`);
      return;
    }

    lenis.scrollTo(target, {
      offset: -100,
      duration: 2,
    });
  };

  return scrollTo;
};
