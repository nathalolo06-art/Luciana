import { motion } from "motion/react";
import { MapPin, Clock, Calendar } from "lucide-react";

export default function EventSection() {
  return (
    <section
      id="event-section"
      className="relative w-full py-12 px-3 bg-transparent overflow-hidden"
    >
      {/* Visual separators / background circles */}
      <div className="absolute top-1/3 left-[-15%] w-[50%] aspect-square rounded-full bg-rosegold-light/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] w-[45%] aspect-square rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[380px] mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="font-serif text-xs tracking-[0.25em] uppercase text-gold font-medium block mb-2">
            Cuándo & Dónde
          </span>
          <h2 className="font-serif text-2xl text-rosegold-dark font-light tracking-wide">
            Detalles de la Celebración
          </h2>
          <div className="w-12 h-0.5 bg-rosegold/30 mx-auto mt-3" />
        </div>

        {/* Both visual cards designed with mobile-first layout */}
        <div className="flex flex-col gap-5 w-full">
          
          {/* Card: Venue & Location */}
          <motion.div
            id="event-card-location"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-white rounded-2xl border border-rosegold/10 p-5 shadow-[0_8px_30px_rgba(183,110,121,0.03)] flex flex-col justify-between hover:shadow-[0_12px_45px_rgba(183,110,121,0.06)] transition-all duration-300 relative group"
          >


            <div>
              <div className="inline-flex items-center justify-center p-2 rounded-full bg-rosegold-light/30 border border-rosegold/10 text-rosegold mb-3.5">
                <MapPin size={18} />
              </div>

              <h3 className="font-serif text-[19px] text-rosegold-dark tracking-wide mb-0.5">
                La Recepción
              </h3>
              <p className="font-sans text-[9px] tracking-widest text-gold uppercase font-bold mb-3.5">
                Lugar de Ensueño
              </p>

              <div className="space-y-2.5 mb-5">
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 text-rosegold/80">
                    <MapPin size={15} />
                  </div>
                  <div>
                    <h4 className="font-sans text-[11px] font-bold text-rosegold-dark">Dirección</h4>
                    <p className="font-sans text-[11px] text-rosegold-dark/70 leading-relaxed">
                      La Mansión de Eventos, Salón Principal
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 text-rosegold/80">
                    <Calendar size={15} />
                  </div>
                  <div>
                    <h4 className="font-sans text-[11px] font-bold text-rosegold-dark">Fecha</h4>
                    <p className="font-sans text-[11px] text-rosegold-dark/70">
                      Sábado, 15 de Agosto de 2026
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 text-rosegold/80">
                    <Clock size={15} />
                  </div>
                  <div>
                    <h4 className="font-sans text-[11px] font-bold text-rosegold-dark">Hora</h4>
                    <p className="font-sans text-[11px] text-rosegold-dark/70">
                      5:00 PM (17:00)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-1 pt-3 border-t border-rosegold/5">
              <a
                href="https://maps.app.goo.gl/GQMX7LiY6vvgEHEH8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-rosegold to-rosekey text-white font-sans text-[11px] font-bold tracking-wider shadow-sm hover:scale-[1.01] transition-all duration-300"
              >
                <MapPin size={13} />
                <span>Ver Ubicación</span>
              </a>
              <p className="text-center text-[9px] text-rosegold-dark/50 mt-1">
                Haz clic para abrir Google Maps
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
