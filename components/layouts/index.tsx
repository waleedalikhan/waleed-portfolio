import React, { useEffect, useState } from 'react'
import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  LogoIcon,
} from '@/components/global/icons'
import cn from 'classnames'
import Link from 'next/link'
// @ts-ignore
import { WhatsAppWidget } from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'
import { IHeaderLinks } from '~/interfaces'

const Layout: React.FC = ({ children }) => {
  const headerLinks: IHeaderLinks[] = [
    {
      id: 1,
      title: 'About',
      href: 'about',
      animationDelay: '200',
    },
    {
      id: 2,
      title: 'Experience',
      href: 'experience',
      animationDelay: '400',
    },
    {
      id: 3,
      title: 'Work',
      href: 'work',
      animationDelay: '600',
    },
    {
      id: 4,
      title: 'Contact',
      href: 'contact',
      animationDelay: '800',
    },
  ]
  let [isScrolled, setIsScrolled] = useState<boolean>(false)
  let [isScrollingDown, setIsScrollingDown] = useState<boolean>(false)
  let [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

  const renderHeaderLinks = headerLinks.map(
    (link: IHeaderLinks, index: number) => {
      return (
        <React.Fragment key={`${link.title}${index}${link.id}`}>
          <Link href={`#${link.href}`}>
            <div
              className="flex lg:flex-nowrap flex-wrap items-center space-x-2 line-hover lg:justify-start justify-center lg:mb-0 mb-5 cursor-pointer"
              onClick={() => setIsSidebarOpen(false)}
              data-aos="fade-down"
              data-aos-duration="500"
              data-aos-delay={link.animationDelay}
            >
              <p className="lg:w-auto w-full lg:text-left text-center">
                <p className="text-primary text-[13px] font-sf-mono">
                  0{index + 1}.
                </p>
              </p>
              <br className="lg:hidden block" />
              <p>
                <p className="font-sf-mono text-navLinkColor lg:text-[13px] text-sm">
                  {link.title}
                </p>
              </p>
            </div>
          </Link>
        </React.Fragment>
      )
    },
  )

  useEffect(() => {
    let oldScrollY = window.scrollY
    if (document.documentElement.scrollTop > 30) {
      setIsScrolled((isScrolled = true))
    } else {
      setIsScrolled((isScrolled = false))
    }
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 30) {
        setIsScrolled((isScrolled = true))
      } else {
        setIsScrolled((isScrolled = false))
      }
      if (oldScrollY < window.scrollY) {
        setIsScrollingDown((isScrollingDown = true))
      } else {
        setIsScrollingDown((isScrollingDown = false))
      }
      oldScrollY = window.scrollY
    })
    return () => {
      window.removeEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 30) {
          setIsScrolled((isScrolled = true))
        } else {
          setIsScrolled((isScrolled = false))
        }
        if (oldScrollY < window.scrollY) {
          setIsScrollingDown((isScrollingDown = true))
        } else {
          setIsScrollingDown((isScrollingDown = false))
        }
        oldScrollY = window.scrollY
      })
    }
  }, [])

  useEffect(() => {
    if (isSidebarOpen) {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    } else {
      document.getElementsByTagName('body')[0].style.overflow = 'auto'
    }
  }, [isSidebarOpen])

  return (
    <>
      <div className="fixed z-[99999999999999999]">
        <WhatsAppWidget
          phoneNumber="+923312447999"
          message="Hey! 👋🏼 How can I help you?"
          companyName="Waleed Ali Khan"
          replyTimeText="Expert Frontend Developer"
          sendButton="Let's Go!"
        />
      </div>
      <header
        className={cn(
          'flex items-center w-full lg:px-20 md:px-10 px-6 fixed left-0 right-0 backdrop-blur-md backdrop-filter z-[999] transition-all ease-in-out duration-300',
          {
            'h-[100px]': !isScrolled,
            'h-[70px] shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)]': isScrolled,
            'top-0': !isScrollingDown,
            '-top-[120px]': isScrollingDown,
          },
        )}
      >
        <nav className="flex items-center justify-between w-full">
          <div data-aos="fade-down" data-aos-duration="500">
            <a
              href="#home"
              className="text-2xl text-primary font-calibreSemibold flex justify-center items-center"
              rel="noreferrer"
            >
              <img src="/logo.svg" alt="" />
            </a>
          </div>
          <div className="lg:flex hidden space-x-10 items-center">
            {renderHeaderLinks}
            <a
              href="/misc/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-primary bg-transparent border border-primary rounded py-3 px-4 font-sf-mono leading-[1] cursor-pointer transition-all ease-in-out duration-300 hover:bg-primary hover:bg-opacity-10"
              data-aos="fade-down"
              data-aos-duration="500"
              data-aos-delay="1000"
            >
              Resume
            </a>
          </div>
          <div className="lg:hidden flex overflow-hidden w-[35px]">
            <button
              className="w-[35px] transition-all ease-in-out duration-300 outline-none focus:outline-none"
              onClick={() => setIsSidebarOpen(true)}
            >
              <p className="transition-all ease-in-out duration-300 ml-auto block h-[3px] w-full bg-primary"></p>
              <p className="transition-all ease-in-out duration-300 ml-auto block h-[3px] w-2/3 my-1 bg-primary"></p>
              <p className="transition-all ease-in-out duration-300 ml-auto block h-[3px] w-1/2 bg-primary"></p>
            </button>
          </div>
        </nav>
      </header>
      <aside
        className={cn(
          'fixed top-0 bottom-0 backdrop-blur-md backdrop-filter z-[999] w-full h-screen transition-all ease-in-out duration-300 lg:hidden block',
          {
            'right-0': isSidebarOpen,
            'right-[-1024px]': !isSidebarOpen,
          },
        )}
      >
        <div className="bg-dark w-[230px] ml-auto h-full flex items-center justify-center relative">
          <button
            className="w-[35px] transition-all ease-in-out duration-300 absolute top-10 right-5 outline-none focus:outline-none"
            onClick={() => setIsSidebarOpen(false)}
          >
            <p className="transition-all ease-in-out duration-300 block h-[3px] w-full bg-primary transform rotate-45 -mb-px -mr-[4px]"></p>
            <p className="transition-all ease-in-out duration-300 block h-[3px] w-full bg-primary transform rotate-[-44deg]"></p>
          </button>
          <div>
            {renderHeaderLinks}
            <div className="w-full flex justify-center -mr-4 mt-8">
              <a
                href="/misc/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-primary bg-transparent border border-primary rounded py-3 px-4 font-sf-mono leading-[1] cursor-pointer transition-all ease-in-out duration-300 hover:bg-primary hover:bg-opacity-10"
                data-aos="fade-down"
                data-aos-duration="500"
                data-aos-delay="1000"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </aside>
      {children}

      <div className="md:block hidden">
        <div className="footer-line fixed z-50 left-10 bottom-0">
          <div className="w-5 mb-5 transform hover:-translate-y-1 transition-all ease-in-out duration-300">
            <a
              href="https://github.com/waleedalikhan"
              className="text-icon-color fill-current stroke-current transition-all ease-in-out duration-300 hover:text-primary"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />
            </a>
          </div>
          <div className="w-5 mb-5 transform hover:-translate-y-1 transition-all ease-in-out duration-300">
            <a
              href="https://instagram.com/waleed_aly21"
              className="text-icon-color fill-current stroke-current transition-all ease-in-out duration-300 hover:text-primary"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
          </div>
          <div className="w-5 mb-5 transform hover:-translate-y-1 transition-all ease-in-out duration-300">
            <a
              href="https://www.linkedin.com/in/waleed-ali-khan-64026b198/"
              className="text-icon-color fill-current stroke-current transition-all ease-in-out duration-300 hover:text-primary"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>

      <footer
        id="contact"
        className="md:mt-0 mt -32 flex items-center justify-center md:px-6 px-4 relative pb-40"
        data-aos="fade-down"
        data-aos-duration="500"
      >
        <div className="absolute bottom-5 text-center transition-all ease-in-out duration-300 transform hover:translate-y-[-5px]">
          <a
            href="https://github.com/waleedalikhan/waleed-portfolio-nextjs"
            target="_blank"
            className="text-xs font-sf-mono text-secondary hover:text-primary"
            rel="noreferrer"
          >
            Developed by Waleed Ali Khan using NextJS and TailwindCSS
          </a>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full text-center">
            <p className="text-primary font-sf-mono">04. What&apos;s Next?</p>
            <p className="text-[60px] font-calibreSemibold text-heading mt-5">
              Get In Touch
            </p>
            <p className="font-calibreRegular text-xl text-secondary sm:w-[560px] mb-14">
              Although I&apos;m not currently looking for any new opportunities,
              my inbox is always open. Whether you have a question or just want
              to say hi, I&apos;ll try my level best to get back to you!
            </p>
            <a
              href="mailto:waleedomore@gmail.com"
              className="py-[1.25rem] px-[1.75rem] border border-primary text-sm font-sf-mono rounded text-primary hover:bg-primary hover:bg-opacity-10 transition-all ease-in-out duration-300"
              target="_blank"
              rel="noreferrer"
            >
              Say Hello
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout
