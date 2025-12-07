import { Users, Rocket, Lock, Megaphone } from "lucide-react";
import { Card } from "@/components/ui/card";

const Tokenomics = () => {
  const allocations = [
    {
      title: "Community Rewards",
      percentage: 45,
      // More vibrant green - increased saturation and brightness
      color: "hsl(102, 85%, 65%)", // Bright vibrant lime green
      icon: Users,
      items: [
        "Airdrops for holders",
        "Community challenges",
        "Early supporter rewards",
      ],
    },
    {
      title: "Liquidity Pool",
      percentage: 29,
      // More vibrant golden yellow - increased saturation
      color: "hsl(45, 100%, 70%)", // Bright vibrant golden yellow
      icon: Lock,
      items: [
        "Locked LP for stability",
        "Trading accessibility",
        "Price support mechanism",
      ],
    },
    {
      title: "Team & Development",
      percentage: 11,
      // More vibrant orange-red - increased saturation
      color: "hsl(16, 100%, 62%)", // Bright vibrant orange-red #FF6B35
      icon: Rocket,
      items: [
        "Long-term development fund",
        "Time-locked vesting",
        "Unlocked after milestones",
      ],
    },
    {
      title: "Marketing & Partnerships",
      percentage: 15,
      // More vibrant cyan - increased saturation
      color: "hsl(187, 100%, 60%)", // Bright vibrant electric cyan
      icon: Megaphone,
      items: [
        "Partnerships with key projects",
        "Influencer promotions",
        "Exchange listings",
      ],
    },
  ];

  return (
    <section id="tokenomics" className="py-16 sm:py-20 bg-dark-bg text-white relative overflow-hidden scroll-mt-28">
      {/* Wavy divider top - always visible */}
      <svg className="w-full h-20" preserveAspectRatio="none" viewBox="0 0 1440 80">
        <path fill="hsl(var(--dark-bg))" d="M0,0 C240,54 480,54 720,27 C960,0 1200,0 1440,27 L1440,80 L0,80 Z" />
      </svg>

      <div className="absolute inset-0 bg-gradient-cool opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-black mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
              Tokenomics
            </span>
          </h2>
          {/* Enhanced contrast for text on dark background */}
          <p className="text-lg sm:text-xl text-white">
            Transparent allocation for sustainable growth
          </p>
        </div>

        {/* Tokenomics Image - Larger size */}
        <div className="flex justify-center mb-12 sm:mb-16 animate-scale-in">
          <div className="relative max-w-2xl md:max-w-3xl lg:max-w-4xl w-full">
            <img
              src="/57E1B625-6100-43F7-948C-B4C46B2C7907.jpeg"
              alt="Tokenomics Visualization"
              className="w-full h-auto rounded-2xl shadow-2xl object-contain"
            />
          </div>
        </div>

        {/* Allocation Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
          {allocations.map((allocation, index) => {
            const Icon = allocation.icon;
            return (
              <Card
                key={allocation.title}
                className="relative w-full max-w-sm bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-2 p-5 sm:p-6 md:p-7 hover:scale-105 transition-all duration-300 animate-fade-in-up group rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)] hover:-translate-y-2"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  borderColor: `${allocation.color}60`, // More visible border
                  boxShadow: `0 8px 24px rgba(0,0,0,0.4), 0 0 0 1px ${allocation.color}20`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = allocation.color;
                  e.currentTarget.style.boxShadow = `0 12px 32px rgba(0,0,0,0.5), 0 0 0 1px ${allocation.color}40, 0 0 40px ${allocation.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${allocation.color}60`;
                  e.currentTarget.style.boxShadow = `0 8px 24px rgba(0,0,0,0.4), 0 0 0 1px ${allocation.color}20`;
                }}
              >
                {/* Glowing background on hover */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl pointer-events-none"
                  style={{ backgroundColor: allocation.color }}
                />
                
                <div className="relative z-10">
                  {/* More vibrant colored circle with glow */}
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl"
                    style={{ 
                      backgroundColor: allocation.color,
                      boxShadow: `0 8px 24px ${allocation.color}60`,
                    }}
                  >
                    <Icon className="w-7 h-7 text-white drop-shadow-lg" />
                  </div>
                  
                  {/* Pure black text for high contrast */}
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-black drop-shadow-sm">{allocation.title}</h3>
                  {/* More vibrant percentage with glow effect */}
                  <div 
                    className="text-4xl sm:text-5xl font-black mb-3 sm:mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      color: allocation.color,
                      textShadow: `0 4px 16px ${allocation.color}80, 0 2px 8px ${allocation.color}60`,
                    }}
                  >
                    {allocation.percentage}%
                  </div>
                  
                  {/* Pure black text for list items */}
                  <ul className="space-y-1.5 sm:space-y-2.5">
                    {allocation.items.map((item) => (
                      <li key={item} className="text-sm text-black flex items-start leading-relaxed group-hover:text-black transition-colors">
                        <span 
                          className="mr-2 font-bold transition-all duration-300 group-hover:scale-125"
                          style={{ color: allocation.color }}
                        >
                          •
                        </span>
                        <span className="drop-shadow-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
