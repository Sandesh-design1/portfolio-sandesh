const navLinks = [
  { label: "Home", target: "#home" },
  { label: "Works", target: "#work" },
  { label: "Brands", target: "#brands" },
  { label: "About", target: "#about-me" },
  { label: "Contact", target: "#contact" },
];

import Navlink from "../ui/Navlink";

const Navigation = () => {
  return (
    <nav className="m fixed top-6 left-1/2 z-50 mx-auto hidden w-1/2 -translate-x-[50%] rounded-2xl bg-white/5 shadow-lg backdrop-blur-2xl backdrop-saturate-100 md:block">
      {/* inner glow border */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl border-4 border-[#D4D4D4]/10"></span>

      {/* outer stroke border */}
      <span className="pointer-events-none absolute -inset-px rounded-2xl border-4 border-white/10"></span>

      <ul className="relative flex items-center justify-center gap-x-16 px-8 py-4">
        {navLinks.map(({ label, target }) => (
          <li key={label}>
            <Navlink target={target}>{label}</Navlink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
