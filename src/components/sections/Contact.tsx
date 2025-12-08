import Image from "next/image";
import { contactInfo, socialLinks } from "@/data/content";

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
    <footer id="contact" className="relative overflow-hidden -mt-px">
      {/* Background Image */}
      <Image
        className="absolute inset-0 -z-10 object-center lg:object-[25%_57%] scale-200 lg:scale-100"
        src="/backgrounds/footer.jpg"
        alt="Footer image"
        fill
        style={{ objectFit: "cover" }}
      />

      {/* Black Overlay: Darkens the whole image so text pops */}
      <div className="absolute inset-0 bg-black/70 -z-10" />

      {/* --- THE FIX: Gradient Fade Overlay --- */}
      {/* This replaces the blur. It blends the section above (bg-background) into this section seamlessly */}
      <div className="absolute top-0 left-0 w-full h-32 lg:h-40 bg-linear-to-b from-background via-background/60 to-transparent z-0 pointer-events-none" />

      <main className="flex flex-col items-center justify-center gap-16 container mx-auto relative z-10">
        <h1 className="text-[2rem] lg:text-[5rem] font-semibold mt-16 lg:mt-32">
          Let’s Work Together
        </h1>
        <div className="grid gap-y-4 grid-cols-1 lg:grid-cols-3 w-5/6 mx-auto relative ">
          <div className="h-0.5 w-full bg-primary/80 absolute -top-4" />
          {contactInfo.map(({ key, content, icon }, idx) => (
            <div
              key={key}
              className={`flex gap-2 items-center ${setJustify(idx)}`}
            >
              <Image src={icon} alt={key} width={24} height={24} />
              <span className="text-base lg:text-xl font-medium">
                {content}
              </span>
            </div>
          ))}
        </div>

        <div className="space-y-4 w-1/2 lg:w-1/3">
          <p className="text-base lg:text-lg text-center">
            You can also find me on
          </p>
          <div className="flex w-full justify-between items-center">
            {socialLinks.map(({ key, icon }) => (
              <Image
                key={key}
                src={icon}
                alt={key}
                width={32}
                height={32}
                className="w-6 h-6 lg:w-8 lg:h-8"
              />
            ))}
          </div>
        </div>

        <p className="font-normal text-xs lg:text-xl mb-16">
          Thanks for scrolling 5,580K pixels, you made it! 👊
        </p>
      </main>
    </footer>
  );
}
