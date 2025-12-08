import { works } from "@/data/content";
import WorkCard from "@/components/cards/WorkCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function WorkSection() {
  return (
    <section id="work" className="py-16">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <SectionHeader
          badge="WORKS"
          title="Work in the real world"
          description={
            <>
              designs that moved from ideas to something <br /> people actually
              use
            </>
          }
        />

        <main className="grid grid-cols-1 md:grid-cols-2 gap-9 items-stretch lg:w-5/6 px-4">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </main>
      </div>
    </section>
  );
}
