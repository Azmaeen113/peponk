import { Button } from "@/components/ui/button";
import { Play, Sparkles, Gift, DollarSign, Trophy, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const GiveawayBanner = () => {
  return (
    <section id="giveaway" className="py-16 sm:py-20 relative overflow-hidden scroll-mt-28">
      {/* Smooth color-changing background slideshow */}
      <div className="absolute inset-0 giveaway-color-slideshow" />
      
      {/* Floating icon animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          >
            <DollarSign className="w-8 h-8 text-accent" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10 sm:mb-12 animate-fade-in">
            {/* Sparkle decoration with icons */}
            <div className="flex justify-center gap-3 sm:gap-4 mb-5 sm:mb-6">
              <Sparkles className="w-10 h-10 text-accent animate-pulse" />
              <Gift className="w-14 h-14 text-accent animate-pulse" style={{ animationDelay: "0.2s" }} />
              <Sparkles className="w-10 h-10 text-accent animate-pulse" style={{ animationDelay: "0.4s" }} />
            </div>

            {/* Main heading with icons */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-6 flex-wrap">
              <Trophy className="w-9 h-9 md:w-12 md:h-12 lg:w-14 lg:h-14 text-accent animate-bounce" />
              <h2 className="text-3xl sm:text-5xl md:text-4xl lg:text-5xl font-black text-black leading-tight drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)] max-w-3xl mx-auto">
                MILLION DOLLAR GIVEAWAY
              </h2>
              <Trophy className="w-9 h-9 md:w-12 md:h-12 lg:w-14 lg:h-14 text-accent animate-bounce" style={{ animationDelay: "0.2s" }} />
            </div>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-black font-semibold drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)] mb-6 sm:mb-8 max-w-2xl mx-auto">
              Don't miss your chance to win big with PEPONK!
            </p>
          </div>

          {/* Main Content Card */}
          <Card className="bg-gradient-to-br from-white/25 to-white/15 backdrop-blur-lg border border-white/30 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-[0_12px_30px_rgba(0,0,0,0.35)] mb-8 animate-scale-in max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-5 sm:gap-6 items-center">
              {/* Video Section - Clickable to YouTube */}
              <a
                href="https://www.youtube.com/watch?v=xMHJGd3wwZk"
                target="_blank"
                rel="noopener noreferrer"
                className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer block border border-black/10 bg-black"
              >
                <div className="aspect-video bg-black relative">
                  <img
                    src="/3CF5C61E-7861-4667-B701-FBBCCEBC9B6D.jpeg"
                    alt="Giveaway video thumbnail"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black/70 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 h-12 text-white text-sm">
                    <span className="font-semibold">YouTube</span>
                    <span>3:25</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="bg-white rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform"
                      style={{ width: "20%", height: "20%", minWidth: "3.5rem", minHeight: "2rem" }}
                    >
                      <svg viewBox="0 0 24 24" className="w-24 h-24 fill-red-600">
                        <path d="M10 15.5V8.5L16 12L10 15.5Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-semibold">Watch the Giveaway Video</p>
                  </div>
                </div>
              </a>

              {/* Info Section */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-accent/20 rounded-full p-2 flex-shrink-0">
                    <Gift className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-2">Massive Prize Pool</h3>
                    <p className="text-black leading-relaxed font-medium text-sm">
                      Participate in our exclusive giveaway and stand a chance to win big rewards!
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary/20 rounded-full p-2 flex-shrink-0">
                    <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-2">Easy to Enter</h3>
                    <p className="text-black leading-relaxed font-medium text-sm">
                      Simply watch the video and follow the instructions to enter the giveaway.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-secondary/20 rounded-full p-2 flex-shrink-0">
                    <Trophy className="w-6 h-6 sm:w-7 sm:h-7 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-2">Multiple Winners</h3>
                    <p className="text-black leading-relaxed font-medium text-sm">
                      Multiple lucky winners will be selected from our community!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* CTA Button Section */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent hover:brightness-110 text-charcoal font-black text-xl md:text-2xl px-12 py-7 md:px-16 md:py-8 rounded-full shadow-[0_8px_32px_rgba(255,217,61,0.6)] hover:shadow-[0_12px_40px_rgba(255,217,61,0.8)] transition-all hover:scale-110 hover:-translate-y-2 duration-300 group"
              asChild
            >
              <a href="https://www.youtube.com/watch?v=xMHJGd3wwZk" target="_blank" rel="noopener noreferrer">
                <Play className="mr-3 h-7 w-7 group-hover:scale-125 transition-transform" />
                Watch & Enter Now
              </a>
            </Button>

            {/* Additional decorative sparkles */}
            <div className="flex justify-center gap-3 mt-8">
              {[...Array(5)].map((_, i) => (
                <Sparkles
                  key={i}
                  className="w-6 h-6 text-accent animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiveawayBanner;
