import Image from "next/image";
import { contactInfo, socialLinks } from "@/data/content";
import ScrollFloat from "../motion/ScrollFloat";
import CountUp from "../motion/CountUp";
import Link from "next/link";
import ScrollToTop from "../ui/ScrollToTop";

const setJustify = (idx: number) => {
  switch (idx) {
    case 0:
      return "lg:justify-self-start";
    case 1:
      return "lg:justify-self-center";
    case 2:
      return "lg:justify-self-end";
    default:
      return "";
  }
};

export default function Contact() {
  return (
    <footer id="contact" className="relative -mt-px overflow-hidden">
      {/* Background Image */}
      <Image
        className="absolute inset-0 -z-10 scale-200 object-center lg:scale-100 lg:object-[25%_57%]"
        src="/backgrounds/footer.jpg"
        alt="Footer image"
        fill
        style={{ objectFit: "cover" }}
      />

      <div className="absolute inset-0 -z-10 bg-black/70" />

      <div className="from-background via-background/60 pointer-events-none absolute top-0 left-0 z-0 h-32 w-full bg-linear-to-b to-transparent lg:h-40" />

      <main className="relative z-10 container mx-auto flex flex-col items-center justify-center gap-16">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
          textClassName="text-[2rem] lg:text-[5rem] font-semibold mt-16 lg:mt-32"
        >
          Let’s Work Together
        </ScrollFloat>
        <div className="relative mx-auto grid w-5/6 grid-cols-1 gap-y-4 lg:grid-cols-3">
          <div className="bg-primary/80 absolute -top-4 h-0.5 w-full" />
          {contactInfo.map(({ key, content, icon }, idx) => (
            <div
              key={key}
              className={`flex items-center gap-2 ${setJustify(idx)}`}
            >
              <Image src={icon} alt={key} width={24} height={24} />
              <span className="text-base font-medium lg:text-xl">
                {content}
              </span>
            </div>
          ))}
        </div>

        <div className="w-1/2 space-y-4 lg:w-1/3">
          <p className="text-center text-base lg:text-lg">
            You can also find me on
          </p>
          <div className="flex w-full items-center justify-between">
            {socialLinks.map(({ key, icon, href }) => (
              <Link
                key={key}
                href={href}
                target="_blank"
                className="transition-all duration-150 ease-in-out hover:scale-110 active:scale-95"
              >
                <Image
                  src={icon}
                  alt={key}
                  width={32}
                  height={32}
                  className="h-6 w-6 lg:h-8 lg:w-8"
                />
              </Link>
            ))}
          </div>
        </div>

        <p className="mb-16 text-xs font-normal lg:text-xl">
          Thanks for scrolling{" "}
          <CountUp
            from={0}
            to={5580}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text"
          />
          K pixels, you made it! 👊
        </p>
      </main>
      <ScrollToTop />
    </footer>
  );
}
