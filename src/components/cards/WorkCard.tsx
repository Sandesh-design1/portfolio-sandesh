"use client";
import { useScrollTo } from "@/hooks/useScrollTo";
import Image from "next/image";
import Link from "next/link";

interface WorkProps {
  work: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
}

export default function WorkCard({ work }: WorkProps) {
  const scrollTo = useScrollTo();
  return (
    <Link
      href={{
        hash: "#work",
        pathname: `/work/${work.id}`,
      }}
      className="group hover:border-primary relative z-0 flex flex-col gap-y-2 rounded-xl border-2 border-[#38332C] bg-[#191918] transition-all duration-150"
      onClick={() => scrollTo(0)}
    >
      <div
        style={{
          backgroundImage: "url('/backgrounds/grid.png')",
          backgroundRepeat: "repeat",
        }}
        className="absolute inset-0 -z-10 rounded-xl opacity-3"
      />

      <div className="relative z-10 overflow-hidden rounded-xl p-4">
        <h4 className="text-2xl font-normal">{work.title}</h4>
        <p className="text-sm font-light">{work.description}</p>

        <div className="relative top-1/6 left-1/6 aspect-video w-full min-w-md overflow-hidden rounded-lg ring-8 ring-[#40403E] transition-all duration-150 group-hover:scale-110">
          <Image
            src={work.image}
            alt={work.title}
            fill
            className="rounded-xl object-cover object-top-left"
          />
        </div>
      </div>
    </Link>
  );
}
