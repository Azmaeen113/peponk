import { CheckCircle2, Circle, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const Roadmap = () => {
  const phases = [
    {
      phase: 1,
      title: "Token Launch",
      status: "completed",
      items: [
        "Go live with official token",
        "Establish initial liquidity",
        "Launch on supported exchanges",
      ],
    },
    {
      phase: 2,
      title: "Engagement Activities",
      status: "completed",
      items: [
        "Host community contests",
        "Distribute first airdrops",
        "Launch social media campaigns",
      ],
    },
    {
      phase: 3,
      title: "Community Feedback",
      status: "current",
      items: [
        "Launch community poll",
        "Gather feature feedback",
        "Open discussions for improvements",
      ],
    },
    {
      phase: 4,
      title: "Strategic Collaborations",
      status: "upcoming",
      items: [
        "Partner with meme projects",
        "Cross-promote with aligned brands",
        "Co-develop initiatives",
      ],
    },
    {
      phase: 5,
      title: "Growth Campaigns",
      status: "upcoming",
      items: [
        "Initiate growth campaigns",
        "Launch referral program",
        "Strengthen engagement & retention",
      ],
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="w-8 h-8 text-secondary" />;
      case "current":
        return <Loader2 className="w-8 h-8 text-primary animate-spin" />;
      default:
        return <Circle className="w-8 h-8 text-muted-foreground" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* Animated gradient background - Blue → Pink → Theme Colors */}
      <div className="absolute inset-0 roadmap-gradient-animated" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 sm:mb-4 text-black drop-shadow-[0_2px_8px_rgba(255,255,255,0.5)]">
            Roadmap
          </h2>
          {/* Enhanced contrast for text on cyan background */}
          <p className="text-lg sm:text-xl text-black font-semibold drop-shadow-[0_2px_4px_rgba(255,255,255,0.5)]">
            Our journey to the moon, one hop at a time
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Enhanced vertical timeline line with better visibility */}
          <div className="absolute left-7 sm:left-8 md:left-1/2 top-0 bottom-0 w-1.5 sm:w-2 bg-gradient-to-b from-secondary via-primary to-accent transform md:-translate-x-1/2 shadow-lg rounded-full" />

          <div className="space-y-10 sm:space-y-12">
            {phases.map((phase, index) => (
              <div
                key={phase.phase}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Enhanced timeline node with better visibility */}
                <div className="absolute left-7 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 z-10 bg-background p-1.5 sm:p-2 rounded-full border-[3px] sm:border-4 border-primary shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                  {getStatusIcon(phase.status)}
                </div>

                {/* Content card with enhanced borders and shadows */}
                <div className={`ml-20 sm:ml-24 md:ml-0 ${index % 2 === 0 ? "md:mr-[55%]" : "md:ml-[55%]"} w-full md:w-[45%]`}>
                  <Card className="p-5 sm:p-6 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 border-2 border-primary/30 hover:border-primary/50 rounded-lg hover:-translate-y-1 bg-white/95 backdrop-blur-sm">
                    <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                      <span className="text-xs sm:text-sm font-bold text-white bg-primary px-3 py-1 rounded-full shadow-md">
                        Phase {phase.phase}
                      </span>
                      {phase.status === "current" && (
                        <span className="text-[10px] sm:text-xs font-bold text-white bg-primary px-2.5 py-1 rounded-full animate-pulse shadow-md">
                          IN PROGRESS
                        </span>
                      )}
                      {phase.status === "completed" && (
                        <span className="text-[10px] sm:text-xs font-bold text-white bg-secondary px-2.5 py-1 rounded-full shadow-md">
                          COMPLETED
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">{phase.title}</h3>
                    
                    {/* Enhanced contrast for list items */}
                    <ul className="space-y-1.5 sm:space-y-2">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 leading-relaxed">
                          {phase.status === "completed" ? (
                            <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                          ) : (
                            <Circle className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                          )}
                          <span className="text-charcoal">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
