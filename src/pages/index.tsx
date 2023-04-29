import { Banner } from '@components/home/banner'
import { PricingSection } from '@components/home/pricing-section'
import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import { PartnersSection } from '../components/home/partners-section'
import { PlatformsSection } from '../components/home/platforms-section'
import { ReadySection } from '../components/home/ready-section'
import { ReputationSection } from '../components/home/reputation-section'
import { WorkSection } from '../components/home/work-section'

const Home: NextPage = () => {
  return (
    <div className="md:py-16">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <Banner />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <PricingSection />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <WorkSection />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <ReputationSection />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <PlatformsSection />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <PartnersSection />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <ReadySection />
      </motion.div>
    </div>
  )
}

export default Home
