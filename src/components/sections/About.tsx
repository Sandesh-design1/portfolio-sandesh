import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";

export default function About() {
  return (
    <section id="about-me">
      <div className="my-32 ">
        <SectionHeader badge="About me" title="Beyond the work" />

        <main className="flex lg:flex-row flex-col items-center gap-10 w-5/6 lg:w-4/6 container mx-auto lg:mt-16">
          <div className="relative w-full min-w-sm aspect-square  border border-[#38332C] p-8 rounded-md">
            <Image
              src="/backgrounds/about-me.png"
              alt="About me"
              fill
              className="object-contain rounded p-4 bg-[#191918]"
            />
          </div>
          <p className="font-normal text-sm lg:text-xl leading-[166%]">
            I’m Sandesh, passionate about design. When I’m not designing, you’ll
            find me traveling, trekking, binge watching movies (four in a day is
            my max), or enjoying great food and some peaceful thinking time. I
            enjoy exploring new places not just for the adventure but for the
            stories they carry. Every trip, every meal, every quiet moment adds
            something to who I am. I like noticing the little things how
            different places feel, the people I meet, the conversations that
            happen unexpectedly. These moments stay with me and quietly shape
            the person I’m becoming.
          </p>
        </main>
      </div>
    </section>
  );
}
