import { useScrollTo } from "@/hooks/useScrollTo";
import { useEffect, useState } from "react";

export const useNavigationHelper = (target: string) => {
  const scrollTo = useScrollTo();
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollTo(target);
    // We update the URL hash manually but silently so the back button works,
    // but we don't rely on it for styling anymore.
    window.history.pushState(null, "", target);
  };

  useEffect(() => {
    const handleScroll = () => {
      // --- 1. Navbar Theme Logic (Global) ---
      // If scrolled down > 50px, toggle the "scrolled" state (for colors)
      setIsScrolled(window.scrollY > 50);

      // --- 2. Scroll Spy Logic (Per Link) ---
      // Remove '#' to get the ID (e.g., "#about" -> "about")
      const sectionId = target.replace("#", "");
      const section = document.getElementById(sectionId);

      if (section) {
        const rect = section.getBoundingClientRect();

        // DEFINITION OF "ACTIVE":
        // The section is active if it is currently crossing the middle of the screen.
        const hitLine = window.innerHeight / 2;

        // Logic:
        // 1. The top of the section is above the hit line (rect.top <= hitLine)
        // 2. The bottom of the section is still below the hit line (rect.bottom >= hitLine)
        if (rect.top <= hitLine && rect.bottom >= hitLine) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      }
    };

    // Run once on mount to check initial position
    handleScroll();

    // Optimize: You could throttle this if performance becomes an issue,
    // but for a portfolio, a raw listener is usually fine.
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [target]);

  return { isActive, isScrolled, handleClick };
};
