import { useEffect, useState } from "react"
import hadistImage from "/assets/images/bukhari-book.png"
import { motion } from "framer-motion"
import { getHadistList } from "../utils/data"
import CardHadistList from "../components/hadisSection/CardHadistList"
const HadisPage = () => {
    const [hadistList, setHadistList] = useState([])
    useEffect(() => {
        getHadistList(setHadistList)
    },[])
    console.log(hadistList);
    return (
        <motion.section
            className='min-h-screen px-16 py-5'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
            <div className="flex items-center my-5">
                <div className="w-1/2">
                    <div className="flex flex-col gap-5">
                        <h2 className='font-bold text-5xl w-[80%] font-montserrat'>Temukan Kemurnian Ajaran Islam dengan Mengkaji<br /><span className="text-green-primary">Hadis Nabi</span></h2>
                        <p className='text-justify text-grey-secondary w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci commodi repellendus provident esse qui, non, modi culpa voluptatibus deleniti, tenetur doloremque minus pariatur ipsam explicabo amet et possimus id quasi est consectetur ratione? Qui magni eos accusantium nesciunt molestiae nobis numquam vitae. Veniam impedit a enim vitae asperiores sunt praesentium?</p>
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
                            <CardHadistList key={index} h={i} index={index}/>
                        ))
                    }  
                    {/* End Card */}
                </div>
            </div>
        </motion.section>
    )
}

export default HadisPage