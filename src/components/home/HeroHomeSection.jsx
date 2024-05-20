import { useState } from 'react'
import Hero from '/assets/images/hero.png'

const HeroHomeSection = () => {
    const [showMore, setShowMore] = useState(false)
    return (
        <div className="flex items-center">
            <div className="w-1/2">
                <div className="flex flex-col gap-5">
                    <h2 className='font-bold text-6xl w-[85%] font-montserrat'>Raih Kesucian Diri Dengan Membaca<br /><span className="text-green-primary">Quran dan Hadits</span></h2>
                   <div className="flex flex-col gap-2">
                    <p className={`text-justify text-grey-secondary w-[80%] ${!showMore && 'line-clamp-5'}`}>
                        Temukan kedamaian dan pencerahan dengan membaca Al-Quran dan Hadits. Al-Quran sebagai kitab suci umat Islam, memberikan petunjuk hidup yang sempurna. Hadits, sebagai kumpulan perkataan dan perbuatan Nabi Muhammad SAW, melengkapi ajaran Al-Quran dan memberikan contoh nyata bagaimana menerapkan ajaran Islam dalam kehidupan sehari-hari. Bergabunglah dengan kami di AyahHadis.com untuk menjelajahi dan memahami lebih dalam tentang ajaran Islam.
                    </p>
                    <p className=' font-poppins text-sm cursor-pointer text-grey-secondary w-[80%]' onClick={() => setShowMore(!showMore)}>
                        { 
                        showMore ? 'Tampilkan lebih sedikit' : 'Tampilkan lebih banyak'
                        }
                    </p>
                   </div>
                </div>
            </div>
            <div className="w-1/2">
                <img src={Hero} alt="Hero Images" />
            </div>
        </div>)
}

export default HeroHomeSection