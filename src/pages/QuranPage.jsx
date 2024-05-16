import { motion } from 'framer-motion'
import QuranComponent from '../components/quranSection/QuranComponent';

const QuranPage = () => {


    return (
        <motion.section
        className='min-h-screen p-5'
        initial={{opacity: 0}}
        animate={{opacity:1}}
       >            <h1 className='text-center font-bold font-poppins text-green-primary text-3xl my-7'>Temukan kedamaian<br />dengan membaca Al-Qur&apos;an</h1>
            <QuranComponent />
        </motion.section>
    )
}

export default QuranPage