import React from 'react'
import SectionContainer from '@/components/global/SectionContainer'
import AnimatedTextCharacter from '@/components/global/AnimatedTextCharacter'

const HomeSection: React.FC = () => {
  return (
    <>
      <SectionContainer id="home">
        <div>
          <AnimatedTextCharacter
            text="Hi, my name is"
            delayDuration={0.8}
            childClassName="font-sf-mono text-primary"
          />
          <AnimatedTextCharacter
            text="Waleed Ali Khan."
            delayDuration={1}
            childClassName="lg:text-[80px] md:text-[61.44px] text-[40px] font-calibreSemibold text-[rgb(204,_214,_246)] leading-tight"
          />
          <AnimatedTextCharacter
            text="I build things for the web"
            delayDuration={1.2}
            childClassName="lg:text-[80px] md:text-[61.44px] text-[40px] font-calibreSemibold text-[rgb(136,_146,_176)] leading-none"
          />
          <div
            className="md:w-[520px] w-full mt-5"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="2800"
          >
            <p className="sm:text-xl text-lg font-calibreRegular text-secondary">
              I&apos;m a software engineer specializing in building (and
              occasionally designing) exceptional digital experiences.
              Currently, I&apos;m focused on building accessible, human-centered
              products at{' '}
              <a
                href="https://www.upwork.com/freelancers/~0151f0bae5953bf61a"
                className="text-primary line-hover"
                target="_blank"
                rel="noreferrer"
              >
                Upwork
              </a>
            </p>
          </div>
        </div>
      </SectionContainer>
    </>
  )
}

export default HomeSection
