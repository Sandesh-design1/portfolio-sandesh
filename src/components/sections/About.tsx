import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import ScrollReveal from "../motion/ScrollReveal";

export default function About() {
  return (
    <section id="about-me">
      <div className="mt-32 mb-20">
        <SectionHeader badge="About me" title="Beyond the work" />

        <main className="container mx-auto flex w-5/6 flex-col items-center gap-4 lg:mt-16 lg:w-4/6 lg:flex-row lg:gap-10">
          <div className="relative aspect-square w-full min-w-sm rounded-md border border-[#38332C] p-8">
            <Image
              src="/backgrounds/about-me.png"
              alt="About me"
              fill
              className="rounded bg-[#191918] object-contain p-4"
            />
          </div>
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
            textClassName="font-normal text-sm lg:text-xl leading-[166%]"
          >
            I’m Sandesh, passionate about design. When I’m not designing, you’ll
            find me traveling, trekking, binge watching movies (four in a day is
            my max), or enjoying great food and some peaceful thinking time. I
            enjoy exploring new places not just for the adventure but for the
            stories they carry. Every trip, every meal, every quiet moment adds
            something to who I am. I like noticing the little things how
            different places feel, the people I meet, the conversations that
            happen unexpectedly. These moments stay with me and quietly shape
            the person I’m becoming.
          </ScrollReveal>
        </main>
      </div>
    </section>
  );
}
