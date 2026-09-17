import { motion } from 'framer-motion'

export default function ArticleCard({ article, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
      className="group cursor-pointer bg-paper-white"
    >
      <div className="overflow-hidden">
        <motion.img
          src={article.image}
          alt={article.title}
          className="aspect-[4/5] w-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>

      <div className="px-[20px] py-[20px]">
        <p className="text-caption font-normal tracking-caption text-signal-red">{article.label}</p>
        <h3 className="mt-[8px] text-[19px] font-semibold leading-[1.2] text-charcoal-ink">
          {article.title}
        </h3>
        <p className="mt-[10px] line-clamp-3 text-body-sm leading-body-sm tracking-body-sm text-charcoal-ink">
          {article.excerpt}
        </p>
      </div>
    </motion.article>
  )
}
