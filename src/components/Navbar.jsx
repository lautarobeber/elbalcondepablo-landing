import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Search, X } from 'lucide-react'
import PillButton from './PillButton'
import logo from '../assets/logo.jfif'
const menuLinks = ['Journaal', 'Interviews', 'Architectuur', 'Agenda', 'Over ons']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-40 w-full bg-paper-white"
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-[20px] py-[25px] lg:px-[40px] lg:py-[35px]">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={logo}
              alt="El Balcón de Pedro Logo"
              className="h-[45px] w-auto object-contain lg:h-[55px]"
            />
            {/* Opcional: Si querés mantener el texto al lado de la foto */}
            {/* <span className="text-caption leading-[1.15] text-charcoal-ink font-bold">
              El Balcón<br />de Pedro
            </span> */}
          </a>

          <div className="flex items-center gap-[12px]">
            <button
              type="button"
              className="hidden items-center gap-[6px] rounded-full border border-charcoal-ink px-[12px] py-[8px] text-caption text-charcoal-ink sm:flex"
            >
              NL <ChevronDown size={14} strokeWidth={1.5} />
            </button>

            <button
              type="button"
              aria-label="Zoeken"
              className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-charcoal-ink text-charcoal-ink"
            >
              <Search size={16} strokeWidth={1.5} />
            </button>

            <PillButton size="compact" onClick={() => setMenuOpen(true)}>
              Menu ≡
            </PillButton>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-charcoal-ink text-paper-white"
          >
            <div className="mx-auto flex h-full max-w-[1200px] flex-col px-[20px] py-[25px] lg:px-[40px] lg:py-[35px]">
              <div className="flex items-center justify-between">
                <span className="text-caption leading-[1.15]">
                  Eindhoven
                  <br />
                  Design District
                </span>
                <button
                  type="button"
                  aria-label="Sluiten"
                  onClick={() => setMenuOpen(false)}
                  className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-paper-white"
                >
                  <X size={18} strokeWidth={1.5} />
                </button>
              </div>

              <nav className="flex flex-1 flex-col justify-center gap-[10px] lg:gap-[16px]">
                {menuLinks.map((link, i) => (
                  <motion.a
                    key={link}
                    href="#"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.06, ease: 'easeOut' }}
                    className="text-heading-sm font-normal leading-[1.05] tracking-[-0.02em] text-paper-white"
                  >
                    {link}
                  </motion.a>
                ))}
              </nav>

              <p className="text-caption text-pewter">© 2026 Eindhoven Design District</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
