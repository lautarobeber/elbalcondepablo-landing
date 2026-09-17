import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

const variants = {
  ghost: 'bg-paper-white text-charcoal-ink border border-charcoal-ink',
  filled: 'bg-charcoal-ink text-paper-white border border-charcoal-ink',
}

const sizes = {
  compact: 'px-[15px] py-[10px] text-[16px]',
  standard: 'px-[20px] py-[16px] text-[16px]',
}

export default function PillButton({
  children,
  variant = 'ghost',
  size = 'compact',
  as = 'button',
  className,
  ...props
}) {
  const Component = motion[as] ?? motion.button

  return (
    <Component
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 420, damping: 24 }}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-full font-normal font-semibold tracking-[0.005em] leading-none cursor-pointer select-none hover:bg-black hover:text-white',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
