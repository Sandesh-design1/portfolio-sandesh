import WorkCard from "@/components/cards/WorkCard";
import { works } from "@/data/works";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: Promise<{ id: number }>;
}

const MyWork = async ({ params }: Props) => {
  const { id } = await params;
  const selectedWork = works.find((w) => w.id === Number(id));

  return (
    <section className="relative z-999 container mx-auto min-h-screen bg-[#272727] px-16 py-16 lg:px-32">
      <Link
        href={{
          hash: "#work",
          pathname: "/",
        }}
        className="absolute top-8 right-8 z-1000"
      >
        <Image src="/icons/close.svg" alt="close" width={48} height={48} />
      </Link>
      <header className="flex flex-col justify-start gap-y-2">
        <h1 className="text-primary2 text-[2.75rem]">{selectedWork?.title}</h1>
        <div className="flex justify-between">
          <span className="text-secondary2 text-sm">
            {selectedWork?.readTime} Min Read
          </span>
          <Link
            href={(selectedWork?.link as Url) || "/"}
            className="flex items-center gap-2"
          >
            <Image
              src="/icons/link-arrow.svg"
              alt="Link"
              width={12}
              height={12}
            />
            <span className="text-blue-accent text-sm">Link to Work</span>
          </Link>
        </div>
      </header>
      <main className="mt-8 flex flex-col gap-y-16">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src={selectedWork?.image || "/works/the-reward-store.png"}
            alt="The reward Store"
            fill
          />
        </div>
        <div
          className="flex flex-col gap-y-8 px-16 *:text-lg *:text-[#A4A4A4] [&_ul]:list-disc [&_ul_li]:ms-8"
          dangerouslySetInnerHTML={{
            __html: selectedWork?.content as TrustedHTML,
          }}
        ></div>

        <aside className="mt-8 flex flex-col gap-y-4">
          <h2 className="text-primary2 text-4xl font-medium">
            My Other Projects
          </h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {works.map(
              (work) =>
                work.id !== Number(id) && (
                  <WorkCard key={work.id} work={work} />
                ),
            )}
          </div>
        </aside>
      </main>
    </section>
  );
};

export default MyWork;
