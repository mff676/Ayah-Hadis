import { Button } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getQuranList } from '../utils/data';
import LoadingBar from '../components/LoadingBar';
import { JoozList } from '../data/JoozList';
import CardReadJooz from '../components/quranSection/CardReadJooz';
import CardRead from '../components/quranSection/CardRead';
import { Toaster } from 'react-hot-toast';
import { motion } from "framer-motion"
const JuzReadPage = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [juz, setJuz] = useState([]);
    const { id } = useParams();
    const juzData = JoozList.filter(i => i.juz === Number(id))
    useEffect(() => {
        getQuranList(setJuz, 'juz', id).then(() => setTimeout(() => {
            setIsLoading(false)
        }, 2000))
            .then(() => {
                setTimeout(() => {
                    const section = document.getElementById('4')
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 2000);
            })
    }, [id]);
    console.log(juzData);
    if (isLoading) {
        return <LoadingBar />
    }
    return (
        <motion.section className='min-h-screen py-5 px-5 lg:px-10'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
            <Toaster />
            <div className="button-direction flex justify-between">
                <Button variant='bordered' className='border-green-primary px-24 rounded-2xl' onClick={() => parseInt(id) !== 1 && navigate(`/quran/detail/surah/${parseInt(id) - 1}`)}>Prev</Button>
                <Button variant='solid' className='bg-green-primary px-24 rounded-2xl text-white' onClick={() => parseInt(id) !== 114 && navigate(`/quran/detail/surah/${parseInt(id) + 1}`)}>Next</Button>
            </div>
            <div className="content-read flex flex-col items-center pt-5">
                <div className="header-content flex flex-col items-center gap-1">
                    {/* <h3>COMING SOON</h3> */}
                    <h3 className='text-2xl font-poppins font-semibold'>Juz {juzData[0].juz}</h3>
                    <h4 className=' text-grey-primary'>{juzData[0].juzStartInfo} - {juzData[0].juzEndInfo}</h4>
                </div>
                <div className="main-content w-full mt-10 flex flex-col gap-10">
                    {
                        juz.verses.map((data, index, array) => (
                            <CardRead q={data} key={index} lastLength={array.length - 1 === index} index={index} d={null} />
                        ))
                    }
                </div>
            </div>
        </motion.section>
    )
}

export default JuzReadPage