import { Button } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getQuranList } from '../utils/data';

const JuzReadPage = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [juz, setJuz] = useState([]);
    const { id } = useParams();
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
    console.log(juz);
    return (
        <section className='min-h-screen py-5 px-10'>
            <div className="button-direction flex justify-between">
                <Button variant='bordered' className='border-green-primary px-24 rounded-2xl' onClick={() => parseInt(id) !== 1 && navigate(`/quran/detail/surah/${parseInt(id) - 1}`)}>Prev</Button>
                <Button variant='solid' className='bg-green-primary px-24 rounded-2xl text-white' onClick={() => parseInt(id) !== 114 && navigate(`/quran/detail/surah/${parseInt(id) + 1}`)}>Next</Button>
            </div>
            <div className="content-read flex flex-col items-center pt-5">
                <div className="header-content flex flex-col items-center gap-1">
                    <h3>COMING SOON</h3>
                    {/* <h2 className='font-hafs font-semibold text-4xl text-green-primary'>{surah.name.long}</h2>
                    <h3 className='text-lg font-medium'>{surah.name.transliteration.id} ({surah.name.translation.id})</h3>
                    <h4 className='text-sm text-grey-primary'>{surah.revelation.id} {surah.numberOfVerses} Ayat</h4> */}
                </div>
                </div>
        </section>
    )
}

export default JuzReadPage