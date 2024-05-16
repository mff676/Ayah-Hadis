import React from 'react'
import { Link } from 'react-router-dom'

const CardSurah = ({q}) => {
  return (
    <Link to={`detail/surah/${q.number}`} className="card group cursor-pointer">
    <div className="flex p-5 gap-5 items-center group-hover:border-green-primary border-2 rounded-md border-gray-300 transition-all">
        <div className="number-surah w-8 aspect-square flex p-1 items-center group-hover:text-white-text rotate-45 justify-center bg-gray-300 group-hover:bg-green-primary transition-all">
            <p className=' -rotate-45'>{q.number}</p>
        </div>
        <div className="card-body flex justify-between lg:min-w-72">
            <div className="card-title">
                <h2>{q.name.transliteration.id}</h2>
                <h4 className="text-grey-primary text-sm">{q.name.translation.id}</h4>
            </div>
            <div className="card-text flex-col flex items-end">
                <h2 className='font-hafs text-lg'>{q.name.short}</h2>
                <h4 className="text-grey-primary text-sm">{q.numberOfVerses} Ayat</h4>
            </div>
        </div>
    </div>
</Link>
  )
}

export default CardSurah