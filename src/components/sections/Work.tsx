import { works } from "@/data/content";
import WorkCard from "@/components/cards/WorkCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function WorkSection() {
  return (
    <section id="work" className="mt-32 mb-16">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <SectionHeader
          badge="WORKS"
          title="Work in the real world"
          description={
            <>
              Designs that moved from ideas to something <br /> people actually
              use
            </>
          }
        />

        <main className="grid grid-cols-1 items-stretch gap-9 px-4 md:grid-cols-2 lg:w-5/6">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </main>
      </div>
    </section>
  );
}
