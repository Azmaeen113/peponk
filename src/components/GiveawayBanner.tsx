import { Button } from "@/components/ui/button";
import { Play, Sparkles, Gift, DollarSign, Trophy, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const GiveawayBanner = () => {
  return (
    <section className="py-20 bg-gradient-cool relative overflow-hidden">
      {/* Animated gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-cool opacity-10" />
      
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
          <div className="text-center mb-12 animate-fade-in">
            {/* Sparkle decoration with icons */}
            <div className="flex justify-center gap-4 mb-6">
              <Sparkles className="w-10 h-10 text-accent animate-pulse" />
              <Gift className="w-14 h-14 text-accent animate-pulse" style={{ animationDelay: "0.2s" }} />
              <Sparkles className="w-10 h-10 text-accent animate-pulse" style={{ animationDelay: "0.4s" }} />
            </div>

            {/* Main heading with icons */}
            <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
              <Trophy className="w-12 h-12 md:w-16 md:h-16 text-accent animate-bounce" />
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-black leading-tight drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]">
                MILLION DOLLAR GIVEAWAY
              </h2>
              <Trophy className="w-12 h-12 md:w-16 md:h-16 text-accent animate-bounce" style={{ animationDelay: "0.2s" }} />
            </div>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-black font-semibold drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)] mb-8 max-w-2xl mx-auto">
              Don't miss your chance to win big with PEPONK!
            </p>
          </div>

          {/* Main Content Card */}
          <Card className="bg-gradient-to-br from-white/30 to-white/20 backdrop-blur-xl border-2 border-white/40 rounded-2xl p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.5)] mb-8 animate-scale-in">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Video Section - Clickable to YouTube */}
              <a
                href="https://www.youtube.com/watch?v=xMHJGd3wwZk"
                target="_blank"
                rel="noopener noreferrer"
                className="relative rounded-xl overflow-hidden shadow-2xl group cursor-pointer block"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-700 to-cyan-600 flex items-center justify-center relative">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-20 h-20 border-2 border-white/30 rounded-full animate-pulse" />
                    <div className="absolute bottom-4 right-4 w-32 h-32 border-2 border-white/30 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
                  </div>
                  
                  {/* Play button */}
                  <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                    <div className="bg-white/20 backdrop-blur-md rounded-full p-6 border-4 border-white/50 shadow-2xl">
                      <Play className="w-16 h-16 text-white fill-white drop-shadow-lg ml-1" />
                    </div>
                  </div>
                  
                  {/* Play overlay text */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <p className="text-white font-bold text-sm drop-shadow-lg">Watch the Giveaway Video</p>
                  </div>
                </div>
              </a>

              {/* Info Section */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 rounded-full p-3 flex-shrink-0">
                    <Gift className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-2">Massive Prize Pool</h3>
                    <p className="text-black leading-relaxed font-medium">
                      Participate in our exclusive giveaway and stand a chance to win big rewards!
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 rounded-full p-3 flex-shrink-0">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-2">Easy to Enter</h3>
                    <p className="text-black leading-relaxed font-medium">
                      Simply watch the video and follow the instructions to enter the giveaway.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/20 rounded-full p-3 flex-shrink-0">
                    <Trophy className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-2">Multiple Winners</h3>
                    <p className="text-black leading-relaxed font-medium">
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
