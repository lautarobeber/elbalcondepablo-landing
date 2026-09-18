import { motion } from 'framer-motion'
import PillButton from './PillButton'
import mesacopas from "../assets/mesacopas.jpg"

// Importamos los SVGs como rutas de imagen estándar
import imgPescados from "../assets/fish.svg"
import imgPastas from "../assets/pasta.svg"
import imgMinutas from "../assets/carne.svg"
import imgBebidas from "../assets/wine.svg"

// Datos de las categorías usando las rutas de los SVGs
const categories = [
  { id: 1, title: 'Pescados y Mariscos', src: imgPescados, alt: 'Pescados y Mariscos' },
  { id: 2, title: 'Pastas Caseras', src: imgPastas, alt: 'Pastas Caseras' },
  { id: 3, title: 'Carnes y Minutas', src: imgMinutas, alt: 'Minutas' },
  { id: 4, title: 'Bebidas y Tragos', src: imgBebidas, alt: 'Bebidas y Tragos' },
]

// Variantes para Framer Motion
const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const cardItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function IntroSection() {
  return (
    <section className="w-full bg-paper-white px-[20px] py-[80px] lg:px-[40px] lg:py-[100px]">
      {/* Contenedor principal con Grid en escritorio */}
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 lg:gap-[60px] items-start">

        {/* COLUMNA IZQUIERDA: Bloque de Texto + CARDS CON SVGs */}
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

          {/* ----- CARDS CON ICONOS SVG ----- */}
          <motion.div
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-[50px] lg:mt-[60px] w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-[12px] lg:gap-[15px]"
          >
            {categories.map((card) => (
              <motion.div
                key={card.id}
                variants={cardItemVariants}
                className="group flex flex-col items-center justify-between aspect-square p-4 bg-stone-100/70 border border-stone-200/60 hover:bg-stone-200/50 transition-all duration-300 rounded-sm cursor-pointer"
              >
                {/* Contenedor del SVG */}
                <div className="flex-1 flex items-center justify-center p-2">
                  <img
                    src={card.src}
                    alt={card.alt}
                    className="h-36 w-36 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                {/* Título de la categoría */}
                <h3 className="text-[12px] font-bold uppercase tracking-wider text-charcoal-ink text-center">
                  {card.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
          {/* ----- FIN CARDS ----- */}
          
        </div>

        {/* COLUMNA DERECHA: Imagen */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="mt-[40px] w-full lg:mt-0 lg:ml-auto lg:max-w-[500px]"
        >
          <img
            src={mesacopas}
            alt="Mesa vestida con copas frente a la ventana"
            className="aspect-[4/3] w-full object-cover shadow-sm lg:aspect-auto lg:h-full"
          />
        </motion.div>

      </div>
    </section>
  )
}