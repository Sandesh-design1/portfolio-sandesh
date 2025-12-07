export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-primary-dark tracking-widest font-semibold text-xl bg-primary p-2 rounded-md uppercase">
      {children}
    </span>
  );
}
