import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import PillButton from './PillButton'
import { heroPhotos } from '../data/articles'

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const parallaxSlow = useTransform(scrollYProgress, [0, 1], [0, -40])
  const parallaxFast = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-paper-white px-4 pt-4 pb-20 lg:px-10"
    >
      <div className="relative mx-auto min-h-[90vh] max-w-[1500px]">
        
        {/* BLOQUE TIPOGRÁFICO MONUMENTAL */}
        <div className="relative z-10 select-none">
          {/* 1. "Eindhoven" Horizontal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="-ml-4 text-[17vw] font-bold leading-[0.8] tracking-[-0.06em] text-charcoal-ink lg:text-[230px]"
          >
          El Balcón
          </motion.h1>

          {/* 2. "Design" Vertical (Ubicado a la derecha de Eindhoven) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ y: parallaxSlow }}
            className="absolute left-[64%] top-[220px] hidden origin-top-left rotate-90 text-[17vw] font-bold leading-none tracking-[-0.06em] text-charcoal-ink lg:block lg:text-[230px]"
          >
          De
          </motion.div>

          {/* 3. "District" Horizontal (Ubicado en la parte inferior derecha) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ y: parallaxFast }}
            className="absolute left-[50%] top-[560px] hidden text-[17vw] font-bold leading-none tracking-[-0.06em] text-charcoal-ink lg:block lg:text-[230px]"
          >
          Pablo
          </motion.div>
        </div>

        {/* Subtítulo + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
          className="relative z-20 mt-6 max-w-[380px] lg:mt-8"
        >
          <p className="text-3xl font-bold leading-tight tracking-tight text-charcoal-ink">
          El balcón con la mejor vista de la costanera.
          </p>
          <p className="mt-2 text-lg leading-relaxed text-charcoal-ink/80">
          Un espacio pensado para frenar el tiempo y disfrutar
          </p>
          <div className="mt-6">
            <PillButton size="compact">Reservá tu mesa</PillButton>
          </div>
        </motion.div>

        {/* COMPOSICIÓN DE FOTOS (Desktop) */}
        <div className="hidden lg:block">
          {/* Foto Superior Derecha (Al lado de Design) */}
          {heroPhotos[0] && (
            <motion.img
              src={heroPhotos[0].src}
              alt=""
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
              style={{ y: parallaxSlow }}
              className="absolute right-0 top-[20px] z-0 h-[500px] w-[500px] object-cover"
            />
          )}

          {/* Foto Inferior Izquierda (Debajo del texto secundario) */}
          {heroPhotos[1] && (
            <motion.img
              src={heroPhotos[1].src}
              alt=""
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              style={{ y: parallaxSlow }}
              className="absolute top-[480px] z-0 h-[390px] w-[520px] object-cover"
            />
          )}
        </div>
      </div>

      {/* Grid Móvil / Tablet */}
      <div className="mt-10 grid grid-cols-2 gap-4 lg:hidden">
        {heroPhotos.map((photo, i) => (
          <motion.img
            key={photo.id || i}
            src={photo.src}
            alt=""
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
            className={`aspect-[4/5] w-full object-cover ${i === 0 ? 'col-span-2' : ''}`}
          />
        ))}
      </div>
    </section>
  )
}