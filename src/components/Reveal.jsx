import { motion, useReducedMotion } from 'framer-motion'

const revealTransition = {
  duration: 0.58,
  ease: [0.22, 1, 0.36, 1],
}

export default function Reveal({ children, className = '', delay = 0, y = 22 }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.16, margin: '0px 0px -36px 0px' }}
      transition={{ ...revealTransition, duration: reduceMotion ? 0 : revealTransition.duration, delay: reduceMotion ? 0 : delay }}
    >
      {children}
    </motion.div>
  )
}
