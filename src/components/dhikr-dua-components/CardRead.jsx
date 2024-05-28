import React from 'react'
import { IoCopyOutline, IoShareOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import toast from 'react-hot-toast'
import ModalComponent from './ModalComponent'

const CardRead = ({d, lastIndex}) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(`${d.arabic}\n${d.translation}\n\n\n\n\nMau baca artikel lainnya? atau mau membaca Al-Quran atau hadist? semua nya ada di https://ayahHadis.com, website islami terlengkap di Indonesia`);
        toast.success('Berhasil di copy');
    };
  return (
    <div className={`card ${!lastIndex&&'border-b-1'} pb-10 mt-11 text-justify md:text-center`}>
    <div className="card-header mb-10">
        <div className="flex flex-col md:flex-row justify-center items-center mb-5 gap-1">
        <h3 className="font-medium text-base md:text-2xl">{d.title}</h3>
        {/* <motion.button whileTap={{scale: .7}} className='rounded-full hover:bg-slate-200 p-1' title='info'><IoIosInformationCircleOutline /></motion.button> */}
        <ModalComponent header={'Faidah Hadist'} content={d.fawaid} source={d.source}/>
        </div>

        <div className="flex justify-center gap-2 items-center">
            <motion.button whileTap={{scale: .7}} className='hover:bg-slate-200 p-2 rounded-full' title='copy' onClick={handleCopy}><IoCopyOutline size={24} /></motion.button>
            <motion.button whileTap={{scale: .7}} className='hover:bg-slate-200 p-2 rounded-full' title='share'><IoShareOutline size={24} /></motion.button>
        </div>
    </div>
    <div className="body-card">
        <h2 className="mb-5 text-2xl font-hafs font-medium text-right">{d.arabic}</h2>
        <h2 className="leading-7 mb-6 text-xs md:text-base">{d.translation} {d.notes !== null && `(${d.notes})`}</h2>
    </div>  
</div>  )
}

export default CardRead