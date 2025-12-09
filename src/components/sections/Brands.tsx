import Image from "next/image";
import { brands } from "@/data/content";
import SectionHeader from "../ui/SectionHeader";
import LogoLoop from "../motion/LogoLoop";

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
        <main className="mt-16">
          <LogoLoop
            logos={brands}
            speed={60}
            direction="left"
            hoverSpeed={0}
            gap={100}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Brands"
          />
        </main>
      </div>
    </section>
  );
}
