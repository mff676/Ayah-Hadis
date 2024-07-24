import CardBlog from './CardBlog';
import PropTypes from "prop-types"

const BlogVideo = ({video}) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full mb-5'>
            {video && video.items && video.items.length > 1 && video.items.map((item, index) => (
                <CardBlog key={index} d={item} page={1} />
            ))}
        </div>
    );
}
BlogVideo.propTypes = {
    video: PropTypes.object.isRequired
}
export default BlogVideo;
