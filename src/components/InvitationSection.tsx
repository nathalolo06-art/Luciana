import { motion } from "motion/react";
import { INVITATION_MESSAGE } from "../data";

export default function InvitationSection() {
  return (
    <section
      id="invitation-section"
      className="relative w-full py-20 px-4 flex justify-center items-center overflow-hidden bg-transparent"
    >
      {/* Decorative details for premium style */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-12 flex justify-center items-center pointer-events-none">
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent to-rosegold/30" />
      </div>

      <div id="invitation-container" className="w-full max-w-2xl px-6 sm:px-12 py-16 bg-white/40 border border-rosegold/10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(183,110,121,0.03)] backdrop-blur-sm relative overflow-hidden">
        
        {/* Delicate Corner Vines / Ornaments representation with CSS */}
        <div className="absolute top-4 left-4 w-10 h-10 border-t border-l border-rosegold/20 rounded-tl-2xl flex items-center justify-center pointer-events-none">
          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40 absolute top-1 left-1" />
        </div>
        <div className="absolute top-4 right-4 w-10 h-10 border-t border-r border-rosegold/20 rounded-tr-2xl flex items-center justify-center pointer-events-none">
          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40 absolute top-1 right-1" />
        </div>
        <div className="absolute bottom-4 left-4 w-10 h-10 border-b border-l border-rosegold/20 rounded-bl-2xl flex items-center justify-center pointer-events-none">
          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40 absolute bottom-1 left-1" />
        </div>
        <div className="absolute bottom-4 right-4 w-10 h-10 border-b border-r border-rosegold/20 rounded-br-2xl flex items-center justify-center pointer-events-none">
          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40 absolute bottom-1 right-1" />
        </div>

        <div className="flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
            className="mb-8"
          >
            <span className="font-serif text-3xl sm:text-4xl text-metallic-gold font-medium block leading-relaxed italic">
              Con Amor e Ilusión
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-base sm:text-lg text-rosegold-dark/85 leading-relaxed tracking-wider italic italic-caption mb-8 max-w-lg"
          >
            {INVITATION_MESSAGE.quote}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="w-16 h-[1px] bg-gold/30 my-2"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="font-sans text-sm sm:text-base text-rosegold-dark/75 leading-loose tracking-wide max-w-md my-6 text-justify sm:text-center font-light"
          >
            {INVITATION_MESSAGE.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 flex flex-col items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full border border-rosegold/40 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-rosegold/70" />
            </div>
            <p className="font-script text-4xl sm:text-5xl text-rosegold-dark font-medium mt-1">
              {INVITATION_MESSAGE.signature}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
