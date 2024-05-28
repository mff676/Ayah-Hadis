// import React from 'react'
// import {motion} from "framer-motion"
// import CardList from '../components/dhikr-dua-components/CardList'
// import Categories from '../data/Categories'

// const DzikirPage = () => {
//   return (
//     <motion.section
//      className='min-h-screen p-5 px-16'
//      initial={{opacity: 0}}
//      animate={{opacity:1}}
//      >
//       <h1 className='text-center font-bold font-poppins text-green-primary text-4xl'>Dzikir-Dzikir</h1>
//       <div className="mt-10">
//         <div className='grid grid-cols-2 gap-4 w-full'>
//           {
//             Categories.dhikr.map((i, index) => (
//               <CardList key={index} d={i} index={index} prevPage='dzikir'/>
//             ))
//           }
//         </div>
//       </div>
//     </motion.section>
//   )
// }

// export default DzikirPage

import React from 'react';
import { motion } from "framer-motion";
import CardList from '../components/dhikr-dua-components/CardList';
import Categories from '../data/Categories';

const DzikirPage = () => {
  return (
    <motion.section
      className='min-h-screen p-5 sm:px-8 md:px-16'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className='text-center font-bold font-poppins text-green-primary text-2xl sm:text-3xl md:text-4xl'>Dzikir-Dzikir</h1>
      <div className="mt-10">
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
          {
            Categories.dhikr.map((i, index) => (
              <CardList key={index} d={i} index={index} prevPage='dzikir' />
            ))
          }
        </div>
      </div>
    </motion.section>
  )
}

export default DzikirPage;
// 