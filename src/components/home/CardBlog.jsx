import React, { useEffect, useState } from 'react';
import { FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/StringManagement';
import { getImage } from '../../supabase/SupabaseCrud';

const CardBlog = ({ page, d }) => {
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [link, setLink] = useState('');

    useEffect(() => {
        if (page === 0) {
            setImage(getImage(d.image));
            setTitle(d.title)
            setDate(formatDate(d.publish_date));
            setLink(`/blog/article/${d.id}`)
        }
        if (page === 1) {
            const dataYt = d.snippet
            setImage(dataYt.thumbnails.medium.url);
            // Remove hastag from title
            const cleanedTitle = dataYt.title.replace(/#[^\s]+/g, '');
            setTitle(cleanedTitle);
            setDate(formatDate(dataYt.publishedAt));
            setLink(`/blog/watch/video/${d.id.videoId}`)
        }
    }, [page]);

    return (
        <Link to={link}>
            <div className="card shadow-md rounded-lg h-72 lg:h-72 pb-24 max-w-full hover:shadow-2xl hover:scale-105 duration-300 transition-all cursor-pointer">
                <div className="card-header">
                    <img src={image} alt="Banner" className='rounded-t-lg max-w-full object-cover w-full h-48 sm:h-40 md:h-48 ' />
                </div>
                <div className="card-body p-5">
                    <div className="publish-date">
                        <p className='text-green-primary text-xs sm:text-sm flex items-center gap-1 font-montserrat font-medium'><FaClock size={14} />{date}</p>
                    </div>
                    <h3 className='font-poppins line-clamp-2 text-sm' dangerouslySetInnerHTML={{ __html: title }} />
                </div>
            </div>
        </Link>
    );
}

export default CardBlog;
