import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import SupplyInfo from "@/components/SupplyInfo";
import About from "@/components/About";
import GiveawayBanner from "@/components/GiveawayBanner";
import Social from "@/components/Social";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Mission />
      <Tokenomics />
      <Roadmap />
      <SupplyInfo />
      <About />
      <GiveawayBanner />
      <Social />
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Index;
