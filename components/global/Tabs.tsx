import React, { useEffect, useRef } from 'react'
import { ITabs } from '~/interfaces'
import cn from 'classnames'

type Props = {
  tabs: ITabs[]
}

const Tabs: React.FC<Props> = ({ tabs }) => {
  const renderTabs = tabs.map((tab: ITabs, index: number) => {
    return (
      <React.Fragment key={`${tab.id}${index}${tab.title}`}>
        <div className="w-full">
          <button
            className={cn(
              'outline-none focus:outline-none bg-transparent h-10 flex items-center md:justify-start justify-center font-sf-mono md:pl-6 md:pr-0 px-6 truncate md:py-0 py-8 md:w-auto w-full md:text-left text-center',
              {
                'text-primary md:border-l md:border-l-primary md:border-b-0 border-b border-b-primary':
                  tab.isActive,
                'text-secondary': !tab.isActive,
              },
            )}
            onClick={() => tab.onTabClick && tab.onTabClick(tab.step)}
          >
            {tab.title}
          </button>
        </div>
      </React.Fragment>
    )
  })

  return (
    <>
      <div className="md:h-[200px] md:w-[200px] w-full flex flex-wrap md:border-l md:border-l-[#233554] md:border-b-0 border-b border-b-[#233554] relative overflow-x-auto tab-scrollbar">
        <div className="w-full flex md:flex-wrap items-start">{renderTabs}</div>
      </div>
    </>
  )
}

export default Tabs
