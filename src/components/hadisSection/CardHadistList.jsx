import React from 'react'
import { Link } from 'react-router-dom'

const CardHadistList = ({ h, index }) => {
    const name = h.name
    const nameAr = ['سنن أبي داود', 'مسند الإمام أحمد', 'صحيح البخاري', 'سنن الدارمي', 'سنن ابن ماجه', 'الموطأ', 'صحيح مسلم', 'سنن النسائي', 'سنن الترمذي']
    return (
        <Link to={`detail/${h.slug}`}>
            <div className="card group cursor-pointer min-w-80">
                <div className="flex p-5 min-w-full gap-5 items-center group-hover:border-green-primary border-2 rounded-md border-gray-300 transition-all">
                    <div className="number-surah min-w-8 min-h-8 flex items-center group-hover:text-white-text rotate-45 rounded justify-center bg-gray-300 group-hover:bg-green-primary transition-all">
                        <p className='-rotate-45'>{index + 1}</p>
                    </div>
                    <div className="card-body flex justify-between w-96">
                        <div className="card-title">
                            <h2>
                                {name === "Bukhari" || name === "Muslim" ? 'Shahih '
                                    :
                                    name === "Ahmad" ? 'Musnad ' :
                                        name === "Malik" ? 'Al-Muwattha ' :
                                            'Sunan '
                                } {name}
                            </h2>
                            <h4 className="text-grey-primary text-sm">Imam {name}</h4>
                        </div>
                        <div className="card-text text-right">
                            <h2 className='font-hafs font-medium text-lg'>{nameAr[index]}</h2>
                            <h4 className="text-grey-primary text-sm">{h.total} Hadits</h4>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CardHadistList