import React from 'react'
import SectionContainer from '@/components/global/SectionContainer'
import SectionHeading from '@/components/global/SectionHeading'

const AboutSection: React.FC = () => {
  const skills: string[] = [
    'HTML5',
    'CSS3',
    'SASS/SCSS',
    'JavaScript (ES6+)',
    'Typescript',
    'ReactJS',
    'VueJS',
    'NextJS',
    'NuxtJS',
    'TailwindCSS',
    'Bootstrap5',
    'Vuetify',
    'ReactStrap',
    'MaterialUI',
    'Redux',
    'Vuex',
    'React-Router',
    'Vue-Router',
    'Figma',
    'AdobeXD',
    'AdobeAI',
    'AdobePS',
  ]

  const renderSkills = skills.map((skill: string, index: number) => {
    return (
      <React.Fragment key={`${skill}${index}`}>
        <div className="arrow-indicator pl-5">
          <p className="text-[13px] font-sf-mono text-secondary">{skill}</p>
        </div>
      </React.Fragment>
    )
  })

  return (
    <>
      <SectionContainer
        id="about"
        className="[min-height:70vh!important] md:my-40 my-20"
      >
        <div data-aos="fade-down" data-aos-duration="500">
          <div className="mb-10 flex">
            <SectionHeading headingCounter="01" headingText="About Me" />
          </div>
          <div className="flex items-start lg:flex-nowrap flex-wrap">
            <div className="lg:w-[510px] w-full">
              <p className="font-calibreRegular text-secondary text-xl">
                Hello! My name is Waleed Ali Khan and I enjoy creating things
                that live on the internet. My interest in web development
                started back in 2017 when I decided to create a small form ——
                turns out hacking together a custom submit button taught me a
                lot about HTML & CSS! <br /> <br /> After that I started to dive
                deeper into the sea of technologies and learned plenty of
                technologies like React, Next, Vue, Nuxt, TailwindCSS, SASS,
                Redux, Vuex, React-Router, Vue-Router, BootStrap. Still learning
                daily! <br /> <br /> Fast forward to today, I&apos;ve had the
                privilege of working at <br />
                <a
                  href="https://gentwo.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary line-hover"
                >
                  an investment company
                </a>
                ,{' '}
                <a
                  href="https://digitslaw.com"
                  className="text-primary line-hover"
                  target="_blank"
                  rel="noreferrer"
                >
                  a lawyer practicing software
                </a>{' '}
                and an{' '}
                <a
                  href="https://gethired-company.softsons.com"
                  className="text-primary line-hover z-10"
                  target="_blank"
                  rel="noreferrer"
                >
                  artificial hiring company
                </a>
                .
              </p>
            </div>
            <div className="sm:w-[300px] w-[250px] sm:h-[300px] h-[250px] rounded-lg lg:ml-10 relative after:border-4 after:border-primary after:transform after:translate-x-5 after:rounded-lg after:translate-y-5 after:transition-all after:ease-in-out after:duration-300 after:w-full after:h-full after:absolute after:top-0 after:z-[-1] hover:after:translate-x-3 hover:after:translate-y-3 lg:my-0 my-10">
              <div className="bg-primary rounded-lg absolute inset-0 z-10 w-full h-full opacity-60 hover:opacity-0 transition-all ease-in-out duration-300"></div>
              <img
                src="/img/about-pic.jpeg"
                alt=""
                className="h-full w-full object-cover rounded-lg filter"
              />
            </div>
          </div>
          <br />
          <div className="flex flex-wrap">
            <div className="w-full mb-5">
              <p className="text-secondary font-calibreRegular text-xl">
                Here are a few technologies I&apos;ve been working with
                recently:
              </p>
            </div>
            <div className="w-full grid md:grid-cols-3 grid-cols-2 gap-[10px]">
              {renderSkills}
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  )
}

export default AboutSection
