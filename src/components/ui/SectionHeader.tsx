import Badge from "./Badge";

interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: React.ReactNode; // ReactNode allows JSX (like <br/>)
}

export default function SectionHeader({
  badge,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <header className="mb-6 flex flex-col items-center gap-y-2 lg:mb-10">
      <div className="flex items-center justify-center">
        <Badge>{badge}</Badge>
      </div>
      <h2 className="text-center text-[1.75rem] font-semibold lg:text-[2.5rem]">
        {title}
      </h2>
      {description && (
        <p className="text-secondary text-center text-sm font-normal lg:text-[1.125rem]">
          {description}
        </p>
      )}
    </header>
  );
}
