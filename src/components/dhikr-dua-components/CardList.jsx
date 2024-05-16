import React from 'react'
import { Link } from 'react-router-dom'

const CardList = ({ index, d, prevPage }) => {
    return (
        <Link to={`detail/${index}#${prevPage}`}>
            <div className="group cursor-pointer">
                <div className="w-full h-24 flex rounded-lg border-2 border-grey-secondary group-hover:border-green-primary transition-all">
                    <div className='w-20 h-full bg-grey-primary group-hover:bg-green-primary flex justify-center items-center transition-all'>
                        <p className='font-bold text-xl text-white'>{index + 1}</p>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-green-primary">{d.name}</div>
                        <p className="text-gray-700 text-base">{d.total_read} Bacaan</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CardList