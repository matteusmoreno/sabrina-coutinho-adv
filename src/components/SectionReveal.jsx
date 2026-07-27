import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: [0.2, 0.65, 0.3, 1],
    },
  },
}

function SectionReveal({ children, className, as = 'section', ...props }) {
  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={variants}
      {...props}
    >
      {children}
    </MotionTag>
  )
}

export default SectionReveal