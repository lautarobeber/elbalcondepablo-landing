import { motion } from 'framer-motion'
import PillButton from './PillButton'

export default function Manifesto() {
  return (
    <section className="w-full bg-paper-white px-[20px] py-[80px] lg:px-[40px]">
      <div className="mx-auto max-w-[1200px]">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-[820px] text-heading font-normal leading-heading tracking-heading text-charcoal-ink"
        >
          Ontworpen op papier, gedacht in beton.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="mt-[35px]"
        >
          <PillButton variant="filled" size="standard">
            Abonneer je op het journaal
          </PillButton>
        </motion.div>
      </div>
    </section>
  )
}
