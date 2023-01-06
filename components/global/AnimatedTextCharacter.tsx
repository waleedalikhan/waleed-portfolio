import React from 'react'
import { motion } from 'framer-motion'
import cn from 'classnames'

type Props = {
  text: string
  delayDuration?: number
  childClassName?: any
}

const AnimatedTextCharacter: React.FC<Props> = ({
  text,
  delayDuration = 0.04,
  childClassName,
}) => {
  const letters = Array.from(text)

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delayDuration * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 10,
      y: -40,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      style={{
        overflow: 'hidden',
        display: 'flex',
      }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          variants={child}
          key={index}
          className={cn(childClassName)}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default AnimatedTextCharacter
