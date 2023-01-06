import React from 'react'

type Props = {
  headingCounter?: string
  headingText?: string
}

const SectionHeading: React.FC<Props> = ({ headingCounter, headingText }) => {
  return (
    <>
      <div className="flex items-center sm:w-auto w-full">
        <div className="-mt-2">
          <p className="sm:text-xl text-sm text-primary font-sf-mono">
            {headingCounter}.
          </p>
        </div>
        <div className="sm:ml-3 ml-1 sm:mr-7 mr-4">
          <p className="sm:text-[32px] text-2xl text-heading font-calibreSemibold">
            {headingText}
          </p>
        </div>
        <div className="h-[0.5px] -mt-2 md:w-[300px] flex-1 bg-[#233554]"></div>
      </div>
    </>
  )
}

export default SectionHeading
