import { useEffect, useState } from "react"
import CardReadHadist from "../components/hadisSection/CardReadHadist"
import { getHadistList } from "../utils/data"
import { useParams } from "react-router-dom"
import LoadingBar from "../components/LoadingBar"
import { Pagination } from "@nextui-org/react"

const HadistReadPage = () => {
    const [currentPage, setCurrentPage] = useState(2)
    const { name } = useParams()
    const [hadistData, setHadistData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const valueUrl = name + '?page=1&limit=20'
    useEffect(() => {
        getHadistList(setHadistData, valueUrl).then(() => setTimeout(() => {
            setIsLoading(false)
        }, 2000))
    }, [valueUrl]);
    console.log(hadistData);
    if (isLoading) {
        return <LoadingBar />
    }
    return (
        <section className='min-h-screen py-10 px-16'>
            <div className="header-content flex flex-col gap-2 items-center">
                <h2 className="text-2xl font-semibold font-poppins">Shahih Bukhari</h2>
                <h4 className="font-poppins text-grey-secondary">4298 Hadist</h4>
            </div>
            <div className="main-content mt-5">
                <div className="flex flex-col gap-2">
                    {
                        hadistData.items.map((i, index, array) => (
                            <CardReadHadist key={index} h={i} lastIndex={array.length - 1 === index} />
                        ))
                    }
                </div>
            </div>
            <div className="flex justify-center mb-5">
            <Pagination
                total={10}
                color="success"
                page={currentPage}
                onChange={setCurrentPage}
                showControls
                loop
                classNames={{
                    cursor: "bg-green-primary text-white-text",
                }}
            />        
            </div>
            </section>
    )
}

export default HadistReadPage