import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Rocket } from "lucide-react";
import peponkMain from "@/assets/peponk-main.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-hero animate-spin-slow opacity-60" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-secondary rounded-full animate-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              {/* Pure black text for maximum contrast on light background */}
              <h1 className="text-5xl md:text-7xl font-black text-black leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                PEPONK
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="text-6xl md:text-8xl animate-bounce text-secondary font-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">!</span>
                <span className="text-6xl md:text-8xl animate-bounce text-secondary font-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]" style={{ animationDelay: "0.1s" }}>!</span>
                <span className="text-6xl md:text-8xl animate-bounce text-secondary font-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]" style={{ animationDelay: "0.2s" }}>!</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-black drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                Where Memes Meet<br />
                <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent drop-shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
                  Million-Dollar Dreams
                </span>
              </h2>
              {/* Pure black text for maximum contrast */}
              <p className="text-lg md:text-xl text-black max-w-2xl leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center justify-center lg:justify-start gap-2">
                The memecoin that's hopping straight to the moon{" "}
                <Rocket className="inline-block w-6 h-6 text-secondary animate-bounce" />
              </p>
            </div>

            {/* Ticker Info - Pure black text */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-black text-sm md:text-base font-semibold">
              <span className="font-bold">$PEPONK</span>
              <span>•</span>
              <span>1B Supply</span>
              <span>•</span>
              <span>6 Decimals</span>
            </div>

            {/* CTA Buttons - Enhanced with better shadows and hover effects */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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

          {/* Character Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/30 rounded-full blur-3xl animate-pulse" />
              <img
                src={peponkMain}
                alt="PEPONK Character"
                className="relative w-full max-w-md lg:max-w-lg animate-float drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
