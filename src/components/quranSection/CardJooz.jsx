import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const CardJooz = ({ j }) => {
    return (
        <Link to={`detail/jozz/${j.juz}`}>
            <div className="card group cursor-pointer flex  sm:flex-row justify-between items-center p-4 sm:p-5 gap-3 sm:gap-5 group-hover:border-green-primary border-2 rounded-md border-gray-300 transition-all w-full">
                <div className="flex items-center gap-2">
                    <div className="rounded number-surah w-8 h-8  rotate-45 flex items-center justify-center bg-gray-300 group-hover:text-white group-hover:bg-green-primary transition-all">
                        <p className="-rotate-45">{j.juz}</p>
                    </div>
                    <div className="ml-3 sm:ml-5">
                        <h2>Juz {j.juz}</h2>
                        <h4 className="text-gray-500 text-sm">{j.juzStartInfo} - {j.juzEndInfo}</h4>
                    </div>
                </div>
                <div className="flex items-center justify-center sm:ml-auto">
                    <IoIosArrowForward size={20} className="hidden sm:block" />
                </div>
            </div>
        </Link>
    );
}

export default CardJooz;
