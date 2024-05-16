import React from 'react'
import { IoCopyOutline, IoShareOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'
import { IoIosInformationCircleOutline } from 'react-icons/io'

const CardRead = ({d, lastIndex}) => {
  return (
    <div className={`card ${!lastIndex&&'border-b-1'} pb-10 mt-11 text-center`}>
    <div className="card-header mb-10">
        <div className="flex justify-center items-center mb-5 gap-1">
        <h3 className="font-medium text-2xl">{d.title}</h3>
        <motion.button whileTap={{scale: .7}} className='rounded-full hover:bg-slate-200 p-1' title='info'><IoIosInformationCircleOutline /></motion.button>
        </div>

        <div className="flex justify-center gap-2 items-center">
            <motion.button whileTap={{scale: .7}} className='hover:bg-slate-200 p-2 rounded-full' title='copy'><IoCopyOutline size={24} /></motion.button>
            <motion.button whileTap={{scale: .7}} className='hover:bg-slate-200 p-2 rounded-full' title='share'><IoShareOutline size={24} /></motion.button>
        </div>
    </div>
    <div className="body-card">
        <h2 className="mb-5 text-2xl font-hafs font-medium">{d.arabic}</h2>
        <h2 className="leading-7 mb-6">{d.translation} {d.notes !== null && `(${d.notes})`}</h2>
        <h3 className=' text-sm'>Faidah : {d.fawaid}</h3>
    </div>
</div>  )
}

export default CardRead