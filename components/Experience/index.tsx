import React from 'react'
import SectionHeading from '@/components/global/SectionHeading'
import VerticalTabs from '@/components/global/VerticalTabView'

const ExperienceSection: React.FC = () => {
  return (
    <>
      <section
        id="experience"
        className="md:my-40 my-20 flex items-center justify-center overflow-hidden 2xl:container mx-auto"
        data-aos="fade-down"
        data-aos-duration="500"
      >
        <div className="flex flex-wrap xl:w-2/3 lg:w-3/4 w-full mx-auto px-6">
          <div className="mb-5">
            <SectionHeading
              headingCounter="02"
              headingText="Where I've Worked"
            />
          </div>
          <div className="w-full">
            <VerticalTabs />
          </div>
        </div>
      </section>
    </>
  )
}

export default ExperienceSection
