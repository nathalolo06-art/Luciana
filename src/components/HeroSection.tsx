import { motion } from "motion/react";
import Countdown from "./Countdown";

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="relative min-h-[90vh] sm:min-h-screen w-full flex flex-col justify-center items-center overflow-hidden px-4 py-16 md:py-24 text-center bg-transparent"
    >
      {/* Background Image Container */}
      <div id="hero-background-wrapper" className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          id="hero-bg-img"
          src="/src/assets/images//images/forest-bg.png"
          alt="Elegante fondo rose gold con temática de bosque encantado"
          className="w-full h-full object-cover opacity-60 scale-105 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Soft elegant gradient overlays for immersive depth */}
        <div id="hero-overlay-shadow" className="absolute inset-0 bg-gradient-to-b from-pearl/20 via-pearl/40 to-pearl" />
        <div id="hero-overlay-radial" className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-pearl)_95%)]" />
      </div>

      {/* Elegant Border Framing - Foil press look */}
      <div id="hero-frame-border" className="absolute inset-4 sm:inset-6 md:inset-8 border border-rosegold/15 rounded-[2rem] sm:rounded-[3rem] pointer-events-none z-10">
        {/* Corner designs */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-rosegold/30 rounded-tl-lg" />
        <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-rosegold/30 rounded-tr-lg" />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-rosegold/30 rounded-bl-lg" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-rosegold/30 rounded-br-lg" />
      </div>

      {/* Decorative center accent */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 flex flex-col items-center mb-6"
      >
        <div className="w-1.5 h-1.5 bg-rosegold rounded-full animate-pulse-gentle mb-4" />
        <p className="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase text-rosegold-dark/80 font-medium">
          Estás Invitado a Celebrar
        </p>
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-rosegold/40 to-transparent mt-3" />
      </motion.div>

      {/* Quinceañera Name Section */}
      <div className="z-10 w-full max-w-xl px-2 mb-4">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="font-script text-5xl sm:text-6xl text-metallic-gold drop-shadow-sm select-none py-3"
        >
          Luciana Gómez
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          className="font-serif text-[15px] sm:text-lg text-rosegold-dark/90 tracking-[0.3em] uppercase font-medium mt-1 mb-2"
        >
          MIS 15 AÑOS
        </motion.p>
      </div>

      {/* Decorative separator */}
      <div className="z-10 w-16 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent my-6" />

      {/* Date & Countdown placed further down */}
      <div className="z-10 w-full flex flex-col items-center mt-4 space-y-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
          className="flex justify-center items-center gap-2"
        >
          <div className="h-[1px] w-6 bg-rosegold/25" />
          <span className="font-serif text-[11px] sm:text-xs tracking-[0.25em] text-gold uppercase font-semibold">
            15 de Agosto, 2026
          </span>
          <div className="h-[1px] w-6 bg-rosegold/25" />
        </motion.div>

        {/* Countdown Module */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.0, ease: "easeOut" }}
          className="w-full max-w-xs px-2"
        >
          <p className="font-serif text-[10px] tracking-[0.18em] text-rosegold-dark/50 uppercase mb-3">
            Comienza la cuenta regresiva
          </p>
          <Countdown />
        </motion.div>
      </div>

      {/* Elegant scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-10 z-10 flex flex-col items-center cursor-pointer pointer-events-none"
      >
        <span className="font-sans text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-rosegold/60 mb-2">
          Desliza para leer la invitación
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-rosegold/60 to-transparent" />
      </motion.div>
    </section>
  );
}
