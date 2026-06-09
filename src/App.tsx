/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, useRef } from "react";
import HeroSection from "./components/HeroSection";
import InvitationSection from "./components/InvitationSection";
import EventSection from "./components/EventSection";
import DetailsSection from "./components/DetailsSection";
import PhotoGallery from "./components/PhotoGallery";
import RSVPSection from "./components/RSVPSection";
import { MessageCircle } from "lucide-react";
import EnchantedBook from "./components/EnchantedBook";

export default function App() {
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only process scroll variables and floating buttons if the book is opened
      if (!hasOpened) return;

      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const containerHeight = window.innerHeight;

      // Show floating RSVP button after scrolling past the hero section (around 40% height)
      if (scrollTop > containerHeight * 0.4) {
        setShowFloatingButton(true);
      } else {
        setShowFloatingButton(false);
      }

      // Hide the floating button when we are close to the bottom of the screen (the main RSVP block)
      const rsvpSection = document.getElementById("rsvp-section");
      if (rsvpSection) {
        const rect = rsvpSection.getBoundingClientRect();
        if (rect.top < containerHeight) {
          setShowFloatingButton(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasOpened]);

  const handleFloatingClick = () => {
    const rsvpSection = document.getElementById("rsvp-section");
    if (rsvpSection) {
      rsvpSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div 
      id="app-outer-wrapper" 
      className="min-h-screen w-full bg-[#ebd1d5]/20 flex items-center justify-center p-0 overflow-x-hidden relative"
    >
      {/* Soft overlay or decorations on the preview margins if needed */}
      <div className="absolute inset-0 bg-[#f9f6f0]/40 z-0 pointer-events-none" />

      {/* Floating forest fireflies/luminescent particles for magical atmosphere inside the viewport area */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20 select-none">
        <div className="absolute top-[8%] left-[12%] w-2 h-2 rounded-full bg-gold/70 shadow-[0_0_8px_#b58210] animate-float animate-pulse-gentle" style={{ animationDuration: "7s" }} />
        <div className="absolute top-[25%] right-[10%] w-2.5 h-2.5 rounded-full bg-rosegold/60 shadow-[0_0_10px_#B76E79] animate-float animate-pulse-gentle" style={{ animationDuration: "9s", animationDelay: "2.5s" }} />
        <div className="absolute top-[60%] left-[8%] w-1.5 h-1.5 rounded-full bg-gold/80 shadow-[0_0_6px_#b58210] animate-float animate-pulse-gentle" style={{ animationDuration: "8s", animationDelay: "1s" }} />
        <div className="absolute top-[82%] right-[15%] w-2.5 h-2.5 rounded-full bg-[#fdf5df]/70 shadow-[0_0_8px_#fdf5df] animate-float animate-pulse-gentle" style={{ animationDuration: "12s", animationDelay: "4s" }} />
      </div>

      {/* Modern 9:16 optimized mobile layout, centered on desktop */}
      <div
        id="invitation-container"
        className="w-full max-w-[420px] min-h-screen bg-pearl shadow-[0_10px_50px_rgba(5,15,10,0.12)] relative z-10 flex flex-col transition-all duration-500 overflow-x-hidden border-x border-rosegold/10"
      >
        <AnimatePresence mode="wait">
          {!hasOpened ? (
            <motion.div
              key="landing-book-screen"
              initial={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(5px)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full z-50 overflow-hidden"
            >
              <EnchantedBook onOpen={() => setHasOpened(true)} />
            </motion.div>
          ) : (
            <motion.div
              key="main-invitation-content"
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full flex-1 flex flex-col justify-start relative z-10"
            >
              {/* Fixed blurred enchanted forest background restricted to invitation container's width */}
              <div 
                id="invitation-fixed-background"
                className="fixed left-1/2 -translate-x-1/2 w-full max-w-[420px] h-screen top-0 z-0 pointer-events-none select-none overflow-hidden"
              >
                <div 
                  className="w-full h-full scale-110 origin-center"
                  style={{
  backgroundImage: "url('/images/forest-bg.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  filter: "blur(7px)"
}}
                />
                {/* Elegant light parchment-like overlay to ensure crisp readability for gold typography */}
                <div className="absolute inset-0 bg-gradient-to-b from-pearl/84 via-white/88 to-pearl/92 mix-blend-normal" />
              </div>

              <div id="inner-invitation-scroller" className="w-full flex-1 flex flex-col justify-start relative z-10">
                {/* Main Single Page Sections in Enchanted Forest Style */}
                <HeroSection />
                
                <InvitationSection />
                
                <PhotoGallery />
                
                <EventSection />
                
                <DetailsSection />
                
                <RSVPSection />

                {/* Elegant Footer with copyright line */}
                <footer 
                  id="app-footer" 
                  className="w-full py-10 text-center bg-white/20 backdrop-blur-sm border-t border-rosegold/10 relative z-10 text-[11px] tracking-widest text-[#B76E79] uppercase font-sans font-light"
                >
                  <p className="mb-1 text-gold font-serif text-xs">Celebramos la vida de Luciana Gómez</p>
                  <p className="text-[9px] text-[#B76E79]/60 font-semibold tracking-normal mt-1.5">© 2026 • Diseñado con Amor</p>
                </footer>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Soft floating WhatsApp CTA button */}
      <AnimatePresence>
        {(showFloatingButton && hasOpened) && (
          <motion.button
            id="floating-whatsapp-action"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={handleFloatingClick}
            className="fixed bottom-6 z-50 flex items-center justify-center gap-2 py-3 px-5 sm:py-3.5 sm:px-6 rounded-full bg-gradient-to-r from-rosegold to-rosekey hover:from-rosegold-dark hover:to-rosegold text-white text-xs sm:text-sm font-semibold tracking-wider font-sans shadow-[0_10px_30px_rgba(183,110,121,0.25)] hover:shadow-[0_12px_35px_rgba(183,110,121,0.35)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <MessageCircle size={16} className="fill-white/10" />
            <span>Confirmar Asistencia</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
