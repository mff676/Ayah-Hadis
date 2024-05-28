import React from 'react';
import { IoMdMore } from 'react-icons/io';
import DropdownButton from './DropdownButton';
import { useLocation } from 'react-router-dom';

const CardRead = ({ q, lastLength, index, d }) => {
  const location = useLocation();
  const isJooz = location.pathname.includes('quran/detail/jozz');

  return (
    <div className={`card w-full flex flex-col gap-10 ${!lastLength && 'border-b-2'} pb-4`} id={index}>
      {(isJooz && q.number.inSurah === 1 && q.number.inQuran !== 1236 && q.number.inQuran !== 1) ||
      (!isJooz && q.number.inSurah === 1 && d.preBismillah !== null) ? (
        <div className='mb-10'>
          <h2 className='text-center font-hafs text-4xl mb-6'>﻿بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</h2>
          {/* <p className='text-center'>Dengan Nama Allah Yang Maha Pengasih Lagi Maha Penyayang</p> */}
        </div>
      ) : null}
      <div className="top-content flex justify-between w-full items-start">
          <DropdownButton d={q} index={index} surah={d} />
        <p className='font-hafs text-2xl lg:text-3xl text-right w-[85%]'>{q.text.arab}</p>
      </div>
      <div className="bottom-content ms-1">
        <p className='ms-5 text-sm'>{q.translation.id}</p>
      </div>
    </div>
  );
}

export default CardRead;
