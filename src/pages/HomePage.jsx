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
    <HeroHomeSection />
   <BlogPage/>
    </motion.section>
  )
}

export default HomePage