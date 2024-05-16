import { IoCopyOutline, IoShareOutline, IoStarOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'
const CardReadHadist = ({ h, lastIndex }) => {
    return (
        <div className={`card ${!lastIndex && 'border-b-1'} pb-10 mt-11 text-center`}>
            <div className="card-header mb-10">
                <h3 className="font-medium text-center text-2xl mb-5">{`#Hadist ke-${h.number}`}</h3>
                <div className="flex justify-center gap-2 items-center">
                     <motion.button whileTap={{scale: .7}} className='hover:bg-slate-200 p-2 rounded-full' title='copy'><IoCopyOutline size={24} /></motion.button>
                     <motion.button whileTap={{scale: .7}} className='hover:bg-slate-200 p-2 rounded-full' title='share'><IoShareOutline size={24} /></motion.button>
                     <motion.button whileTap={{scale: .7}} className='hover:bg-slate-200 p-2 rounded-full' title='Favorite'><IoStarOutline   size={24} /></motion.button>
                </div>
            </div>
            <div className="body-card">
                <h2 className="mb-5 text-2xl font-hafs font-medium">{h.arab}</h2>
                <h2 className="leading-7">{h.id}</h2>
                {/* <h3>{}</h3> */}
            </div>
        </div>
    )
}

export default CardReadHadist