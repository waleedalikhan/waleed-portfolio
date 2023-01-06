import type { NextPage } from 'next'
import AboutSection from '~/components/About'
import ExperienceSection from '~/components/Experience'
import HomeSection from '~/components/Home'
import Layout from '~/components/layouts'
import WorkSection from '~/components/Work'

const MainPage: NextPage = () => {
  return (
    <Layout>
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <WorkSection />
    </Layout>
  )
}

export default MainPage
