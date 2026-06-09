import { motion } from "motion/react";
import { Crown, Mail, CircleEllipsis } from "lucide-react";

export default function DetailsSection() {
  return (
    <section
      id="details-section"
      className="relative w-full py-12 px-3 bg-transparent overflow-hidden"
    >
      {/* Decorative center division */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-rosegold/30 to-transparent" />

      <div className="max-w-[380px] mx-auto">
        <div className="flex flex-col gap-5 w-full">
          
          {/* Dress Code Box */}
          <motion.div
            id="detail-card-dresscode"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="flex flex-col items-center text-center p-5 bg-white/50 border border-rosegold/10 rounded-2xl shadow-[0_4px_20px_rgba(183,110,121,0.015)] hover:bg-white/75 transition-all duration-300"
          >
            {/* Minimalist icon - Custom clothes presentation */}
            <div className="flex items-center justify-center p-2.5 bg-rosegold-light/20 rounded-full text-rosegold mb-3 shadow-sm border border-rosegold/5">
              <Crown className="w-5 h-5" />
            </div>

            <h3 className="font-serif text-lg text-rosegold-dark tracking-widest uppercase font-medium mb-1">
              Dress Code
            </h3>
            <span className="font-sans text-[10px] tracking-[0.2em] text-gold uppercase font-bold mb-2.5">
              Cóctel Elegante
            </span>

            <p className="font-sans text-xs text-rosegold-dark/70 max-w-xs leading-relaxed font-light">
              Deseamos brillar junto a ti en este día tan especial. Te invitamos a asistir con tu mejor vestimenta de cóctel elegante.
            </p>

            <div className="mt-3 flex gap-1.5 items-center justify-center text-[10px] text-rosegold-dark/60 font-serif">
              <span className="italic">¡Gracias por ser parte del glamour!</span>
            </div>
          </motion.div>

          {/* Lluvia de Sobres (Gifts) Box */}
          <motion.div
            id="detail-card-gifts"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.15, ease: "easeOut" }}
            className="flex flex-col items-center text-center p-5 bg-white/50 border border-rosegold/10 rounded-2xl shadow-[0_4px_20px_rgba(183,110,121,0.015)] hover:bg-white/75 transition-all duration-300"
          >
            {/* Minimalist envelope icon in Rose Gold style */}
            <div className="flex items-center justify-center p-2.5 bg-rosegold-light/20 rounded-full text-rosegold mb-3 shadow-sm border border-rosegold/5">
              <Mail className="w-5 h-5 text-rosegold animate-float" />
            </div>

            <h3 className="font-serif text-lg text-rosegold-dark tracking-widest uppercase font-medium mb-1">
              Regalos
            </h3>
            <span className="font-sans text-[10px] tracking-[0.2em] text-gold uppercase font-bold mb-2.5">
              Lluvia de Sobres
            </span>

            <p className="font-sans text-xs text-rosegold-dark/70 max-w-xs leading-relaxed font-light">
              Tu presencia es mi mayor regalo. Sin embargo, si deseas tener un detalle conmigo, he dispuesto de una urna de lluvia de sobres para dar inicio a mi nueva etapa.
            </p>

            <div className="mt-3.5 flex gap-1.5 items-center justify-center text-[9px] text-rosegold-dark/60 font-semibold bg-rosegold-light/30 backdrop-blur-sm py-1 px-3.5 rounded-full border border-rosegold/5 leading-none">
              <span className="text-rosegold">●</span>
              <span>Ubicada junto a la entrada del salón</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
