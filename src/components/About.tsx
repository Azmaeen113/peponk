import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-gradient-warm relative overflow-hidden">
      {/* Wavy divider top */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-background">
        <svg className="absolute bottom-0 w-full h-16" preserveAspectRatio="none" viewBox="0 0 1440 54">
          <path fill="hsl(var(--primary))" d="M0,0 C240,54 480,54 720,27 C960,0 1200,0 1440,27 L1440,54 L0,54 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Pure black text for high contrast */}
          <h2 className="text-4xl md:text-5xl font-black text-black leading-tight drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]">
            About PEPONK
          </h2>

          {/* Pure black text for all content */}
          <div className="prose prose-lg text-black max-w-none space-y-6 text-lg leading-relaxed">
            <p className="drop-shadow-[0_1px_2px_rgba(255,255,255,0.2)]">
              <span className="font-bold text-black">PEPONK is a small meme born in the chaos of crypto</span>, 
              standing apart from the noise and hype. While others chase quick gains, Peponk moves with 
              <span className="font-bold text-accent"> steady purpose</span>, no shortcuts, just consistent progress.
            </p>

            <p className="drop-shadow-[0_1px_2px_rgba(255,255,255,0.2)]">
              Its strength comes not from wealth or charts, but from 
              <span className="font-bold text-secondary"> patience, honesty, and community</span>. 
              PEPONK proves that real growth takes time, and even the quietest frog can make a lasting impact 
              when it moves with intention.
            </p>
          </div>

          <div className="pt-8 space-y-4">
            <p className="text-2xl md:text-3xl font-bold text-black drop-shadow-[0_1px_2px_rgba(255,255,255,0.2)]">
              Ready to ride the wave?
            </p>
            <p className="text-xl md:text-2xl text-black drop-shadow-[0_1px_2px_rgba(255,255,255,0.2)]">
              Let <span className="font-black text-secondary">$PEPONK</span> lead the way.
            </p>

            <div className="pt-6">
              {/* Enhanced button with better shadows and hover effects */}
              <Button
                size="lg"
                className="bg-white hover:bg-white hover:brightness-105 text-primary font-bold text-lg px-10 py-6 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.35)] transition-all hover:scale-105 hover:-translate-y-1"
                asChild
              >
                <a href="https://dexscreener.com/solana/EVoEhwNhNTsAba6kKNRVV1Bovzbs8XapMCncv8CeMrcv" target="_blank" rel="noopener noreferrer">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Start Trading Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Wavy divider bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-background">
        <svg className="absolute top-0 w-full h-16" preserveAspectRatio="none" viewBox="0 0 1440 54">
          <path fill="hsl(var(--primary))" d="M0,54 C240,0 480,0 720,27 C960,54 1200,54 1440,27 L1440,0 L0,0 Z" />
        </svg>
      </div>
    </section>
  );
};

export default About;
