import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, Check, Send } from "lucide-react";

export default function RSVPSection() {
  const [guestName, setGuestName] = useState("");
  const [companions, setCompanions] = useState(0);
  const [isCopied, setIsCopied] = useState(false);

  // Default link requested by user:
  // https://wa.me/573185052654?text=Hola%20Luciana,%20confirmo%20mi%20asistencia%20a%20tus%2015%20años.
  const basePhone = "573185052654";
  const defaultText = "Hola Luciana, confirmo mi asistencia a tus 15 años.";

  // Generate dynamic customized WhatsApp URL
  const getWhatsAppUrl = () => {
    if (!guestName.trim()) {
      return `https://wa.me/${basePhone}?text=${encodeURIComponent(defaultText)}`;
    }

    let customText = `Hola Luciana, soy ${guestName.trim()}`;
    if (companions > 0) {
      customText += ` y confirmo mi asistencia a tus 15 años junto a ${companions} acompañante${companions > 1 ? "s" : ""}.`;
    } else {
      customText += ` y confirmo mi asistencia a tus 15 años.`;
    }
    return `https://wa.me/${basePhone}?text=${encodeURIComponent(customText)}`;
  };

  const handleQuickConfirm = () => {
    window.open(`https://wa.me/${basePhone}?text=${encodeURIComponent(defaultText)}`, "_blank");
  };

  const handleCustomConfirm = (e: FormEvent) => {
    e.preventDefault();
    window.open(getWhatsAppUrl(), "_blank");
  };

  return (
    <section
      id="rsvp-section"
      className="relative w-full py-20 px-4 bg-transparent overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 flex justify-center items-center pointer-events-none">
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent to-rosegold/30" />
      </div>

      <div className="max-w-2xl mx-auto text-center">
        {/* Section Title */}
        <div className="mb-12">
          <span className="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase text-gold font-medium block mb-3 animate-pulse-gentle">
            C O N F I R M A C I Ó N
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-rosegold-dark font-light tracking-wide mb-2">
            Confirmación de Asistencia
          </h2>
          <p className="font-sans text-xs sm:text-sm text-rosegold-dark/60 tracking-wider">
            Por favor, confírmanos antes del <strong className="text-rosegold font-semibold">1 de Agosto de 2026</strong>
          </p>
          <div className="w-12 h-0.5 bg-rosegold/30 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 gap-8 px-2">
          {/* Main interactive form card */}
          <motion.div
            id="rsvp-form-container"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-white rounded-[2rem] border border-rosegold/10 p-6 sm:p-10 shadow-[0_12px_40px_rgba(183,110,121,0.05)] text-left relative overflow-hidden"
          >
            {/* Subtle inner floral outline representation */}
            <div className="absolute top-0 left-0 w-2 h-2 rounded-br-full bg-rosegold/30" />
            <div className="absolute top-0 right-0 w-2 h-2 rounded-bl-full bg-rosegold/30" />
            
            <h3 className="font-serif text-lg sm:text-xl text-rosegold-dark text-center font-medium mb-6">
              Personaliza tu Confirmación
            </h3>

            <form onSubmit={handleCustomConfirm} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gold font-semibold mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  placeholder="Escribe tu nombre y apellido"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full bg-pearl/30 border border-rosegold/15 rounded-xl px-4 py-3 text-rosegold-dark placeholder-rosegold-dark/40 text-sm focus:outline-none focus:ring-1 focus:ring-rosegold focus:bg-white transition-all text-center sm:text-left"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gold font-semibold mb-2">
                  ¿Asistirás con acompañantes?
                </label>
                <div className="flex items-center justify-center sm:justify-start gap-4">
                  <button
                    type="button"
                    onClick={() => setCompanions(Math.max(0, companions - 1))}
                    className="w-10 h-10 border border-rosegold/20 rounded-xl flex items-center justify-center text-rosegold-dark hover:bg-rosegold-light/20 transition-all text-lg font-bold"
                  >
                    -
                  </button>
                  <span className="font-serif text-lg font-semibold text-rosegold-dark w-12 text-center">
                    {companions}
                  </span>
                  <button
                    type="button"
                    onClick={() => setCompanions(Math.min(5, companions + 1))}
                    className="w-10 h-10 border border-rosegold/20 rounded-xl flex items-center justify-center text-rosegold-dark hover:bg-rosegold-light/20 transition-all text-lg font-bold"
                  >
                    +
                  </button>
                  <span className="text-xs text-rosegold-dark/50 italic pl-1 sm:pl-2">
                    {companions === 0 ? "Asistiré solo(a)" : companions === 1 ? "Un acompañante" : `${companions} acompañantes`}
                  </span>
                </div>
              </div>

              {/* Dynamic message preview box */}
              <div className="bg-rosegold-light/20 border border-rosegold/10 rounded-xl p-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold block mb-1">
                  Vista previa del WhatsApp
                </span>
                <p className="font-sans text-xs text-rosegold-dark/80 italic leading-relaxed">
                  "{guestName ? `Hola Luciana, soy ${guestName}${companions > 0 ? ` y confirmo mi asistencia a tus 15 años junto a ${companions} acompañante${companions > 1 ? "s" : ""}.` : ` y confirmo mi asistencia a tus 15 años.`}` : defaultText}"
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-gradient-to-r from-rosegold to-rosekey hover:from-rosegold-dark hover:to-rosegold text-white font-sans text-sm font-semibold tracking-wider shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300"
                >
                  <MessageCircle size={18} className="fill-white/10" />
                  <span>Confirmar Asistencia por WhatsApp</span>
                </button>
              </div>
            </form>

            <div className="mt-6 pt-4 border-t border-rosegold/10 text-center">
              <span className="text-[10px] text-rosegold-dark/50 uppercase tracking-widest block mb-2">O confirma directamente</span>
              <button
                type="button"
                onClick={handleQuickConfirm}
                className="inline-flex items-center gap-1.5 text-xs text-rosegold animate-pulse-gentle font-medium hover:text-rosegold-dark transition-colors"
              >
                <span>Enviar mensaje predeterminado</span>
                <Send size={12} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
