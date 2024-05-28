import { useEffect, useState } from "react";
import hadistImage from "/assets/images/bukhari-book.png";
import { motion } from "framer-motion";
import { getHadistList } from "../utils/data";
import CardHadistList from "../components/hadisSection/CardHadistList";

const HadisPage = () => {
    const [hadistList, setHadistList] = useState([]);
    const [showMore, setShowMore] = useState(false);
    const [initialize, setInitialize] = useState(true);

    useEffect(() => {
        const getHadistData = async () => {
            const hadistData = await getHadistList();
            setHadistList(hadistData);
        };
        getHadistData().then(() => setTimeout(() => {
            setInitialize(false);
        }, 3000));
    }, []);

    return (
        <motion.section
            className='min-h-screen px-8 md:px-16 py-5' // Adjusted padding for responsiveness
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className="flex flex-col-reverse md:flex-row items-center my-5"> {/* Adjusted layout for responsiveness */}
                <div className="md:w-1/2">
                    <div className="flex flex-col gap-5">
                        <h2 className='font-bold text-3xl md:text-5xl w-full font-montserrat'>Temukan Kemurnian Ajaran Islam dengan Mengkaji<br /><span className="text-green-primary">Hadis Nabi</span></h2>
                        <p className={`text-justify text-grey-secondary w-full ${!showMore && 'line-clamp-5'}`}>
                            Hadis Nabi adalah sumber ajaran Islam yang kedua setelah Al-Quran. Dengan mengkaji Hadis, kita dapat memahami lebih dalam petunjuk hidup yang diberikan oleh Nabi Muhammad SAW. Di AyahHadis.com, Anda dapat menemukan kumpulan Hadis terpercaya yang dapat dijadikan pedoman dalam kehidupan sehari-hari. Mari bersama-sama mempelajari dan mengamalkan ajaran Nabi untuk mendapatkan kebahagiaan dunia dan akhirat.
                        </p>
                        <p className=' font-poppins text-sm cursor-pointer text-grey-secondary' onClick={() => setShowMore(!showMore)}>
                            {
                                showMore ? 'Tampilkan lebih sedikit' : 'Tampilkan lebih banyak'
                            }
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2 mb-5 md:mb-0"> {/* Adjusted layout for responsiveness */}
                    <img src={hadistImage} alt="Hadist Book" className="w-full md:w-96 mx-auto" /> {/* Adjusted image width */}
                </div>
            </div>
            <div className="flex flex-col items-center mb-10 mt-10 md:mt-40 w-full">
                <h1 className='font-black text-green-primary text-center text-2xl md:text-3xl mb-10 font-poppins'>Hadist-Hadist<br />Rasulullah ﷺ</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10"> {/* Adjusted grid layout for responsiveness */}
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
    );
}

export default HadisPage;
