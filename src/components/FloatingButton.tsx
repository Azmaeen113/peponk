import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const FloatingButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 animate-bounce">
      {/* Enhanced floating button with better shadows and hover effects */}
      <Button
        size="lg"
        className="bg-secondary hover:bg-secondary hover:brightness-110 text-charcoal font-bold rounded-full shadow-[0_4px_16px_rgba(127,217,87,0.5)] hover:shadow-[0_6px_20px_rgba(127,217,87,0.7)] px-6 py-6 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        asChild
      >
        <a
          href="https://dexscreener.com/solana/EVoEhwNhNTsAba6kKNRVV1Bovzbs8XapMCncv8CeMrcv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TrendingUp className="mr-2 h-5 w-5" />
          Trade Now
        </a>
      </Button>
    </div>
  );
};

export default FloatingButton;
