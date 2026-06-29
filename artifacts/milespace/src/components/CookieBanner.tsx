import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_KEY = "milespace_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6"
        >
          <div className="container mx-auto max-w-5xl">
            <div className="bg-primary text-primary-foreground rounded-2xl shadow-2xl border border-white/10 p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="bg-secondary/20 rounded-xl p-3 shrink-0">
                <Cookie className="h-6 w-6 text-secondary" />
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm mb-1">We use cookies</p>
                <p className="text-primary-foreground/60 text-xs leading-relaxed">
                  We use cookies to enhance your browsing experience and analyse site traffic. By clicking "Accept", you agree to our{" "}
                  <Link href="/legal?tab=privacy" className="text-secondary hover:underline">Privacy Policy</Link>.
                  You can manage your preferences at any time.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={decline}
                  className="text-primary-foreground/60 hover:text-primary-foreground hover:bg-white/10 flex-1 sm:flex-none"
                >
                  Decline
                </Button>
                <Button
                  size="sm"
                  onClick={accept}
                  className="bg-secondary text-primary hover:bg-secondary/90 font-semibold flex-1 sm:flex-none"
                >
                  Accept All
                </Button>
                <button
                  onClick={decline}
                  className="text-primary-foreground/40 hover:text-primary-foreground transition-colors p-1"
                  aria-label="Dismiss"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
