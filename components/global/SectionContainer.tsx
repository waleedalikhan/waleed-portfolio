import React from 'react'
import cn from 'classnames'

type Props = {
  id?: any
  className?: any
}

const SectionContainer: React.FC<Props> = ({ children, id, className }) => {
  return (
    <>
      <section
        id={id}
        className={cn(
          'min-h-screen w-full flex items-center justify-center lg:px-0 sm:px-16 px-6 mb-10',
          className,
        )}
      >
        {children}
      </section>
    </>
  )
}

export default SectionContainer
