import { FaClock } from 'react-icons/fa'
import Banner from '/assets/images/Kajian2.png'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/StringManagement';

const CardBlog = ({page, d}) => {
    const [image,setImage] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [id, setId] = useState(null)
  
    useEffect(() => {
        if (page === 0) {
            setImage('null');
            setTitle("null")
            setDate("null")
        }
        if (page === 1) {
            const dataYt = d.snippet
            setImage(dataYt.thumbnails.medium.url);
            // Remove hastag from title
            const cleanedTitle = dataYt.title.replace(/#[^\s]+/g, '');
            setTitle(cleanedTitle);
            setDate(formatDate(dataYt.publishedAt));
            setId(d.id.videoId)
        }
    },[ page])
  return (
    <Link to={`/blog/watch/video/${id}`}>
    <div className="card shadow-md rounded-lg max-w-[32rem] hover:shadow-2xl hover:scale-105 duration-300 transition-all cursor-pointer">
    <div className="card-header">
        <img src={image} alt="Banner" className='rounded-t-lg max-w-full object-cover  w-[320px] h-[170px]' />
    </div>
    <div className="card-body p-5">
        <div className="publish-date">
            <p className='text-green-primary text-[12px] flex items-center font-montserrat gap-2 font-medium'><FaClock className='mb-[0.5px]' size={12} />{date}</p>
        </div>
        <h3 className='font-poppins line-clamp-2' dangerouslySetInnerHTML={{ __html: title }} />
    </div>
</div>
    </Link>
  )
}

export default CardBlog