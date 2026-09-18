import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import PillButton from './PillButton'
import LeafBackground, { heroLeaves } from './LeafBackground'
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
      className="relative isolate w-full overflow-hidden bg-paper-white px-4 pt-4 pb-20 lg:px-10"
    >
      <LeafBackground leaves={heroLeaves} />

      <div className="relative mx-auto min-h-[90vh] max-w-[1500px]">
        
        {/* =========================================
            VERSIÓN ESCRITORIO (Diseño Original)
        ========================================= */}
        <div className="hidden lg:block">
          <div className="relative z-10 select-none">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="-ml-4 text-[230px] font-bold leading-[0.8] tracking-[-0.06em] text-charcoal-ink"
            >
              El Balcón
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ y: parallaxSlow }}
              className="absolute left-[64%] top-[220px] origin-top-left rotate-90 text-[230px] font-bold leading-none tracking-[-0.06em] text-charcoal-ink"
            >
              De
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ y: parallaxFast }}
              className="absolute left-[50%] top-[560px] text-[230px] font-bold leading-none tracking-[-0.06em] text-charcoal-ink"
            >
              Pablo
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
            className="relative z-20 mt-8 max-w-[380px]"
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

        {/* =========================================
            VERSIÓN MÓVIL (Corrección de superposición)
        ========================================= */}
        <div className="block lg:hidden relative h-[90vh] min-h-[650px] w-full mt-4 select-none">
          
          {/* Foto Superior Izquierda (Ocupa hasta el 35% del alto) */}
          {heroPhotos[0] && (
            <motion.img
              src={heroPhotos[0].src}
              alt=""
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="absolute top-0 left-0 w-[60%] h-[35vh] object-cover z-10"
            />
          )}

          {/* Letra de Fondo: El Balcón (z-0) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-0 right-[45px] md:right-[105px] text-[18vw] md:text-[16vw] font-bold leading-[0.8] tracking-[-0.06em] text-charcoal-ink z-0"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            El Balcón
          </motion.div>

          {/* Subtítulo + Botón (Z-30 PARA ASEGURAR QUE SE LEA Y SE PUEDA CLICKEAR) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute top-[38vh] left-0 w-[75%] z-30 pr-4"
          >
            <p className="pl-6 text-[24px] font-bold leading-[1.1] tracking-tight text-charcoal-ink">
              El balcón con la mejor vista.
            </p>
            <div className="pl-6 mt-4">
              <PillButton size="compact">Reservá tu mesa</PillButton>
            </div>
          </motion.div>

          {/* Letra de Fondo: De (z-0) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-[22vh] md:bottom-[28vh] left-[20%] text-[14vw] font-bold leading-[0.75] tracking-[-0.06em] text-charcoal-ink z-0"
          >
            <div className="rotate-180">De</div>
          </motion.div>

          {/* Letra de Fondo: Pablo (z-0) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="absolute bottom-0 left-[20px] text-[18vw] font-bold leading-[0.8] tracking-[-0.06em] text-charcoal-ink z-0"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
          >
            Pablo
          </motion.div>

          {/* Foto Inferior Derecha (Z-10) */}
          {heroPhotos[1] && (
            <motion.img
              src={heroPhotos[1].src}
              alt=""
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute bottom-35 right-0 w-[55%] h-[25vh] object-cover z-10"
            />
          )}
        </div>

      </div>
    </section>
  )
}