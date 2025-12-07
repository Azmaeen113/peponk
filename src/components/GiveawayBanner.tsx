import { Button } from "@/components/ui/button";
import { Play, ShieldCheck, Users, Zap, Link } from "lucide-react";
import { Card } from "@/components/ui/card";
import peponkLogo from "@/assets/peponk-logo.png";

const GiveawayBanner = () => {
  return (
    <section id="giveaway" className="py-16 sm:py-24 relative overflow-hidden scroll-mt-28">
      <div className="absolute inset-0 giveaway-color-slideshow opacity-28 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-black">PEPONK IS INESCAPABLE</h2>
            <p className="mt-4 text-md sm:text-lg text-black/85 max-w-2xl mx-auto">
              All the other memecoin characters swarm and strike, but Peponk simply can't be taken down. Watch the cinematic battle where every attempt fails — Peponk is invincible.
            </p>
          </div>

          <Card className="rounded-2xl p-0 overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
            <div className="grid lg:grid-cols-2 gap-0 items-stretch">
              <a
                href="https://youtu.be/QmkVwna0hOk?si=8CEK73fgmDgzM8Bs"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-black/5 hover:brightness-105 transition"
              >
                <div className="aspect-video relative bg-black">
                  <img
                    src="/3CF5C61E-7861-4667-B701-FBBCCEBC9B6D.jpeg"
                    alt="Peponk battle thumbnail"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white rounded-full p-4 shadow-xl group-hover:scale-105 transition-transform">
                      <Play className="w-10 h-10 text-red-600" />
                    </div>
                  </div>
                </div>
              </a>

              <div className="p-6 sm:p-8 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <img src={peponkLogo} alt="Peponk" className="w-12 h-12 rounded-full shadow-sm" />
                    <div>
                      <h3 className="text-lg font-bold">Peponk — Inescapable</h3>
                      <p className="text-sm text-black/70">A symbol of resilience and steady progress.</p>
                    </div>
                  </div>

                  <p className="text-sm text-black/80 mb-6">
                    Watch the cinematic: memecoin characters try every tactic to take Peponk down — but he endures. It's a short tale of persistence, community, and steady wins.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="w-6 h-6 text-accent mt-1" />
                      <div>
                        <div className="text-sm font-semibold">Inescapable</div>
                        <div className="text-xs text-black/70">Built to resist the noise and attacks.</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Zap className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <div className="text-sm font-semibold">Battle-Proven</div>
                        <div className="text-xs text-black/70">A cinematic showcase of Peponk's unstoppable spirit.</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Users className="w-6 h-6 text-secondary mt-1" />
                      <div>
                        <div className="text-sm font-semibold">Community-Driven</div>
                        <div className="text-xs text-black/70">Powered by people, not quick hype.</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" asChild className="bg-accent text-charcoal font-black">
                    <a href="https://youtu.be/QmkVwna0hOk?si=8CEK73fgmDgzM8Bs" target="_blank" rel="noopener noreferrer">
                      <Play className="mr-2 h-5 w-5 inline-block" /> Watch the Battle
                    </a>
                  </Button>

                  <Button size="lg" asChild className="bg-white/90 text-accent font-black">
                    <a href="https://phantom.com/tokens/solana/Gqqdgfkn7bcsuBQZEk9oMBkqCv1bRXvPmTLs3sQ9pump" target="_blank" rel="noopener noreferrer">
                      <Link className="mr-2 h-5 w-5 inline-block" /> Trade $PEPONK on Phantom
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GiveawayBanner;
