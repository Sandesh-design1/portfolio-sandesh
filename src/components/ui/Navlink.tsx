"use client";

import Link from "next/link";
import { useNavigationHelper } from "@/hooks/useNavigationHelper";

interface Props {
  children: React.ReactNode;
  target: string;
}

const Navlink = ({ children, target }: Props) => {
  const { isActive, isScrolled, handleClick } = useNavigationHelper(target);

  return (
    <Link
      href={target}
      onClick={handleClick}
      role="navigation"
      className={`relative text-sm font-medium tracking-wider uppercase transition-all duration-300 ease-in-out hover:scale-110 ${
        isScrolled
          ? // --- SCROLLED STATE COLORS ---
            // If Active: Color Primary (Highlighted)
            // If Inactive: Color Ternary (Base) -> Hover to Primary
            isActive
            ? "text-primary"
            : "text-ternary hover:text-primary"
          : // --- DEFAULT/HERO STATE COLORS ---
            // If Active: Color Secondary (Highlighted)
            // If Inactive: Color Primary Dark (Base) -> Hover to Secondary
            isActive
            ? "text-primary-dark"
            : "text-primary-dark hover:text-secondary"
      } `}
    >
      {children}

      {/* --- UNDERLINE (Active Indicator) --- */}
      <span
        className={`absolute -bottom-1 left-0 h-0.5 w-full origin-left transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0"} ${isScrolled ? "bg-ternary" : "bg-primary-dark"} `}
      />
    </Link>
  );
};

export default Navlink;
