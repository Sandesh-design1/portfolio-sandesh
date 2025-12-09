const navLinks = [
  { label: "Home", target: "#hero" },
  { label: "Works", target: "#work" },
  { label: "Brands", target: "#brands" },
  { label: "About", target: "#about-me" },
  { label: "Contact", target: "#contact" },
];

import Navlink from "../ui/Navlink";

const Navigation = () => {
  return (
    <nav
      className="hidden border-transparent  md:block w-1/2 mx-auto m-8 rounded-lg px-8 py-4 bg-[#D4D4D4]/10 shadow relative"
      style={{
        borderImageSource:
          "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #FFFFFF 10%, #FFFFFF 50%, rgba(255,255,255,0) 100%) 1",
      }}
    >
      <ul className="flex items-center justify-center gap-x-16">
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
