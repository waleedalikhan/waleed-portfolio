import React, { useEffect, useState } from 'react'
import Tabs from '@/components/global/Tabs'
import { ITabs } from '~/interfaces'

const VerticalTabs: React.FC = () => {
  let [steps, setSteps] = useState<number>(1)
  let [isMob, setIsMob] = useState<boolean>(false)

  let [tabs, setTabs] = useState<ITabs[]>([
    {
      id: 1,
      title: 'Upwork',
      step: 1,
      isActive: true,
      onTabClick(step) {
        setSteps((steps = step))
        changeActiveTab(step - 1)
      },
    },
    {
      id: 2,
      title: 'Dreams Engine',
      step: 2,
      isActive: false,
      onTabClick(step) {
        setSteps((steps = step))
        changeActiveTab(step - 1)
      },
    },
    {
      id: 3,
      title: 'DigitsLaw',
      step: 3,
      isActive: false,
      onTabClick(step) {
        setSteps((steps = step))
        changeActiveTab(step - 1)
      },
    },
    {
      id: 4,
      title: 'GetHired AI',
      step: 4,
      isActive: false,
      onTabClick(step) {
        setSteps((steps = step))
        changeActiveTab(step - 1)
      },
    },
  ])

  const changeActiveTab = (index: number) => {
    let updatedTabs: ITabs[] = [...tabs]
    updatedTabs.forEach((tab: ITabs) => (tab.isActive = false))
    updatedTabs[index].isActive = true
    setTabs((tabs = updatedTabs))
  }

  useEffect(() => {
    if (window.innerWidth < 850) {
      setIsMob((isMob = true))
    } else {
      setIsMob((isMob = false))
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth < 850) {
        setIsMob((isMob = true))
      } else {
        setIsMob((isMob = false))
      }
    })

    return () => {
      window.removeEventListener('resize', () => {
        if (window.innerWidth < 850) {
          setIsMob((isMob = true))
        } else {
          setIsMob((isMob = false))
        }
      })
    }
  }, [])

  const renderTabPanels = () => {
    switch (steps) {
      case 1:
        return (
          <>
            <div className="flex flex-wrap">
              <div className="w-full">
                <h1 className="text-heading font-calibreMedium text-[22px]">
                  Frontend Developer <span className="text-primary">@</span>{' '}
                  <a
                    href="https://www.upwork.com/freelancers/~0151f0bae5953bf61a"
                    target="_blank"
                    className="text-primary line-hover"
                    rel="noreferrer"
                  >
                    Upwork
                  </a>{' '}
                </h1>
              </div>
              <div className="w-full mb-6">
                <p className="font-sf-mono text-[13px] text-secondary">
                  January 2021 - Present
                </p>
              </div>
              <div className="flex flex-wrap md:w-[535px] w-full">
                <div>
                  <p className="font-calibreRegular text-lg text-secondary arrow-indicator sm:pl-6 sm:before:left-[0_!important] before:left-[-20px] before:top-2 before:text-[20px]">
                    Communicate with multi-disciplinary teams of engineers,
                    designers, producers, and clients on a daily basis
                  </p>
                </div>
                <div className="my-4">
                  <p className="font-calibreRegular text-lg text-secondary arrow-indicator sm:pl-6 sm:before:left-[0_!important] before:left-[-20px] before:top-2 before:text-[20px]">
                    Work with a variety of different languages, platforms,
                    frameworks, and content management systems such as
                    JavaScript, Typescript, NextJS, React, Vue, Nuxt, Netlify
                    and Vercel
                  </p>
                </div>
                <div>
                  <p className="font-calibreRegular text-lg text-secondary arrow-indicator sm:pl-6 sm:before:left-[0_!important] before:left-[-20px] before:top-2 before:text-[20px]">
                    Write modern, performant, maintainable code for a diverse
                    array of client and internal projects
                  </p>
                </div>
              </div>
            </div>
          </>
        )
      case 2:
        return (
          <>
            <div className="flex flex-wrap">
              <div className="w-full">
                <h1 className="text-heading font-calibreMedium text-[22px]">
                  Frontend Developer <span className="text-primary">@</span>{' '}
                  <a
                    href="https://dreamsengine.com/"
                    target="_blank"
                    className="text-primary line-hover"
                    rel="noreferrer"
                  >
                    DreamsEngine
                  </a>{' '}
                </h1>
              </div>
              <div className="w-full mb-6">
                <p className="font-sf-mono text-[13px] text-secondary">
                  March 2021 - Present
                </p>
              </div>
              <div className="flex flex-wrap md:w-[535px] w-full">
                <div>
                  <p className="font-calibreRegular text-lg text-secondary arrow-indicator sm:pl-6 sm:before:left-[0_!important] before:left-[-20px] before:top-2 before:text-[20px]">
                    Communicate with multi-disciplinary teams of engineers,
                    designers, and clients on a daily basis
                  </p>
                </div>
                <div className="my-4">
                  <p className="font-calibreRegular text-lg text-secondary arrow-indicator sm:pl-6 sm:before:left-[0_!important] before:left-[-20px] before:top-2 before:text-[20px]">
                    Working as a senior frontend developer having to deal with
                    projects that contain NextJS, ReactJS, TailwindCSS, HTML,
                    CSS3, SASS/SCSS.
                  </p>
                </div>
                <div>
                  <p className="font-calibreRegular text-lg text-secondary arrow-indicator sm:pl-6 sm:before:left-[0_!important] before:left-[-20px] before:top-2 before:text-[20px]">
                    Write modern, performant, maintainable code for a diverse
                    array of client and internal projects
                  </p>
                </div>
              </div>
            </div>
          </>
        )
      case 3:
        return (
          <>
            <div className="flex flex-wrap">
              <div className="w-full">
                <h1 className="text-heading font-calibreMedium text-[22px]">
                  Frontend Developer <span className="text-primary">@</span>{' '}
                  <a
                    href="https://www.digitslaw.com"
                    target="_blank"
                    className="text-primary line-hover"
                    rel="noreferrer"
                  >
                    DigitsLaw
                  </a>{' '}
                </h1>
              </div>
              <div className="w-full mb-6">
                <p className="font-sf-mono text-[13px] text-secondary">
                  June 2022 - September 2022
                </p>
              </div>
              <div className="flex flex-wrap md:w-[535px] w-full">
                <div>
                  <p className="font-calibreRegular text-lg text-secondary arrow-indicator sm:pl-6 sm:before:left-[0_!important] before:left-[-20px] before:top-2 before:text-[20px]">
                    Communicate with multi-disciplinary teams of engineers,
                    designers, and clients on a daily basis
                  </p>
                </div>
                <div className="my-4">
                  <p className="font-calibreRegular text-lg text-secondary arrow-indicator sm:pl-6 sm:before:left-[0_!important] before:left-[-20px] before:top-2 before:text-[20px]">
                    Worked as a team member having to deal with major frontend
                    tasks.
                  </p>
                </div>
                <div>
                  <p className="font-calibreRegular text-lg text-secondary arrow-indicator sm:pl-6 sm:before:left-[0_!important] before:left-[-20px] before:top-2 before:text-[20px]">
                    Write modern, performant, maintainable code for a diverse
                    array of client and internal projects
                  </p>
                </div>
              </div>
            </div>
          </>
        )
      case 4:
        return (
          <>
            <div className="flex flex-wrap">
              <div className="w-full">
                <h1 className="text-heading font-calibreMedium text-[22px]">
                  Frontend Developer <span className="text-primary">@</span>{' '}
                  <a
                    href="https://gethired-company.softsons.com"
                    target="_blank"
                    className="text-primary line-hover"
                    rel="noreferrer"
                  >
                    GetHired
                  </a>{' '}
                </h1>
              </div>
              <div className="w-full mb-6">
                <p className="font-sf-mono text-[13px] text-secondary">
                  Jan 2021 - October 2021
                </p>
              </div>
              <div className="flex flex-wrap md:w-[535px] w-full">
                <div>
                  <p className="font-calibreRegular text-lg text-secondary arrow-indicator sm:pl-6 sm:before:left-[0_!important] before:left-[-20px] before:top-2 before:text-[20px]">
                    Communicated with a well-known and highly understandable
                    client along with an expert Web Designer.
                  </p>
                </div>
                <div className="my-4">
                  <p className="font-calibreRegular text-lg text-secondary arrow-indicator sm:pl-6 sm:before:left-[0_!important] before:left-[-20px] before:top-2 before:text-[20px]">
                    Worked as a Senior and only Frontend developer to develop
                    the whole frontend of the website using NextJS, ReactJS,
                    TailwindCSS, Typescript and Redux
                  </p>
                </div>
                <div>
                  <p className="font-calibreRegular text-lg text-secondary arrow-indicator sm:pl-6 sm:before:left-[0_!important] before:left-[-20px] before:top-2 before:text-[20px]">
                    Write modern, performant, maintainable code for a diverse
                    array of client and internal projects
                  </p>
                </div>
              </div>
            </div>
          </>
        )
      default:
        return (
          <>
            <div className="flex flex-wrap">
              <div className="w-full">
                <h1 className="text-heading font-calibreMedium text-[22px]">
                  Frontend Developer <span className="text-primary">@</span>{' '}
                  <a
                    href="https://www.upwork.com/freelancers/~0151f0bae5953bf61a"
                    target="_blank"
                    className="text-primary line-hover"
                    rel="noreferrer"
                  >
                    Upwork
                  </a>{' '}
                </h1>
              </div>
              <div className="w-full mb-6">
                <p className="font-sf-mono text-[13px] text-secondary">
                  January 2021 - Present
                </p>
              </div>
              <div className="flex flex-wrap md:w-[535px] w-full">
                <div>
                  <p className="font-calibreRegular text-lg text-secondary arrow-indicator sm:pl-6 sm:before:left-[0_!important] before:left-[-20px] before:top-2 before:text-[20px]">
                    Communicate with multi-disciplinary teams of engineers,
                    designers, producers, and clients on a daily basis
                  </p>
                </div>
                <div className="my-4">
                  <p className="font-calibreRegular text-lg text-secondary arrow-indicator sm:pl-6 sm:before:left-[0_!important] before:left-[-20px] before:top-2 before:text-[20px]">
                    Work with a variety of different languages, platforms,
                    frameworks, and content management systems such as
                    JavaScript, Typescript, NextJS, React, Vue, Nuxt, Netlify
                    and Vercel
                  </p>
                </div>
                <div>
                  <p className="font-calibreRegular text-lg text-secondary arrow-indicator sm:pl-6 sm:before:left-[0_!important] before:left-[-20px] before:top-2 before:text-[20px]">
                    Write modern, performant, maintainable code for a diverse
                    array of client and internal projects
                  </p>
                </div>
              </div>
            </div>
          </>
        )
    }
  }

  return (
    <div className="flex-grow md:flex block overflow-hidden">
      <div className="flex md:flex-nowrap flex-wrap">
        <Tabs tabs={tabs} />
        <div className="flex-1 md:w-auto w-full md:mt-0 mt-10 md:h-[320px]">
          {renderTabPanels()}
        </div>
      </div>
    </div>
  )
}

export default VerticalTabs
