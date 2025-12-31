import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-12 bg-gradient-warm relative overflow-hidden scroll-mt-28">
      <div className="container mx-auto px-4 pt-12 pb-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Pure black text for high contrast */}
          <h2 className="text-4xl md:text-5xl font-black text-black leading-tight drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]">
            About PEPONK
          </h2>

          {/* Pure black text for all content */}
          <div className="prose prose-lg text-black max-w-none space-y-6 text-lg leading-relaxed">
            <p className="drop-shadow-[0_1px_2px_rgba(255,255,255,0.2)]">
              Peponk LLC is a community driven digital asset project that blends meme culture with real utility.
            </p>

            <p className="drop-shadow-[0_1px_2px_rgba(255,255,255,0.2)]">
              Our mission is to build a recognizable, community-powered brand that evolves beyond a traditional memecoin. The project focuses on digital engagement, creative branding, and the development of simple tools and experiences for holders. Peponk represents a growing ecosystem built around transparency, community participation, and long-term vision.
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
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild className="bg-accent text-white font-black px-8 py-4 rounded-full shadow-[0_6px_18px_rgba(0,0,0,0.18)] hover:scale-[1.02] transition-transform">
                  <a href="https://youtu.be/QmkVwna0hOk?si=8CEK73fgmDgzM8Bs" target="_blank" rel="noopener noreferrer">
                    Watch the Battle
                  </a>
                </Button>

                <Button size="lg" asChild className="bg-white hover:bg-white text-primary font-bold px-8 py-4 rounded-full border border-[#e6e6e6] shadow-sm">
                  <a href="https://phantom.com/tokens/solana/Gqqdgfkn7bcsuBQZEk9oMBkqCv1bRXvPmTLs3sQ9pump" target="_blank" rel="noopener noreferrer">
                    Trade $PEPONK on Phantom
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
