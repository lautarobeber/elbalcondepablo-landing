import { useRef } from 'react'
import { motion } from 'framer-motion'
import plato21 from "../assets/plato21.jpg"
import plato2 from "../assets/plato2.jpg"
import plato3 from "../assets/plato3.jpg"
import plato4 from "../assets/plato4.jpg"
import plato5 from "../assets/plato5.jpg"
import plato6 from "../assets/plato6.jpg"
import plato7 from "../assets/plato7.jpg"
import plato8 from "../assets/plato8.jpg"
import plato9 from "../assets/plato9.jpg"
import plato10 from "../assets/plato10.jpg"
import plato11 from "../assets/plato11.jpg"
import plato12 from "../assets/plato12.jpg"
import plato13 from "../assets/plato13.jpg"
import plato14 from "../assets/plato14.jpg"
import plato15 from "../assets/plato15.jpg"
import plato16 from "../assets/plato16.jpg"
import plato17 from "../assets/plato17.jpg"
import plato18 from "../assets/plato18.jpg"
import plato19 from "../assets/plato19.jpg"
import plato20 from "../assets/plato20.jpg"

import postre1 from "../assets/postre1.jpg"


const topRowPhotos = [
  { id: 1, src: plato3, alt: 'Plato 3', width: 480 },
  { id: 2, src: plato4, alt: 'Plato 4', width: 320 },
  { id: 3, src: plato5, alt: 'Plato 5', width: 520 },
  { id: 4, src: plato21, alt: 'plato21', width: 380 }, 
  { id: 5, src: plato20, alt: 'Plato 20', width: 440 },
  { id: 6, src: plato19, alt: 'Plato 19', width: 360 },
  { id: 7, src: plato9, alt: 'Plato 9', width: 380 },
  { id: 8, src: plato10, alt: 'Plato 10', width: 400 },
  { id: 9, src: plato11, alt: 'Plato 11', width: 360 },
  { id: 18, src: plato17, alt: 'Plato 17', width: 420 },
  { id: 19, src: plato18, alt: 'Plato 18', width: 320 },
]

const bottomRowPhotos = [
  { id: 7, src: plato6, alt: 'Plato 6', width: 340 },
  { id: 8, src: plato7, alt: 'Plato 7', width: 560 },
  { id: 9, src: plato8, alt: 'Plato 8', width: 300 },
  { id: 10, src: plato2, alt: 'Plato 9', width: 420 },
  { id: 11, src: plato3, alt: 'Plato 10', width: 360 },
  { id: 12, src: plato12, alt: 'Plato 12', width: 500 },
  { id: 13, src: plato13, alt: 'Plato 13', width: 440 },
  { id: 14, src: plato14, alt: 'Plato 14', width: 270 },
  { id: 15, src: plato15, alt: 'Plato 15', width: 460 },
  { id: 16, src: plato16, alt: 'Plato 16', width: 300 },
  { id: 17, src: postre1, alt: 'Postre', width: 320 },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },
}

export default function PhotoGallery() {
  const carouselRef = useRef(null)

  return (
    <section className="w-full overflow-hidden bg-gray-200 py-[80px] lg:py-[100px]">

      {/* TÍTULO Y INDICADOR DE DESLIZAR */}
      <div className="mx-auto max-w-[1200px] px-[20px] lg:px-[40px] flex flex-col sm:flex-row sm:items-end justify-between gap-4">

        {/* BLOQUE DE TÍTULO */}
        <div className="flex flex-col">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[12px] font-bold uppercase tracking-[0.25em] text-amber-800/80 mb-2"
          >
            Sabor & Gastronomía
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-[34px] sm:text-[44px] lg:text-[56px] font-black uppercase tracking-tight text-charcoal-ink leading-none font-serif italic"
          >
            Nuestros Platos
          </motion.h2>
        </div>

        {/* INDICADOR ANIMADO DE "DESLIZÁ" */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-2 text-stone-600 font-medium text-sm tracking-wider uppercase"
        >
          <span>Deslizá</span>
          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-white/80 shadow-sm border border-stone-300/60"
          >
            <svg
              className="w-4 h-4 text-charcoal-ink"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </motion.div>
        </motion.div>

      </div>

      {/* CARRUSEL PEGADO A LA IZQUIERDA */}
      <div
        ref={carouselRef}
        className="mt-[40px] w-full overflow-hidden cursor-grab active:cursor-grabbing"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          drag="x"
          dragConstraints={carouselRef}
          dragElastic={0.1}
          className="flex w-max flex-col gap-[6px] lg:gap-[8px]"
        >

          {/* FILA SUPERIOR */}
          <div className="flex w-max gap-[6px] lg:gap-[8px]">
            {topRowPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                variants={itemVariants}
                style={{ width: `${photo.width}px` }}
                className="relative shrink-0 overflow-hidden bg-pewter/20 h-[220px] sm:h-[300px] lg:h-[380px]"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  draggable={false}
                  className="pointer-events-none h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>

          {/* FILA INFERIOR DESCALZADA */}
          <div className="flex w-max gap-[6px] lg:gap-[8px]">
            {bottomRowPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                variants={itemVariants}
                style={{ width: `${photo.width}px` }}
                className="relative shrink-0 overflow-hidden bg-pewter/20 h-[180px] sm:h-[220px] lg:h-[280px]"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  draggable={false}
                  className="pointer-events-none h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>

    </section>
  )
}