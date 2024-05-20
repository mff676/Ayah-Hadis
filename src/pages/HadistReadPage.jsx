import { useEffect, useState } from "react"
import CardReadHadist from "../components/hadisSection/CardReadHadist"
import { getHadistList } from "../utils/data"
import { useParams } from "react-router-dom"
import LoadingBar from "../components/LoadingBar"
import { Pagination } from "@nextui-org/react"
import  { Toaster } from "react-hot-toast"
import { getFavoriteHadis } from "../supabase/SupabaseCrud"

const HadistReadPage = () => {
    const [favoriteHadis, setFavoriteHadis] = useState([])
    const { name } = useParams()
    const [hadistData, setHadistData] = useState([]);
    const [currentPage, setCurrentPage] = useState(hadistData.pagination?.currentPage || 1);
    const [totalPage, setTotalPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const valueUrl = name + `?page=${currentPage}&limit=20`
    const renderHadithTitle = (name) => {
        let titlePrefix = '';
    
        switch (name) {
            case "Bukhari":
            case "Muslim":
                titlePrefix = 'Shahih ';
                break;
            case "Ahmad":
                titlePrefix = 'Musnad ';
                break;
            case "Malik":
                titlePrefix = 'Al-Muwattha ';
                break;
            default:
                titlePrefix = 'Sunan ';
        }
    
        return `${titlePrefix}${name}`;
    };
    // TODO:Tambahin skeleton
    useEffect(() => {
        const getHadistData = async () => {
            const hadistData = await getHadistList(valueUrl);
            const {data} = await getFavoriteHadis();
            setFavoriteHadis(data)
            setHadistData(hadistData)
            setCurrentPage(hadistData.pagination.currentPage);
            setTotalPage(hadistData.pagination.totalPages)
        }
        getHadistData().then(() => setTimeout(() => {
            setIsLoading(false)
        }, 2000))
    }, [valueUrl]);
    if (isLoading) {
        return <LoadingBar />
    }
    return (
        <section className='min-h-screen py-10 px-16'>
            <Toaster />
            <div className="header-content flex flex-col gap-2 items-center">
                <h2 className="text-2xl font-semibold font-poppins">{renderHadithTitle(hadistData.name)}</h2>
                <h4 className="font-poppins text-grey-secondary">{hadistData.total} Hadist</h4>
            </div>
            <div className="main-content mt-5">
                <div className="flex flex-col gap-2">
                    {
                        hadistData.items.map((i, index, array) => (
                            <CardReadHadist key={index} h={i} hadis={hadistData} lastIndex={array.length - 1 === index}  favoriteList={favoriteHadis}/>
                        ))
                    }
                </div>
            </div>
            <div className="flex justify-center mb-5">
            <Pagination
                total={totalPage}
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