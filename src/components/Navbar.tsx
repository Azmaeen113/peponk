import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Mission", href: "#mission" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Supply", href: "#supply" },
  { label: "About", href: "#about" },
  { label: "Giveaway", href: "#giveaway" },
  { label: "Community", href: "#community" },
];

const tradeLink = "https://dexscreener.com/solana/EVoEhwNhNTsAba6kKNRVV1Bovzbs8XapMCncv8CeMrcv";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleNavigate = () => {
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-center relative">

        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-black bg-white/30 backdrop-blur-lg px-6 py-2 rounded-full shadow-[0_4px_18px_rgba(0,0,0,0.1)]">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-primary transition-colors">
              {item.label}
            </a>
          ))}
          <a
            href={tradeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-5 py-2 rounded-full border border-black text-black font-bold hover:bg-black hover:text-white transition-colors"
          >
            Trade Now
          </a>
        </nav>

        <button
          className="lg:hidden text-black p-2 rounded-md border border-black/10 absolute right-4"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-black/60 backdrop-blur-md">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4 text-white font-semibold">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavigate}
                className="py-1"
              >
                {item.label}
              </a>
            ))}
            <a
              href={tradeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-5 py-2 rounded-full border border-white text-center font-bold hover:bg-white hover:text-black transition-colors"
              onClick={handleNavigate}
            >
              Trade Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

