import { FaClock } from 'react-icons/fa';
import { Pagination } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import CardBlog from './CardBlog';
import { getArticleList } from '../../supabase/SupabaseCrud';

const BlogArticle = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const getListArticle = async () => {
            const { data } = await getArticleList();
            setData(data);
        };
        getListArticle();
    }, []);

    return (
        <div className="flex flex-col items-center gap-4 py-5">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full mb-5'>
                {/* Card */}
                {data.map((item, index) => (
                    <CardBlog page={0} key={index} d={item} />
                ))}
                {/* End Card */}
            </div>
            <div className="w-full flex justify-center">
            <Pagination
                    total={10}
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

export default BlogArticle;
