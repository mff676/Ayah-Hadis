import { FaClock } from 'react-icons/fa'
import { Pagination } from '@nextui-org/react'
import { useState } from 'react'
import CardBlog from './CardBlog'
const BlogArticle = () => {
    const [currentPage, setCurrentPage] = useState(2)
    return (
        <div className="flex flex-col items-center gap-4 py-5">
            <div className='grid grid-cols-4 gap-4 w-full mb-5'>
                {/* Card */}
                <CardBlog page={0}/>
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