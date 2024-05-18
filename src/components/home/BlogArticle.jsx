import { FaClock } from 'react-icons/fa'
import { Pagination } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import CardBlog from './CardBlog'
import { getArticleList } from '../../supabase/SupabaseCrud'
const BlogArticle = () => {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(2);
    useEffect(() => {
        // TODO: Buat view untuk data random dari supabase
        const getListArticle = async () => {
            const {data} = await getArticleList();
            setData(data)
        }
        getListArticle()
    },[])
    return (
        <div className="flex flex-col items-center gap-4 py-5">
            <div className='grid grid-cols-4 gap-4 w-full mb-5'>
                {/* Card */}
                {
                    data.map((item, index) => (
                        <CardBlog page={0} key={index} d={item}/>
                    ))
                }
                {/* End Card */}
            </div>
            <Pagination
        total={10}
        color="success"
        page={currentPage}
        onChange={setCurrentPage}
        showControls
        loop
        classNames={{
            cursor:"bg-green-primary text-white-text",
          }}
      />
        </div>
    )
}

export default BlogArticle