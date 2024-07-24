import { Button } from '@nextui-org/react'
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { useNavigate, useParams } from 'react-router-dom'
import CardRead from '../components/quranSection/CardRead';
import { getQuranList } from '../utils/data';
import LoadingBar from '../components/LoadingBar';
import { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet';
import CardReadSkeleton from '../components/skeleton/Surah/CardReadSkeleton';

const ReadQuranPage = () => {
  const { id } = useParams();
  const [surah, setSurah] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [initialize, setInitialize] = useState(false)
  const navigate = useNavigate();
  
  // const handleNextButton = () => {
  //   // check if parse int id not 114 navigate + 1
  //   if (parseInt(id) < 114) {
  //     navigate(`/quran/read/${parseInt(id) + 1}`
  //     )
  // }
  useEffect(() => {
    getQuranList(setSurah, 'surah', id).then(() => setTimeout(() => {
      setIsLoading(false)
      // setInitialize(false)
    }, 2000))
    // .then(() => {
    //   setTimeout(() => {
    //     const section = document.getElementById( '4' )
    //     section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    //   }, 2000);
    // })
  }, [id]);
  if (isLoading) {
    return <LoadingBar />
  }
  return (
    <>
      <Helmet>
        <title>Baca dan Dengarkan surat {surah.name.transliteration.id} Terjemahan Bahasa Indonesia - AyahHadis</title>
        <meta name="description" content="Bacaan Al-Qur'an Online lengkap dengan terjemahan, disajikan untuk desktop dan mobile. Nikmati pengalaman membaca yang lebih mudah, ringan, dan lengkap di AyahHadis." />
        <meta name="keywords" content="Al-Qur'an, terjemahan Bahasa Indonesia, tafsir Al-Qur'an, membaca Al-Qur'an, AyahHadis, alquran, quran, Quran, quran terjemah, quran indonesia, Al-Baqarah, Yunus, Surat, Al-Kahfi, Kahfi" />
      </Helmet>
      <motion.section className='min-h-screen py-5 px-5 lg:px-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>
        <Toaster />
        <div className="button-direction flex justify-between mb-8">
          <Button
            variant='bordered'
            className='border-green-primary px-8 lg:px-24 rounded-2xl'
            onClick={() => parseInt(id) !== 1 && navigate(`/quran/detail/surah/${parseInt(id) - 1}`)}
          >
            Prev
          </Button>
          <Button
            variant='solid'
            className='bg-green-primary px-8 lg:px-24 rounded-2xl text-white'
            onClick={() => parseInt(id) !== 114 && navigate(`/quran/detail/surah/${parseInt(id) + 1}`)}
          >
            Next
          </Button>
        </div>
        <div className="content-read flex flex-col items-center pt-5">
        {
          initialize ?
          <div className="flex flex-col items-center gap-4">
            <div className="animate-pulse w-32 h-7 bg-gray-400 rounded-lg"></div>
            <div className="animate-pulse w-36 h-7 bg-gray-400 rounded-lg"></div>
            <div className="animate-pulse w-28 h-5 bg-gray-400 rounded-lg"></div>
          </div>
          :
          <div className="header-content text-center">
            <h2 className='font-hafs font-semibold text-4xl text-green-primary'>{surah.name.long}</h2>
            <h3 className='text-lg font-medium'>{surah.name.transliteration.id} ({surah.name.translation.id})</h3>
            <h4 className='text-sm text-grey-primary'>{surah.revelation.id} {surah.numberOfVerses} Ayat</h4>
          </div>

        }
        <CardReadSkeleton />
          {/* <div className="main-content w-full mt-10 flex flex-col gap-5">
            {surah.verses.map((verse, index, array) => (
              <CardRead q={verse} key={verse} lastLength={array.length - 1 === index} index={index} d={surah} />
            ))} */}
          {/* </div> */}
        </div>
      </motion.section>
    </>
  )
}

export default ReadQuranPage