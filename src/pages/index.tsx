import { motion } from 'framer-motion'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="md:py-16">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}></motion.div>
    </div>
  )
}

export default Home
