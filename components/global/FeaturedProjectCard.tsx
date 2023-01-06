import React from 'react'
import cn from 'classnames'
import { GithubIcon, RedirectIcon } from '@/components/global/icons'

type Props = {
  projectTitle?: string
  projectDesc?: string
  projectTechStack: string[]
  githubRepo?: string
  projectUrl?: string
  isRtl?: boolean
  projectSnapShot?: string
}

const FeaturedProjectCard: React.FC<Props> = ({
  projectTitle,
  projectDesc,
  projectTechStack,
  githubRepo,
  projectUrl,
  isRtl,
  projectSnapShot,
}) => {
  const renderProjectTechStack = projectTechStack.map(
    (skill: string, index: number) => {
      return (
        <React.Fragment key={`${skill}${index}`}>
          <p className="text-[13px] font-sf-mono text-secondary sm:mr-0 mr-4 sm:mb-0 mb-2">
            {skill}
          </p>
        </React.Fragment>
      )
    },
  )

  return (
    <>
      <div className="w-full min-h-[365px] relative flex items-center lg:mb-32 mb-10">
        <div
          className={cn(
            'w-[60%] absolute min-h-[365px] rounded-lg lg:block hidden',
            {
              'left-0': isRtl,
              'right-0': !isRtl,
            },
          )}
        >
          <a
            href={projectUrl}
            target="_blank"
            className='relative h-[365px] w-full lg:before:contents-[""] lg:before:absolute lg:before:w-full lg:before:h-full lg:before:inset-0 lg:before:bg-primary lg:before:bg-opacity-70 lg:before:transition-all lg:before:ease-in-out lg:before:duration-300 hover:lg:before:bg-opacity-0 rounded-lg lg:before:rounded-lg'
            rel="noreferrer"
          >
            <img
              src={projectSnapShot}
              alt=""
              className="w-full h-[365px] rounded-lg object-cover"
            />
          </a>
        </div>
        <div
          className={cn(
            'flex flex-wrap xl:w-1/2 lg:w-2/3 w-full relative z-10 lg:h-auto h-full lg:bg-transparent bg-dark bg-opacity-95 lg:p-0 p-6',
            {
              'lg:ml-auto lg:justify-end': isRtl,
              'mr-auto justify-start': !isRtl,
            },
          )}
        >
          <div
            className={cn('w-full', {
              'lg:text-right': isRtl,
              'text-left': !isRtl,
            })}
          >
            <p className="text-[13px] font-sf-mono text-primary">
              Featured Project
            </p>
          </div>
          <div
            className={cn('w-full mt-2 mb-6 lg:mb-5', {
              'lg:text-right': isRtl,
              'text-left': !isRtl,
            })}
          >
            <a
              href="https://gethired-company.softsons.com"
              target="_blank"
              className="text-[28px] font-calibreSemibold text-heading transition-all ease-in-out duration-300 hover:text-primary"
              rel="noreferrer"
            >
              {projectTitle}
            </a>
          </div>
          <div
            className={cn('lg:bg-dark rounded-lg lg:p-6 sm:mb-4 mb-8', {
              'lg:text-right': isRtl,
              'text-left': !isRtl,
            })}
          >
            <p className="text-secondary text-lg font-calibreRegular">
              {projectDesc}
            </p>
          </div>
          <div className="flex flex-wrap sm:space-x-4 items-center mb-5">
            {renderProjectTechStack}
          </div>
          <div
            className={cn('flex space-x-4 w-full', {
              'lg:justify-end': isRtl,
              'justify-start': !isRtl,
            })}
          >
            {githubRepo && (
              <div className="w-7">
                <a
                  href={githubRepo}
                  target="_blank"
                  className="text-heading hover:text-primary transition-all ease-in-out duration-300 cursor-pointer"
                  rel="noreferrer"
                >
                  <GithubIcon />
                </a>
              </div>
            )}
            <div className="w-7">
              <a
                href={projectUrl}
                target="_blank"
                className="text-heading hover:text-primary transition-all ease-in-out duration-300 cursor-pointer"
                rel="noreferrer"
              >
                <RedirectIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturedProjectCard
