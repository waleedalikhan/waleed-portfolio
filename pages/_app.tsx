import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const LoadingAnimation: React.FC = () => {
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', () => {
      const playVideo = () => {
        const video: any = document.getElementById('loadingAnimation')
        if (!video.playing) {
          video.play
        }
      }
      document.body.addEventListener('touchstart', playVideo)
    })

    return () => {
      document.removeEventListener('DOMContentLoaded', () => {
        const playVideo = () => {
          const video: any = document.getElementById('loadingAnimation')
          if (!video.playing) {
            video.play
          }
        }
        document.body.removeEventListener('touchstart', playVideo)
      })
    }
  }, [])

  return (
    <>
      <video
        className="fixed overflow-hidden inset-0 min-w-full min-h-full object-cover"
        id="loadingAnimation"
        autoPlay
        muted
        loop
      >
        <source src="/video/loading-animation.mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    AOS.init({
      once: true,
    })

    setTimeout(() => {
      setIsLoading(false)
    }, 3500)
  }, [])

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <>
          {/* @ts-ignore */}
          <Component {...pageProps} />
        </>
      )}
    </>
  )
}

export default MyApp
