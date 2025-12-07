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
    <header className="flex flex-col gap-y-2 items-center mb-10">
      <div className="flex items-center justify-center">
        <Badge>{badge}</Badge>
      </div>
      <h2 className="text-[1.75rem] lg:text-[2.5rem] font-semibold text-center">
        {title}
      </h2>
      {description && (
        <p className="text-sm lg:text-[1.125rem] font-normal text-center text-secondary">
          {description}
        </p>
      )}
    </header>
  );
}
