import { Button } from '@nextui-org/react'
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { useNavigate, useParams } from 'react-router-dom'
import CardRead from '../components/quranSection/CardRead';
import { getQuranList } from '../utils/data';
import LoadingBar from '../components/LoadingBar';

const ReadQuranPage = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [surah, setSurah] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()
  useEffect(() => {
    getQuranList(setSurah, 'surah', id).then(() => setTimeout(() => {
      setIsLoading(false)
    }, 2000))
  }, [id]);
  // console.log();
  if (isLoading) {
    return <LoadingBar />
  }
  return (
    <motion.section className='min-h-screen py-5 px-10'  
     initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}>
      <div className="button-direction flex justify-between">
        <Button variant='bordered' className='border-green-primary px-24 rounded-2xl' onClick={() => parseInt(id) !== 1 && navigate(`/quran/detail/surah/${parseInt(id) - 1}`)}>Prev</Button>
        <Button variant='solid' className='bg-green-primary px-24 rounded-2xl text-white' onClick={() => parseInt(id) !== 114 && navigate(`/quran/detail/surah/${parseInt(id) + 1}`)}>Next</Button>
      </div>
      <div className="content-read flex flex-col items-center pt-5">
        <div className="header-content flex flex-col items-center gap-1">
          <h2 className='font-hafs font-semibold text-4xl text-green-primary'>{surah.name.long}</h2>
          <h3 className='text-lg font-medium'>{surah.name.transliteration.id} ({surah.name.translation.id})</h3>
          <h4 className='text-sm text-grey-primary'>{surah.revelation.id} {surah.numberOfVerses} Ayat</h4>
        </div>
        <div className="main-content w-full mt-10 flex flex-col gap-5">
          {
            surah.verses.map((verse, index, array) => (
              <CardRead q={verse} key={verse} lastLength={array.length - 1 === index} />
            ))
          }
        </div>
      </div>
    </motion.section>
  )
}

export default ReadQuranPage