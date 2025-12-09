// using public image for spinning logo

const Mission = () => {
  return (
  <section id="mission" className="py-8 sm:py-20 bg-background relative overflow-hidden scroll-mt-28">
  {/* Wavy divider top - lower height on mobile */}
  <svg className="w-full h-8 sm:h-20" preserveAspectRatio="none" viewBox="0 0 1440 80">
        <path fill="hsl(var(--background))" d="M0,0 C240,54 480,54 720,27 C960,0 1200,0 1440,27 L1440,80 L0,80 Z" />
      </svg>

      {/* Organic blob shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
  <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] block">Our Mission:</span>
              <span className="text-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] block">No Shortcuts,</span>
              <span 
                style={{ 
                  background: 'linear-gradient(to right, rgb(255, 107, 53), rgb(255, 217, 61), rgb(127, 217, 87))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block',
                }}
              >
                Just Steady Hops Forward
              </span>
            </h2>
            
            {/* Enhanced contrast for text on light background */}
            <p className="text-lg text-charcoal leading-relaxed text-center md:text-left">
              We're building a crypto community that values <span className="font-bold text-primary">people over chaos</span>, 
              slow and steady growth over hype, and <span className="font-bold text-secondary">honesty over shortcuts</span>. 
              PEPONK brings people together through fun, meaningful memes, clear communication, and consistent effort, 
              showing that <span className="font-bold text-accent">small, steady actions can make a real difference</span>.
            </p>
          </div>

          {/* Character Illustration - Spinning effect */}
          <div className="flex justify-center animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-glow" />
              <img
                src="/601c845a-7586-4d3e-8ede-fcea77c2c963.png"
                alt="PEPONK Logo"
                className="relative w-full max-w-md logo-spin drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
