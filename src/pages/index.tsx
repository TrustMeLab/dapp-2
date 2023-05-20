import SearchHousing from '@components/SearchHousing'
import { motion } from 'framer-motion'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <SearchHousing />
      </motion.div>
    </div>
  )
}

export default Home
