import Image from "next/image";
import BlurText from "../motion/BlurText";

export default function Hero() {
  return (
    <section id="home" className="h-screen">
      <Image
        src="/backgrounds/hero.jpg"
        alt="Hero image"
        width={1920}
        height={1080}
        className="absolute inset-0 h-screen lg:h-[110vh] w-full object-cover  -z-10 -mt-px"
      />
      <div className="absolute bottom-0 h-52 lg:-bottom-24 lg:h-32 w-full bg-linear-to-t from-background via-background/90 via-50% to-transparent  z-0" />

      <div className="relative h-[50vh] flex flex-col lg:flex-row justify-between">
        {/* Hero Right */}
        <div className="space-y-2 absolute top-2/12 lg:top-1/2 left-[5%]">
          <BlurText
            text=" Hey I’m Sandesh"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-primary-dark text-[1.75rem] lg:text-[4rem] font-bold"
          />
          <p className="text-primary-dark text-sm lg:text-xl w-4/6 mx-4">
            I’m a Product Designer who loves turning complex problems into
            simple, functional experience.
          </p>
        </div>
        {/* Hero left */}
        <div className="absolute top-6/12 left-3/12 lg:top-1/6 lg:left-[70%]">
          <p className="text-primary-dark text-base lg:text-lg lg:w-11/12">
            I approach design by stepping back, seeing the bigger picture, and
            watching everything will start to making sense
          </p>
        </div>
      </div>
    </section>
  );
}
