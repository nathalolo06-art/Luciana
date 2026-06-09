import { motion } from "motion/react";
import { Camera, Heart } from "lucide-react";

export default function PhotoGallery() {
  const photos = [
    {
      src: "/images/whatsapp-1.jpeg",
      caption: "Noche de destellos",
      subtitle: "El brillo de mis ilusiones",
    },
    {
      src: "/images/whatsapp-2.jpeg",
      caption: "Mis quince deseos",
      subtitle: "Un sueño hecho realidad",
    },
    {
      src: "/images/whatsapp-3.jpeg",
      caption: "Un deseo al viento",
      subtitle: "Risas y alegría compartida",
    },
    {
      src: "/images/whatsapp-4.jpeg",
      caption: "Dulce juventud",
      subtitle: "Elegancia y sencillez en mi gran día",
    },
    {
      src: "/images/whatsapp-5.jpeg",
      caption: "Un bosque de ilusiones",
      subtitle: "Donde florecen mis quince años",
    },
  ];

  return (
    <section
      id="photo-gallery-section"
      className="relative w-full py-16 px-4 bg-transparent overflow-hidden"
    >
      {/* Decorative floral element */}
      <div className="absolute top-0 right-4 w-12 h-12 opacity-30 pointer-events-none select-none">
        <Heart className="text-gold w-5 h-5 animate-pulse-gentle" />
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase text-gold font-medium block mb-3">
            Galería de Fotos
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-rosegold-dark font-light tracking-wide">
            Recuerdos de Luciana
          </h2>
          <div className="w-12 h-0.5 bg-rosegold/30 mx-auto mt-3" />
        </div>

        {/* Elegant Polaroid / Painting Frames Styled Staggered Gallery */}
        <div className="grid grid-cols-1 gap-8 w-full max-w-sm px-2">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: index * 0.2 }}
              className="bg-white p-4 pb-6 rounded-3xl border border-rosegold/10 shadow-[0_12px_32px_rgba(183,110,121,0.04)] relative group flex flex-col items-center"
            >
              {/* Luxury gold pin accent */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#f6edd2] border border-gold/30 flex items-center justify-center shadow-inner z-10">
                <Heart className="w-3.5 h-3.5 text-rosegold fill-rosegold" />
              </div>

              {/* Magical image wrapper */}
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden relative mb-4 border border-rosekey/10">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Decorative border frame inside image */}
                <div className="absolute inset-3 border border-white/40 rounded-xl pointer-events-none" />
                
                {/* Soft ambient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#143224]/10 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Photo Caption Text matching High-End editorial theme */}
              <div className="text-center w-full px-2">
                <h3 className="font-serif text-lg text-rosegold-dark italic font-semibold">
                  {photo.caption}
                </h3>
                <p className="font-sans text-[11px] text-rosegold-dark/60 tracking-wider mt-1 uppercase font-medium">
                  {photo.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative caption quote */}
        <p className="text-center text-xs tracking-widest text-[#B76E79] font-medium font-serif mt-8 uppercase italic">
          ✦ Una noche para recordar por siempre ✦
        </p>
      </div>
    </section>
  );
}
