import React from 'react'
import SectionContainer from '@/components/global/SectionContainer'
import SectionHeading from '@/components/global/SectionHeading'
import FeaturedProjectCard from '@/components/global/FeaturedProjectCard'
import { IFeatureProjectCard } from '~/interfaces'

const WorkSection: React.FC = () => {
  const featureProjectCards: IFeatureProjectCard[] = [
    {
      id: 1,
      projectTitle: 'GetHired AI',
      projectDesc:
        'A web app that uses Artificial Intelligence to find the best talent for the clients based on their demands. The frontend is developed using React, NextJS, TailwindCSS, Typescript and Redux',
      projectTechStack: [
        'React',
        'NextJS',
        'TailwindCSS',
        'Typescript',
        'Redux',
      ],
      projectSnapShot: '/img/gethired.png',
      projectUrl: 'https://gethired-company.softsons.com',
      githubRepo: 'https://github.com/waleedalikhan/gethired-company',
      isRtl: true,
    },
    {
      id: 2,
      projectTitle: 'DigitsLaw',
      projectDesc:
        'An all-in-one law practice software that allows lawyers around the globe practice their cases, deal with their clients, calculate the time they spend on their cases and much more facilities. The frontend was developed using NextJS, Typescript, TailwindCSS and React Context. The api integration was done using axios (RESTapi)',
      projectTechStack: [
        'React',
        'NextJS',
        'TailwindCSS',
        'Typescript',
        'Axios',
      ],
      projectSnapShot: '/img/digitslaw.png',
      projectUrl: 'https://www.digitslaw.com/',
      isRtl: false,
    },
    {
      id: 3,
      projectTitle: 'DreamsEngine',
      projectDesc:
        'A Web-app showing the information of a well-known company called DreamsEngine, located in Mexico and USA. The frontend was developed using NextJS, TailwindCSS, Typescript and GSAP was used for the animations',
      projectTechStack: [
        'React',
        'NextJS',
        'TailwindCSS',
        'Typescript',
        'GSAP',
      ],
      projectSnapShot: '/img/dreamsengine.png',
      projectUrl: 'https://www.dreamsengine.com/',
      isRtl: true,
    },
  ]

  const renderFeatureProjectCards = featureProjectCards.map(
    (project: IFeatureProjectCard, index: number) => {
      return (
        <React.Fragment key={`${project.id}${project.projectTitle}${index}`}>
          <div className="w-full" data-aos="fade-down" data-aos-duration="500">
            <FeaturedProjectCard
              projectTitle={project.projectTitle}
              projectDesc={project.projectDesc}
              projectTechStack={project.projectTechStack}
              projectSnapShot={project.projectSnapShot}
              projectUrl={project.projectUrl}
              githubRepo={project.githubRepo}
              isRtl={project.isRtl}
            />
          </div>
        </React.Fragment>
      )
    },
  )

  return (
    <SectionContainer
      id="work"
      className="[align-items:start!important] [min-height:100%!important]"
    >
      <div className="mx-auto xl:w-[1000px] lg:w-[950px]">
        <div
          className="mb-10 sm:w-[640px]"
          data-aos="fade-down"
          data-aos-duration="500"
        >
          <SectionHeading
            headingCounter="03"
            headingText="Some Things I've Built"
          />
        </div>
        <div className="flex flex-wrap">{renderFeatureProjectCards}</div>
      </div>
    </SectionContainer>
  )
}

export default WorkSection
