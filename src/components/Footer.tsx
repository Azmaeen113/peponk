import { MessageCircle, Twitter, TrendingUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              PEPONK
            </h3>
            {/* Enhanced contrast for text on dark background */}
            <p className="text-white text-sm leading-relaxed">
              The memecoin that's hopping straight to the moon. Built by the community, for the community.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://dexscreener.com/solana/EVoEhwNhNTsAba6kKNRVV1Bovzbs8XapMCncv8CeMrcv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors text-sm leading-relaxed hover:underline"
                >
                  Trade on DEX
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/peponkofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors text-sm leading-relaxed hover:underline"
                >
                  Join Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/i/communities/1988166536280813964"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors text-sm leading-relaxed hover:underline"
                >
                  X Community
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://t.me/peponkofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_12px_rgba(255,107,53,0.4)]"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/peponkwtf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_12px_rgba(255,107,53,0.4)]"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://dexscreener.com/solana/evoehwnhntsaba6kknrvv1bovzbs8xapmcncv8cemrcv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_12px_rgba(255,107,53,0.4)]"
              >
                <TrendingUp className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Enhanced contrast */}
        <div className="border-t border-white/20 pt-8 space-y-4">
          <p className="text-center text-white text-sm leading-relaxed">
            © {currentYear} PEPONK. Built by the community, for the community.
          </p>
          <p className="text-center text-white text-sm leading-relaxed break-all">
            Contact: Gqqdgfkn7bcsuBQZEk9oMBkqCv1bRXvPmTLs3sQ9pump
          </p>
          <p className="text-center text-white/80 text-xs max-w-3xl mx-auto leading-relaxed">
            Disclaimer: Cryptocurrency investments carry risk. PEPONK is a meme token created for entertainment 
            and community engagement. Always do your own research and invest responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
