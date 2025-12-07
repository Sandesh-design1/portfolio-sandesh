const navLinks = [
  { label: "Home", link: "/" },
  { label: "Works", link: "/" },
  { label: "Brands", link: "/" },
  { label: "About", link: "/" },
  { label: "Contact", link: "/" },
];

const Navigation = () => {
  return (
    <nav
      className="hidden md:block rounded-lg px-8 py-4 shadow ring-4 ring-[#e6e5e5]/50  shadow- w-1/2 mx-auto m-8 bg-[#D4D4D41A]"
      style={{
        borderImageSource:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.1)",
        border: "3px solid",
      }}
    >
      <ul className="flex items-center justify-center  gap-x-16">
        {navLinks.map(({ label, link }) => (
          <li key={label} className="text-primary-dark text-sm font-medium">
            {label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
