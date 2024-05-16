import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

const CardJooz = ({ j }) => {
    return (
        <Link>
            <div className="card group cursor-pointer">
                <div className="flex p-5 gap-5 items-center group-hover:border-green-primary border-2 rounded-md border-gray-300 transition-all">
                    <div className="rounded number-surah w-8 h-8 flex items-center group-hover:text-white-text rotate-45 justify-center bg-gray-300 group-hover:bg-green-primary transition-all">
                        <p className='-rotate-45'>{j.juz}</p>
                    </div>
                    <div className="card-body flex justify-between min-w-72 items-center">
                        <div className="card-title">
                            <h2>Juz {j.juz}</h2>
                            <h4 className="text-grey-primary text-xs">{j.juzStartInfo} - {j.juzEndInfo}</h4>
                        </div>
                        <div className=" flex items-center justify-center ">
                            <IoIosArrowForward size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CardJooz