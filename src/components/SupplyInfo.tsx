import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const SupplyInfo = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "Gqqdgfkn7bcsuBQZEk9oMBkqCv1bRXvPmTLs3sQ9pump";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    toast.success("Contract address copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  const stats = [
    { label: "Total Supply", value: "1,000,000,000", suffix: "$PEPONK" },
    { label: "Ticker", value: "$PEPONK", suffix: "" },
    { label: "Decimals", value: "6", suffix: "" },
    { label: "Chain", value: "Solana", suffix: "" },
  ];

  return (
  <section id="supply" className="py-16 sm:py-28 bg-background relative overflow-hidden scroll-mt-28">
        <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced card with better borders and shadows */}
        <Card className="max-w-4xl mx-auto p-6 sm:p-8 md:p-12 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-2 border-primary/30 shadow-[0_8px_24px_rgba(0,0,0,0.15)] animate-scale-in rounded-lg">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">
            <span className="text-primary drop-shadow-[0_2px_6px_rgba(0,0,0,0.2)]">
              Supply Information
            </span>
          </h2>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-3 sm:p-4 rounded-lg bg-muted/40 hover:bg-muted/60 transition-all duration-300 animate-fade-in-up border border-primary/10 hover:border-primary/20 shadow-sm hover:shadow-md hover:scale-105 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Enhanced contrast for text */}
                <div className="text-sm text-charcoal mb-2 font-semibold">{stat.label}</div>
                <div className="text-xl sm:text-2xl font-bold text-foreground">{stat.value}</div>
                {stat.suffix && (
                  <div className="text-sm text-primary font-semibold">{stat.suffix}</div>
                )}
              </div>
            ))}
          </div>

          {/* Contract Address - Enhanced contrast and styling */}
          <div className="space-y-3 sm:space-y-4">
            <div className="text-center text-sm text-charcoal font-semibold">
              Contract Address
            </div>
            <div className="flex items-center gap-2 p-3 sm:p-4 bg-muted/40 rounded-lg border border-primary/10 shadow-sm">
              <code className="flex-1 text-xs sm:text-sm font-mono text-foreground break-all leading-relaxed">
                {contractAddress}
              </code>
              {/* Enhanced button with hover effects */}
              <Button
                size="icon"
                variant="outline"
                onClick={handleCopy}
                className="flex-shrink-0 hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-md transition-all duration-300 rounded-md"
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Wavy divider bottom */}
      <svg className="absolute bottom-0 w-full h-8 sm:h-20" preserveAspectRatio="none" viewBox="0 0 1440 80">
        <path fill="#ff6b35" d="M0,0 C240,54 480,54 720,27 C960,0 1200,0 1440,27 L1440,80 L0,80 Z" />
      </svg>
    </section>
  );
};

export default SupplyInfo;
