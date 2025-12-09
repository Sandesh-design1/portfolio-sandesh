"use client";

import { useScrollTo } from "@/hooks/useScrollTo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
  target: string;
}

const Navlink = ({ children, target }: Props) => {
  const scrollTo = useScrollTo();
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    scrollTo(target);
  };

  useEffect(() => {
    const updateHash = () => setIsActive(window.location.hash === target);

    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, [target]);

  return (
    <Link
      href={target}
      onClick={handleClick}
      role="navigation"
      style={{ textDecoration: isActive ? "underline" : "none" }}
      className="text-primary-dark text-sm font-medium uppercase cursor-pointer"
    >
      {children}
    </Link>
  );
};

export default Navlink;
