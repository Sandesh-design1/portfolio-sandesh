import Image from "next/image";
import { brands } from "@/data/content";
import SectionHeader from "../ui/SectionHeader";

export default function Brands() {
  return (
    <section id="brands">
      <div className="relative z-0 p-8 bg-[#191918] mt-16">
        <div
          style={{
            backgroundImage: "url('/backgrounds/grid.png')",
            backgroundRepeat: "repeat",
          }}
          className="absolute inset-0 -z-10 opacity-5"
        />

        <SectionHeader
          badge="Brands"
          title="Brands I’ve Worked For"
          description="Delivering thoughtful design solutions across diverse industries"
        />
        <main className="flex justify-evenly items-center gap-6">
          {brands.map((brand) => (
            <div key={brand.name} className="relative h-28 w-40">
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </main>
      </div>
    </section>
  );
}
