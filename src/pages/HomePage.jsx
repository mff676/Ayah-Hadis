import BlogPage from "../components/home/BlogSection"
import HeroHomeSection from "../components/home/HeroHomeSection"
import {motion} from "framer-motion"

const HomePage = () => {
  return (
    <motion.section
     className='min-h-screen py-5 px-16'
     initial={{opacity: 0}}
     animate={{opacity:1}}
    >
      <marquee  width="100%" direction="left" height="50px" scrollamount="10" className="max-sm:!px-0 min-w-full">
      Situs ini masih dalam tahap pengembangan. Kami berusaha keras untuk memperbaiki dan meningkatkan pengalaman pengguna. Terima kasih atas kesabaran dan pengertiannya.
      </marquee>
    <HeroHomeSection />
   <BlogPage/>
    </motion.section>
  )
}

export default HomePage