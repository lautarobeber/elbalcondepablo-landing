import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronDown } from 'lucide-react'
import LeafBackground, { navbarLeaves } from './LeafBackground'
import logo from '../assets/logo.jfif'

// Usamos las variantes de texto del diseño de referencia para el menú desplegable
const menuLinks = [
  { label: 'El Balcón de Pedro', href: '#top' },
  { label: 'La Cocina', href: '#menu' },
  { label: 'Visítanos', href: '#contacto' }
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Link de WhatsApp (reemplazar con el número real de El Balcón de Pedro)
  const whatsAppLink = "https://wa.me/34XXXXXXXXX?text=Hola,%20quisiera%20reservar%20una%20mesa"

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }} // Ease out más suave
        className="relative isolate z-40 w-full overflow-hidden bg-paper-white"
      >
        <LeafBackground leaves={navbarLeaves} />

        <div className="mx-auto grid max-w-[1200px] grid-cols-3 items-center px-[20px] py-[20px] lg:px-[40px] lg:py-[30px]">
          
          {/* LADO IZQUIERDO: Selector de Idioma (como en la referencia) */}
          <div className="flex items-center gap-[15px]">
            <span className="text-caption font-medium text-stone-600">ES</span>
            <span className="text-caption font-normal text-stone-400">EN</span>
            {/* <button
              type="button"
              className="hidden items-center gap-[4px] text-caption text-charcoal-ink sm:flex"
            >
              Idioma <ChevronDown size={14} strokeWidth={1.5} />
            </button> */}
          </div>

          {/* LADO CENTRAL: Logo (como en la referencia) */}
          <div className="flex justify-center">
            <a href="#top" className="flex items-center">
              <img
                src={logo}
                alt="El Balcón de Pedro Logo"
                className="h-[50px] w-auto object-contain lg:h-[65px]"
              />
            </a>
          </div>

          {/* LADO DERECHO: Botones de Acción y Menú ≡ (como en la referencia) */}
          <div className="flex items-center justify-end gap-[10px]">
            {/* Ocultos en mobile */}
            <div className="hidden items-center gap-[10px] sm:flex">
              <a href="#menu" className="text-caption uppercase tracking-wider text-stone-600 hover:text-charcoal-ink">
                Menú
              </a>
              <a href={whatsAppLink} target="_blank" rel="noopener noreferrer" className="text-caption uppercase tracking-wider text-stone-600 hover:text-charcoal-ink">
                Reservar
              </a>
            </div>

            {/* Menú burguer con ≡ (como en la referencia) */}
            <button
              onClick={() => setMenuOpen(true)}
              className="flex h-[40px] w-[40px] items-center justify-center rounded-full text-heading-xs text-charcoal-ink hover:bg-stone-100 lg:h-[45px] lg:w-[45px]"
            >
              ≡
            </button>
          </div>
        </div>
      </motion.header>

      {/* MENÚ DESPLEGABLE TIPO CORTINA (Como en el Navbar original) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }} // Easings originales
            className="fixed inset-0 z-50 bg-charcoal-ink text-paper-white"
          >
            <div className="mx-auto flex h-full max-w-[1200px] flex-col px-[20px] py-[25px] lg:px-[40px] lg:py-[35px]">
              {/* Header del menú */}
              <div className="flex items-center justify-between">
                <a href="#top" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
                  <img src={logo} alt="El Balcón de Pedro Logo" className="h-[40px] w-auto brightness-0 invert" />
                </a>
                <button
                  type="button"
                  aria-label="Cerrar"
                  onClick={() => setMenuOpen(false)}
                  className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-paper-white"
                >
                  <X size={18} strokeWidth={1.5} />
                </button>
              </div>

              {/* Links de navegación (como en el Navbar original) */}
              <nav className="flex flex-1 flex-col justify-center gap-[10px] lg:gap-[16px]">
                {menuLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 24 }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.06, ease: 'easeOut' }} // Delays originales
                    onClick={() => setMenuOpen(false)}
                    className="text-heading-sm font-serif font-medium leading-[1.05] tracking-[-0.02em] text-paper-white hover:text-amber-300 lg:text-heading-lg"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              {/* Footer del menú */}
              <div className="flex items-center justify-between pt-[20px] border-t border-pewter/20">
                <p className="text-caption text-pewter">© 2026 El Balcón de Pedro, Gualeguaychú</p>
                <div className="flex gap-[15px] text-caption text-pewter">
                  <a href={whatsAppLink} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                  <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}