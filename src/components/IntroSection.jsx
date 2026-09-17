import { motion } from 'framer-motion'
import PillButton from './PillButton'
import localFuera2 from '../assets/afuera2.jpg'
import localFuera1 from "../assets/afuera1.jpg"
import elbalcon from "../assets/elbalcon.jpg"
export default function IntroSection() {
  return (
    <section className="w-full bg-paper-white px-[20px] py-[80px] lg:px-[40px] lg:py-[100px]">
      {/* Contenedor principal con Grid en escritorio */}
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 lg:gap-[60px] items-start">
        
        {/* COLUMNA IZQUIERDA: Bloque de Texto */}
        <div className="relative z-10 flex flex-col items-start lg:max-w-[660px]">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-heading-sm font-normal leading-heading-sm tracking-heading-sm text-charcoal-ink"
          >
            Tu lugar frente al río, en cualquier época del año.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="mt-[25px] text-body leading-body tracking-body text-charcoal-ink lg:mt-[30px]"
          >
            El Balcón de Pedro combina un entorno natural único sobre la costanera con espacios al aire libre y salones totalmente climatizados. Disfrutá de la mejor vista al agua y una gastronomía pensada para compartir, sin importar el clima.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="mt-[30px] lg:mt-[40px]"
          >
            <PillButton size="standard">Conocé mas de nosotros</PillButton>
          </motion.div>
        </div>

        {/* COLUMNA DERECHA: Imagen con animación de entrada */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="mt-[40px] w-full lg:mt-0 lg:ml-auto lg:max-w-[500px]"
        >
          <img
            src={localFuera1} // Cambia esto por la ruta real
            alt="Eindhoven Design District architecture and makers"
            className="aspect-[4/3] w-full object-cover shadow-sm lg:aspect-auto lg:h-auto"
          />
        </motion.div>
      </div>
    </section>
  )
}