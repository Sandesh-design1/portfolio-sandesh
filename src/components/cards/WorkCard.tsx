import Image from "next/image";

interface WorkProps {
  work: {
    title: string;
    description: string;
    image: string;
  };
}

export default function WorkCard({ work }: WorkProps) {
  return (
    <div className="flex flex-col gap-y-2 relative bg-[#191918] z-0 rounded-xl border-2 border-[#38332C] ">
      <div
        style={{
          backgroundImage: "url('/backgrounds/grid.png')",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute inset-0 -z-10 opacity-5"
      />

      <div className="relative z-10 overflow-hidden p-4">
        <h4 className="text-2xl font-normal">{work.title}</h4>
        <p className="text-sm font-light">{work.description}</p>

        <div className="relative w-full aspect-video min-w-md top-1/6 left-1/6 overflow-hidden rounded-lg ring-8 ring-[#40403E]">
          <Image
            src={work.image}
            alt={work.title}
            fill
            className="object-cover object-top-left"
          />
        </div>
      </div>
    </div>
  );
}
