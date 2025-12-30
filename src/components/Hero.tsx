import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Rocket } from "lucide-react";
import peponkMain from "@/assets/peponk-main.png";
import heroGif from "@/assets/PEPONK TEXT GIF BACKGROUND.gif";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center lg:justify-end overflow-hidden scroll-mt-28"
      style={{ backgroundColor: "#f98801" }}
    >
      <div className="container mx-auto px-4 py-6 lg:py-12 flex flex-col items-center lg:items-start w-full">
        {/* GIF */}
        <div className="w-full flex items-center justify-center mb-8 lg:absolute lg:inset-0 lg:mb-0">
          <img
            src={heroGif}
            alt="Background Animation"
            className="w-full h-auto max-w-3xl object-contain lg:max-w-full lg:h-full"
          />
        </div>

        {/* Text Content and Buttons */}
        <div className="text-center space-y-6 animate-fade-in lg:relative lg:z-10 lg:w-full">
            <div className="space-y-4">
              <p className="sr-only">PEPONK - Where Memes Meet Million-Dollar Dreams</p>
              <p className="text-lg md:text-xl text-black max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                The memecoin that's hopping straight to the moon{" "}
                <Rocket className="inline-block w-6 h-6 text-secondary animate-bounce" />
              </p>
            </div>

            {/* CTA Buttons - Enhanced with better shadows and hover effects */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary hover:brightness-110 text-charcoal font-bold text-lg px-8 py-6 rounded-full shadow-[0_4px_16px_rgba(127,217,87,0.4)] hover:shadow-[0_6px_20px_rgba(127,217,87,0.6)] transition-all hover:scale-105 hover:-translate-y-1"
                asChild
              >
                <a href="https://dexscreener.com/solana/EVoEhwNhNTsAba6kKNRVV1Bovzbs8XapMCncv8CeMrcv" target="_blank" rel="noopener noreferrer">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Trade $PEPONK on DEX
                </a>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-black hover:bg-primary hover:text-white font-bold text-lg px-8 py-6 rounded-full transition-all hover:scale-105 hover:-translate-y-1 shadow-[0_4px_12px_rgba(255,107,53,0.2)] hover:shadow-[0_6px_16px_rgba(255,107,53,0.4)]"
                asChild
              >
                <a href="https://t.me/peponkofficial" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Join the Swamp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
