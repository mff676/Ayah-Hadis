import { Pagination } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import CardBlog from './CardBlog';
import PropTypes from "prop-types"
import CardBlogSkeleton from '../skeleton/CardBlogSkeleton';


const BlogArticle = ({data, totalData}) => {
    const itemSkeleton = []
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 4
    const [pageItems, setPageItems] = useState([]);
    const [initializing, setInitializing] = useState(true)
    // totalpage
    const totalPage =Math.ceil(totalData / itemPerPage) 
    const pageHandle = (page) => {
        const startIndex = Math.ceil(page - 1) * itemPerPage
        const lastIndex = startIndex + itemPerPage
         setPageItems(data.slice(startIndex, lastIndex));
    } 
        for (let i = 0; i < 4; i++) {
            itemSkeleton.push(<CardBlogSkeleton />)
          }
    useEffect(() => {
        setInitializing(true)
        pageHandle(currentPage)
            setTimeout(() => {
                setInitializing(false)
            }, 2000)
    },[currentPage])
    if (initializing) {
        return(
        <div className="flex flex-col items-center gap-4 py-5">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full mb-5'>
                {itemSkeleton}
            </div>
            </div>
        )
    }
        return (
        <div className="flex flex-col items-center gap-4 py-5">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full mb-5'>
                {/* Card */}
                {pageItems.map((item, index) => (
                    <CardBlog page={0} key={index} d={item} />
                ))}
                {/* End Card */}
            </div>
            <div className="w-full flex justify-center">
            <Pagination
                    total={totalPage}
                    color="success"
                    page={currentPage}
                    onChange={setCurrentPage}
                    showControls
                    loop
                    size='sm'
                    classNames={{
                        cursor: "bg-green-primary text-white-text",
                        pagination: "flex flex-wrap justify-center gap-2", // Added responsive styles
                        page: "bg-white text-black border border-gray-300 rounded-full px-3 py-1", // Customized pagination item styles
                        active: "bg-green-primary text-white-text", // Customized active page styles
                    }}
                />
            </div>
        </div>
    );
}
BlogArticle.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    totalData: PropTypes.number.isRequired
}
export default BlogArticle;
