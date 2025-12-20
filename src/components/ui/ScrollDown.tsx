"use client";
import { useScrollTo } from "@/hooks/useScrollTo";
import Image from "next/image";

const ScrollDown = () => {
  const scrollTo = useScrollTo();
  const handleScroll = () => {
    scrollTo("#about-me");
  };
  return (
    <div
      role="button"
      onClick={handleScroll}
      className="absolute bottom-8 flex w-full flex-col items-center justify-center gap-x-2 gap-y-2 lg:hidden"
    >
      <Image
        src="/icons/arrow-circle-down.svg"
        className="animate-bounce"
        alt="Arrow"
        width={40}
        height={40}
      />
      <span className="text-primary/70 text-md">Scroll Down</span>
    </div>
  );
};

export default ScrollDown;
