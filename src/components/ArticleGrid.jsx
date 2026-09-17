import { motion } from 'framer-motion'
import PillButton from './PillButton'
import elbalcon from "../assets/elbalcon.jpg"
import plato2 from "../assets/plato2.jpg"
import plato3 from "../assets/plato3.jpg"
import plato4 from "../assets/plato4.jpg"
import plato5 from "../assets/plato5.jpg"
import plato6 from "../assets/plato6.jpg"
import plato7 from "../assets/plato7.jpg"
import plato8 from "../assets/plato8.jpg"
// Definimos los anchos variables en el grid de 12 columnas.
// La suma de col-span de cada fila en LG debe dar 12 (Fila 1: 5 + 3 + 4 = 12 | Fila 2: 4 + 5 + 3 = 12)
const galleryPhotos = [
  // Fila 1 (Altura: h-[380px] en desktop)
  { id: 1, src:plato3, alt: 'Cocina y tradición', span: 'col-span-12 sm:col-span-6 lg:col-span-5 h-[260px] sm:h-[320px] lg:h-[380px]' },
  { id: 2, src: plato4, alt: 'Orígenes en la barra', span: 'col-span-6 sm:col-span-6 lg:col-span-3 h-[260px] sm:h-[320px] lg:h-[380px]' },
  { id: 3, src: plato5, alt: 'Equipo histórico', span: 'col-span-6 sm:col-span-12 lg:col-span-4 h-[260px] sm:h-[320px] lg:h-[380px]' },

  // Fila 2 (Altura: h-[280px] en desktop - crea el contraste visual)
  { id: 4, src: plato6, alt: 'Fachada original', span: 'col-span-12 sm:col-span-5 lg:col-span-4 h-[220px] sm:h-[260px] lg:h-[280px]' },
  { id: 5, src: plato7, alt: 'Colectivo antiguo', span: 'col-span-6 sm:col-span-7 lg:col-span-5 h-[220px] sm:h-[260px] lg:h-[280px]' },
  { id: 6, src: plato8, alt: 'Familia El Balcón', span: 'col-span-6 sm:col-span-12 lg:col-span-3 h-[220px] sm:h-[260px] lg:h-[280px]' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
  },
}

export default function PhotoGallery() {
  return (
    <section className="w-full bg-gray-200 px-[20px] py-[80px] lg:px-[40px] lg:py-[100px]">
      <div className="mx-auto max-w-[1200px]">
        
        {/* TÍTULO DE LA SECCIÓN */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-[2vw] font-bold leading-[0.8] tracking-[-0.06em] text-charcoal-ink "
        >
          Nuestros Platos
        </motion.h2>

        {/* GRID ASIMÉTRICO DE FOTOS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-[40px] grid grid-cols-12 gap-[6px] lg:gap-[8px]"
        >
          {galleryPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              variants={itemVariants}
              className={`relative w-full overflow-hidden bg-pewter/20 ${photo.span}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* BOTÓN INFERIOR */}
       {/*  <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="mt-[50px] flex justify-center"
        >
          <PillButton size="standard">Ver galería completa</PillButton>
        </motion.div> */}
      </div>
    </section>
  )
}