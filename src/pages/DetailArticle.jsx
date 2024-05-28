import React, { useEffect, useState } from 'react'
import { HiPencilAlt } from 'react-icons/hi';
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { getArticleList, getImage } from '../supabase/SupabaseCrud';
import Swal from 'sweetalert2';
import LoadingBar from "../components/LoadingBar"
import {formatDate} from "../utils/StringManagement"
import HTMLReactParser from 'html-react-parser/lib/index';
const DetailArticle = () => {
    const path = useLocation();
    const {id} = useParams();
    const navigate = useNavigate();
    const [article, setArticle] = useState([]);
    const data = article[0]
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const getArticle = async() => {
            const {data, error} = await getArticleList(null, id);
            if (error) {
                console.log(error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong, please refresh page!',
                })
                } else {
                    setArticle(data);
                    setTimeout(() => {
                        setIsLoading(false)
                    }, 3000);
                    }
        }
        getArticle();
    },[id]);
    if (isLoading) {
        return <LoadingBar />
    }
    return (
            <section className='min-h-screen p-5'>
                <div className='container mx-auto px-4 sm:px-8 py-8'>
                    <div className='flex flex-col mb-5 gap-5 items-center'>
                        <div className="flex gap-5">
                            {
                                data.category.map((i, index) => (
                            <div className="bg-green-700 py-1 px-5 rounded-2xl text-white-text" key={index}>
                                <h3 className='text-sm'>{i}</h3>
                            </div>
                                ))
                            }
                        </div>
                        <div className="title-article flex flex-col gap-2">
                            <h2 className='text-4xl font-medium text-center'>{data.title}</h2>
                            <p className='text-xs text-grey-secondary text-center'>Posted by <span>{}</span>{data.isPublish ? <>on <span>{formatDate(data.publish_date)}</span></> : 'not published yet'}</p>
                        </div>
                        <div className="image-article min-w-full  h-80 flex justify-center">
                            <img src={getImage(data.image)} alt="image" className='min-h-full max-h-full object-cover rounded' />
                        </div>
                        <div className="flex justify-center">
                            <p>{HTMLReactParser(data.content)}</p>
                            </div>
                    </div>
                    {
                        path.hash &&
                        <div className="fixed flex justify-end items-end right-12 bottom-5 gap-2">
                            <button title='Edit Article' className="p-4 text-background bg-green-primary rounded-full border-none cursor-pointer" onClick={() => navigate(`edit-article#${path.hash.slice(1)}`)}>
                                <HiPencilAlt />
                            </button>
                        </div>
                    }
                </div>
            </section>
    )
}

export default DetailArticle