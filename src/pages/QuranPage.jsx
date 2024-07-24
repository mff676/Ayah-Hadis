import { motion } from 'framer-motion'
import QuranComponent from '../components/quranSection/QuranComponent';
import { Helmet } from 'react-helmet';

const QuranPage = () => {


    return (
        <>
            <Helmet>
                <title>Baca dan Dengarkan Al-Quran Terjemahan Bahasa Indonesia - AyahHadis</title>
                <meta name="description" content="Bacaan Al-Qur'an Online lengkap dengan terjemahan, disajikan untuk desktop dan mobile. Nikmati pengalaman membaca yang lebih mudah, ringan, dan lengkap di AyahHadis." />
                <meta name="keywords" content="Al-Qur'an, terjemahan Bahasa Indonesia, tafsir Al-Qur'an, membaca Al-Qur'an, AyahHadis, alquran, quran, Quran, quran terjemah, quran indonesia" />
            </Helmet>
            <motion.section
                className='min-h-screen p-5'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >            <h1 className='text-center font-bold font-poppins text-green-primary text-3xl my-7'>Temukan kedamaian<br />dengan membaca Al-Qur&apos;an</h1>
                <QuranComponent />
            </motion.section>
        </>
    )
}

export default QuranPage