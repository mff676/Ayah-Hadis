import React from 'react'
import { motion } from 'framer-motion'
import Categories from '../data/Categories'
import CardList from '../components/dhikr-dua-components/CardList'


const DoaPage = () => {
    return (
        <motion.section
        className='min-h-screen py-12 px-16'
        initial={{opacity: 0}}
        animate={{opacity:1}}
        >
         <h1 className='text-center font-bold font-poppins text-green-primary text-4xl'>Doa-Doa Pilihan</h1>
         <div className="mt-10">
           <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
             {
               Categories.dua.map((i, index) => (
                 <CardList key={index} d={i} index={index} prevPage='doa'/>
               ))
             }
           </div>
         </div>
       </motion.section>
    )
}

export default DoaPage