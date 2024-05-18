import HTMLReactParser from 'html-react-parser/lib/index'
import { Link } from 'react-router-dom'
import { formatDate } from '../../utils/StringManagement';

const CardBlogAdmin = ({d, user}) => {
  return (
    <Link to={`/blog/article/${d.id}#${user.id}`} className="no-underline">
    <div className="text-gray-800 w-80 h-52 p-5 bg-white rounded-lg shadow hover:shadow-lg hover:scale-105 transition-all">
      <div className="h-full flex flex-col gap-2.5">
        <div className="card-header">
          <h4 className="text-lg font-semibold overflow-hidden text-ellipsis line-clamp-2">
            {d.title}
          </h4>
          <p className="text-gray-600">
            {/* {day}, {date} {month} {year} */}
            {d.isPublish ? formatDate(d.publish_date, true) +' - Published' : 'Arsip'}
          </p>
        </div>
        <div className="flex-grow overflow-hidden">
          <p className='text-ellipsis line-clamp-4'>{HTMLReactParser(d.content)}</p>
        </div>
      </div>
    </div>
  </Link>  )
}

export default CardBlogAdmin