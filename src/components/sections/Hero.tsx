import Image from "next/image";
import BlurText from "../motion/BlurText";
import ScrollDown from "../ui/ScrollDown";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen">
      <Image
        src="/backgrounds/hero.jpg"
        alt="Hero image"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 -mt-px h-screen w-full object-cover lg:h-[110vh]"
      />
      <div className="from-background via-background/90 absolute bottom-0 z-0 h-52 w-full bg-linear-to-t via-50% to-transparent lg:-bottom-24 lg:h-32" />

      <div className="relative flex h-[50vh] flex-col justify-between lg:flex-row">
        {/* Hero Right */}
        <div className="absolute top-2/12 left-[5%] space-y-2 lg:top-3/4">
          <BlurText
            text=" Hey I’m Sandesh"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-primary-dark text-[1.75rem] font-bold lg:text-[4rem]"
          />
          <p className="text-primary-dark md:text-secondary-dark mx-2 w-7/12 text-sm lg:mx-4 lg:text-xl">
            I’m a Product Designer who loves turning complex problems into
            simple, functional experience.
          </p>
        </div>
        {/* Hero left */}
        <div className="absolute top-6/12 left-3/12 lg:top-2/6 lg:left-[70%]">
          <p className="text-primary-dark text-base lg:w-10/12 lg:text-lg">
            I approach design by stepping back, seeing the bigger picture, and
            watching everything will start to making sense.
          </p>
        </div>
      </div>
      <ScrollDown />
    </section>
  );
}
