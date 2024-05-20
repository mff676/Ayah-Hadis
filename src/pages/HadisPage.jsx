import { useEffect, useState } from "react"
import hadistImage from "/assets/images/bukhari-book.png"
import { motion } from "framer-motion"
import { getHadistList } from "../utils/data"
import CardHadistList from "../components/hadisSection/CardHadistList"
const HadisPage = () => {
    const [hadistList, setHadistList] = useState([]);
    const [showMore, setShowMore] = useState(false);
    const [initialize, setInitialize] = useState(true)
    useEffect(() => {
        const getHadistData = async () => {
            const hadistData = await getHadistList();
            setHadistList(hadistData)
            }
            getHadistData().then(() => setTimeout(() => {
               setInitialize(false) 
            }, 3000))
    }, [])
    return (
        <motion.section
            className='min-h-screen px-16 py-5'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
            <div className="flex items-center my-5">
                <div className="w-1/2">
                    <div className="flex flex-col gap-5">
                        <h2 className='font-bold text-5xl w-[80%] font-montserrat'>Temukan Kemurnian Ajaran Islam dengan Mengkaji<br /><span className="text-green-primary">Hadis Nabi</span></h2>
                        <p className={`text-justify text-grey-secondary w-[80%] ${!showMore && 'line-clamp-5'}`}>
                            Hadis Nabi adalah sumber ajaran Islam yang kedua setelah Al-Quran. Dengan mengkaji Hadis, kita dapat memahami lebih dalam petunjuk hidup yang diberikan oleh Nabi Muhammad SAW. Di AyahHadis.com, Anda dapat menemukan kumpulan Hadis terpercaya yang dapat dijadikan pedoman dalam kehidupan sehari-hari. Mari bersama-sama mempelajari dan mengamalkan ajaran Nabi untuk mendapatkan kebahagiaan dunia dan akhirat.
                        </p>
                        <p className=' font-poppins text-sm cursor-pointer text-grey-secondary w-[80%]' onClick={() => setShowMore(!showMore)}>
                            {
                                showMore ? 'Tampilkan lebih sedikit' : 'Tampilkan lebih banyak'
                            }
                        </p>
                    </div>
                </div>
                <div className="w-1/2">
                    <img src={hadistImage} alt="Hadist Book" className="w-96 ms-auto" />
                </div>
            </div>
            <div className="flex flex-col items-center mb-10 mt-40 w-full">
                <h1 className='font-black text-green-primary text-center text-3xl mb-10 font-poppins'>Hadist-Hadist<br />Rasulullah ﷺ</h1>
                <div className="grid grid-cols-3 gap-4 my-10">
                    {/* Card */}
                    {
                        hadistList.map((i, index) => (
                            <CardHadistList key={index} h={i} index={index} />
                        ))
                    }
                    {/* End Card */}
                </div>
            </div>
        </motion.section>
    )
}

export default HadisPage