import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="h-screen">
      <Image
        className="absolute inset-0 -z-10"
        src="/backgrounds/hero.jpg"
        alt="Hero image"
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="absolute bottom-0 h-52 lg:-bottom-5  lg:h-16 w-full bg-background blur-md z-0" />

      <div className="relative h-[50vh] flex flex-col lg:flex-row justify-between">
        {/* Hero Right */}
        <div className="space-y-2 absolute top-2/12 lg:top-1/2 left-1/12">
          <h1 className="text-primary-dark text-[1.75rem] lg:text-[4rem] font-bold">
            Hey I’m Sandesh
          </h1>
          <p className="text-primary-dark text-sm lg:text-xl w-4/6">
            I’m a Product Designer who loves turning complex problems into
            simple, functional experience.
          </p>
        </div>
        {/* Hero left */}
        <div className="absolute top-6/12 left-3/12 lg:top-1/6 lg:left-9/12">
          <p className="text-primary-dark text-base lg:text-xl lg:w-5/6">
            I approach design by stepping back, seeing the bigger picture, and
            watching everything will start to making sense
          </p>
        </div>
      </div>
    </section>
  );
}
