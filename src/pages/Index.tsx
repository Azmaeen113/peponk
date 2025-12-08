import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import SupplyInfo from "@/components/SupplyInfo";
import About from "@/components/About";
import Social from "@/components/Social";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

const pathToId: Record<string, string> = {
  "/": "hero",
  "/mission": "mission",
  "/tokenomics": "tokenomics",
  "/roadmap": "roadmap",
  "/supply": "supply",
  "/about": "about",
  "/community": "community",
};

const scrollToPath = (rawPathname: string) => {
  const pathname = rawPathname.toLowerCase().replace(/\/+$/g, "");
  if (pathname === "/whitepaper") {
    // Open the PDF in a new tab when visiting /whitepaper
    window.open("/Peponk%20Whitepaper.pdf", "_blank");
    // Optionally replace the URL back to root so users remain on the site
    window.history.replaceState({}, "", "/");
    return;
  }

  const id = pathToId[pathname] || null;
  if (id) {
    const el = document.getElementById(id);
    if (el) {
      // use a tiny timeout to allow layout to settle on load
      setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    }
  } else {
    // Unknown path — do nothing (or scroll to top)
    // window.scrollTo({ top: 0 });
  }
};

const Index = () => {
  useEffect(() => {
    // On first load, try to scroll to section based on path
    scrollToPath(window.location.pathname || "/");

    // Listen for back/forward navigation
    const onPop = () => {
      scrollToPath(window.location.pathname || "/");
    };

    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Mission />
      <Tokenomics />
      <Roadmap />
      <SupplyInfo />
  <About />
      <Social />
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Index;
