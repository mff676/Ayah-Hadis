import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const CardSurah = ({q}) => {
  return (
    <Link to={`detail/surah/${q.number}`} className="card group cursor-pointer">
             <div className="card group cursor-pointer flex  sm:flex-row justify-between items-center p-4 sm:p-5 gap-3 sm:gap-5 group-hover:border-green-primary border-2 rounded-md border-gray-300 transition-all w-full">
                <div className="flex items-center gap-2">
                    <div className="rounded number-surah w-8 h-8  rotate-45 flex items-center justify-center bg-gray-300 group-hover:text-white group-hover:bg-green-primary transition-all">
                        <p className="-rotate-45">{q.number}</p>
                    </div>
                    <div className="ml-3 sm:ml-5">
                        <h2>{q.name.transliteration.id}</h2>
                        <h4 className="text-gray-500 text-sm">{q.name.translation.id}</h4>
                    </div>
                </div>
                <div className="flex flex-col sm:ml-auto">
                <h2 className='font-hafs text-right text-lg'>{q.name.short}</h2>
         <h4 className="text-grey-primary text-sm">{q.numberOfVerses} Ayat</h4>
                </div>
            </div>
</Link>
  )
}
CardSurah.propTypes = {
  q : PropTypes.object.isRequired
}
export default CardSurah