import { Card } from "@/components/ui/card";
import { MessageCircle, Twitter, TrendingUp, Mail } from "lucide-react";
import peponkBusiness from "@/assets/peponk-business.jpeg";

const Social = () => {
  const socials = [
    {
      name: "Telegram",
      icon: MessageCircle,
      // More vibrant cyan - increased saturation
      color: "hsl(187, 100%, 60%)", // Bright vibrant electric cyan
      cta: "Join the Community",
      link: "https://t.me/peponkofficial",
    },
    {
      name: "Twitter/X",
      icon: Twitter,
      // More vibrant orange-red - increased saturation
      color: "hsl(16, 100%, 62%)", // Bright vibrant orange-red #FF6B35
      cta: "Follow Updates",
      link: "https://x.com/peponkwtf",
    },
    {
      name: "DexScreener",
      icon: TrendingUp,
      // More vibrant green - increased saturation
      color: "hsl(102, 85%, 65%)", // Bright vibrant lime green
      cta: "Track Stats",
      link: "https://dexscreener.com/solana/evoehwnhntsaba6kknrvv1bovzbs8xapmcncv8cemrcv",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-dark-bg text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-vibrant opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-black mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-cyan bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
              Join the Swamp
            </span>
          </h2>
          {/* Enhanced contrast for text on dark background */}
          <p className="text-lg sm:text-xl text-white">
            Connect with the PEPONK community
          </p>
        </div>

        {/* Business Frog Image - Vertical float with rotation */}
        <div className="flex justify-center mb-10 sm:mb-12 animate-scale-in">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/30 blur-3xl animate-pulse" />
            <img
              src={peponkBusiness}
              alt="PEPONK Business"
              className="relative w-64 h-64 object-cover rounded-full border-4 border-primary shadow-glow logo-float-rotate"
            />
          </div>
        </div>

        {/* Social Cards */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto justify-items-center">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card
                  className="relative w-full max-w-sm bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-2 p-5 sm:p-6 lg:p-8 hover:scale-105 transition-all duration-300 animate-fade-in-up group cursor-pointer rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)] hover:-translate-y-2"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    borderColor: `${social.color}60`, // More visible border
                    boxShadow: `0 8px 24px rgba(0,0,0,0.4), 0 0 0 1px ${social.color}20`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = social.color;
                    e.currentTarget.style.boxShadow = `0 12px 32px rgba(0,0,0,0.5), 0 0 0 1px ${social.color}40, 0 0 40px ${social.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${social.color}60`;
                    e.currentTarget.style.boxShadow = `0 8px 24px rgba(0,0,0,0.4), 0 0 0 1px ${social.color}20`;
                  }}
                >
                  {/* Glowing background on hover */}
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl pointer-events-none"
                    style={{ backgroundColor: social.color }}
                  />
                  
                  <div className="relative z-10">
                    {/* More vibrant colored circle with glow and animation */}
                    <div
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-5 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl"
                      style={{ 
                        backgroundColor: social.color,
                        boxShadow: `0 8px 24px ${social.color}60, 0 4px 12px ${social.color}40`,
                      }}
                    >
                      <Icon className="w-10 h-10 text-white drop-shadow-lg" />
                    </div>
                    
                    {/* Pure black text for high contrast */}
                    <h3 className="text-xl sm:text-2xl font-bold text-center mb-2 text-black drop-shadow-sm group-hover:text-black transition-colors">
                      {social.name}
                    </h3>
                    <p 
                      className="text-center text-black group-hover:text-black transition-colors leading-relaxed font-medium text-sm sm:text-base"
                    >
                      {social.cta}
                    </p>
                  </div>
                </Card>
              </a>
            );
          })}
        </div>

        {/* Contact Info - Enhanced contrast */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors leading-relaxed">
            <Mail className="w-5 h-5" />
            <span>Contact us for partnerships</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
