import React from 'react'
import { IoMdMore } from 'react-icons/io'
import DropdownButton from './DropdownButton'

const CardRead = ({q, lastLength, index}) => {
    // TODO: Buat kondisi jika di surat maka hanya menampilkan bismillah di setiap ayat bernomor 1 dan jika di surah maka ia tampilkan
    // TODO: Didalam surah read ada juzz, tinggal gimana cara nya nyatuin kedua nya
  return (
<>
          {/* Card Read */}
          <div className={`card w-full flex flex-col gap-9 ${!lastLength && 'border-b-2'} pb-4`} id={index}>
            <div className="top-content flex justify-between w-full">
              <DropdownButton d={q}/>
              <p className='font-hafs text-3xl me-5 text-right w-[85%]'>{q.text.arab}</p>
            </div>
            <div className="bottom-content ms-1">
              <p className='ms-5 '>{q.translation.id}</p>
            </div>
          {/* End Card */}
          {/* start */}

          {/* end */}
      </div> 
          </>
     )
}

export default CardRead