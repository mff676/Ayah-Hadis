import React from 'react'
import DropdownButton from './DropdownButton'

const CardReadJooz = ({lastLength, index, q, surah}) => {
  return (
    <div className={`card w-full flex flex-col gap-9 ${!lastLength && 'border-b-2'} pb-4`} id={index}>
    <div className="top-content flex justify-between w-full">
      <DropdownButton d={q} index={index} surah={null}/>
      <p className='font-hafs text-3xl me-5 text-right w-[85%]'>{q.text.arab}</p>
    </div>
    <div className="bottom-content ms-1">
      <p className='ms-5 '>{q.translation.id}</p>
    </div>
    </div>
      )
}

export default CardReadJooz