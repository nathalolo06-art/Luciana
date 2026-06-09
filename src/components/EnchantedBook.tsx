import { motion } from "motion/react";
import { useState } from "react";
import { Sparkles } from "lucide-react";

interface EnchantedBookProps {
  onOpen: () => void;
}

export default function EnchantedBook({ onOpen }: EnchantedBookProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenBook = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Give time for the flip animation and magic light burst to complete before entering the main app
    setTimeout(() => {
      onOpen();
    }, 1800);
  };

  return (
    <div
      id="enchanted-landing"
      className="absolute inset-0 z-50 flex flex-col items-center justify-between py-12 px-6 overflow-hidden bg-forest-deep select-none"
      style={{
        backgroundImage: "radial-gradient(circle at center, rgba(20,50,36,0.9) 0%, rgba(11,29,22,1) 100%)"
      }}
    >
      {/* Mystical Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft magical forest background image (blurred) */}
        <div 
          className="absolute inset-0 opacity-25 scale-110"
          style={{
            backgroundImage: "url('/images/forest-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(4px)"
          }}
        />
        
        {/* Glowing dust particles */}
        <div className="absolute top-[15%] left-[20%] w-2 h-2 rounded-full bg-gold/60 blur-[1px] animate-float" style={{ animationDuration: "8s" }} />
        <div className="absolute top-[45%] right-[15%] w-3 h-3 rounded-full bg-rosegold/50 blur-[2px] animate-float" style={{ animationDuration: "11s", animationDelay: "2s" }} />
        <div className="absolute bottom-[25%] left-[10%] w-2.5 h-2.5 rounded-full bg-gold/70 blur-[1px] animate-float" style={{ animationDuration: "9s", animationDelay: "1s" }} />
        <div className="absolute bottom-[40%] right-[25%] w-1.5 h-1.5 rounded-full bg-white/40 blur-[1px] animate-float" style={{ animationDuration: "6s", animationDelay: "4s" }} />
        
        {/* Soft magical light beams from above */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-[400px] bg-gradient-to-b from-gold/15 to-transparent blur-3xl rounded-full mix-blend-screen pointer-events-none" />
      </div>

      {/* Top Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-center z-10"
      >
        <span className="font-sans text-[10px] tracking-[0.3em] text-gold uppercase font-bold block mb-2">
          Estás Invitado A
        </span>
        <h2 className="font-serif italic text-white/90 text-sm tracking-widest font-light">
          Una Noche de Ensueño
        </h2>
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-3" />
      </motion.div>

      {/* 3D Enchanted Book Container */}
      <div 
        className="w-full flex justify-center items-center my-auto z-10"
        style={{ perspective: "1200px" }}
      >
        <motion.div
          id="magical-book-wrapper"
          initial={{ opacity: 0, scale: 0.85, rotateX: 10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          onClick={handleOpenBook}
          className="relative w-64 h-80 cursor-pointer group active:scale-95 transition-transform duration-300"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Floating aura glow around the book */}
          <div className="absolute inset-0 -m-6 bg-gold/10 rounded-full blur-[40px] pointer-events-none animate-pulse-gentle group-hover:bg-gold/15 transition-all duration-700" />
          
          {/* Complete Book - 3D Card flips */}
          <div 
            className="w-full h-full relative rounded-r-lg shadow-[0_15px_45px_rgba(0,0,0,0.65)]"
            style={{ 
              transformStyle: "preserve-3d",
              transition: "transform 1s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
          >
            {/* BOOK SPINE (Left binder edge) */}
            <div className="absolute left-0 top-0 bottom-0 w-4 bg-[#1e1302] rounded-l shadow-inner z-30 border-r border-[#ffe5aa]/15" />
            
            {/* BOOK pages rim (right edge simulation) */}
            <div className="absolute right-1 top-2 bottom-2 w-3 bg-[#e8dab5]/90 rounded-r shadow-inner z-10 flex flex-col justify-between py-1 border-r border-b border-[#cca362]">
              <div className="h-[1px] bg-[#cca362]/30 w-full" />
              <div className="h-[1px] bg-[#cca362]/30 w-full" />
              <div className="h-[1px] bg-[#cca362]/30 w-full" />
              <div className="h-[1px] bg-[#cca362]/30 w-full" />
              <div className="h-[1px] bg-[#cca362]/30 w-full" />
            </div>

            {/* FRONT COVER (Flips open leftwards) */}
            <motion.div
              id="book-cover-front"
              animate={isOpening ? { rotateY: -145 } : { rotateY: 0 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="absolute inset-0 origin-left z-20 rounded-r-lg bg-gradient-to-br from-[#2a3f2b] to-[#121c13] border border-gold/40 flex flex-col justify-between p-5 overflow-hidden pl-7"
              style={{ 
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                boxShadow: "inset 0 0 40px rgba(0,0,0,0.8)"
              }}
            >
              {/* Gold Filigree Vignettes in corners */}
              <div className="absolute top-2 right-2 w-10 h-10 border-t border-r border-gold/30 rounded-tr-md pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-10 h-10 border-b border-r border-gold/30 rounded-br-md pointer-events-none" />
              <div className="absolute top-2 left-6 w-10 h-10 border-t border-l border-gold/30 rounded-tl-md pointer-events-none" />
              <div className="absolute bottom-2 left-6 w-10 h-10 border-b border-l border-gold/30 rounded-bl-md pointer-events-none" />

              {/* Magical foil ivy or flourishes decoration */}
              <div className="absolute inset-1 border border-gold/15 rounded-md pointer-events-none" />

              {/* Centered Title Block - Exactly 2 lines without any other icons or names */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center">
                <h1 className="font-serif text-metallic-gold text-[22px] font-bold tracking-widest uppercase leading-relaxed mb-3">
                  LUCIANA GÓMEZ
                </h1>
                <h2 className="font-serif text-gold text-[17px] tracking-[0.25em] uppercase font-medium">
                  MIS 15 AÑOS
                </h2>
              </div>
            </motion.div>

            {/* INNER PAGE (Revealed on open) */}
            <div 
              className="absolute inset-0 rounded-r bg-[#faf6eb] border border-[#d6c7ab]/60 p-6 flex flex-col justify-center items-center text-center overflow-hidden z-10"
              style={{ boxShadow: "inset 0 0 35px rgba(183, 110, 121, 0.15)" }}
            >
              {/* Vintage paper vignette border */}
              <div className="absolute inset-2 border border-rosegold/10 rounded pointer-events-none" />
              
              {/* Magical Gold Glow Burst (visible when opening) */}
              {isOpening && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.1 }}
                  animate={{ opacity: 1, scale: 1.5 }}
                  transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
                  className="absolute w-36 h-36 rounded-full bg-gold/10 blur-[20px] mix-blend-color-dodge -z-10"
                />
              )}

              {/* Open page content */}
              <div className="flex flex-col items-center justify-center relative">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isOpening ? { opacity: 1, y: 0 } : { opacity: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <Sparkles size={28} className="text-gold/80 mb-2 animate-bounce" />
                  <h3 className="font-script text-3xl text-rosegold mb-1">
                    La magia comienza...
                  </h3>
                  <p className="font-sans text-[11px] text-rosegold-dark/70 tracking-widest uppercase mt-4">
                    Abriendo Cuento de Hadas
                  </p>
                  
                  {/* Small progress loading line */}
                  <div className="w-16 h-[2px] bg-rosegold/20 mx-auto mt-4 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={isOpening ? { width: "100%" } : { width: 0 }}
                      transition={{ delay: 0.4, duration: 1.2, ease: "easeInOut" }}
                      className="h-full bg-gold"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tap Guidance Prompt */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="text-center z-10"
      >
        <button
          onClick={handleOpenBook}
          className="bg-gold-light/5 hover:bg-gold-light/10 border border-gold/30 hover:border-gold/50 text-gold text-xs py-2.5 px-6 rounded-full tracking-[0.2em] font-sans uppercase font-medium shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_15px_rgba(181,130,16,0.15)] flex items-center gap-2 mx-auto active:scale-95 transition-all outline-none"
        >
          <Sparkles size={12} className="animate-pulse" />
          <span>Abrir Libro Mágico</span>
        </button>
        <p className="text-[10px] text-white/40 font-light mt-3 tracking-wider">
          Haz clic en el libro o en el botón para conocer mi historia
        </p>
      </motion.div>
    </div>
  );
}
