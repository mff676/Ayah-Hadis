import React, { useEffect, useState } from 'react'
import CardBlog from './CardBlog'
import { getYoutubeList } from '../../utils/data';

const BlogVideo = () => {
    const channelId = ['UCX-4mrOc5r691SzDhHtkOgw', 'UCZHbLWGrq43F0-5Ef37CpWQ', 'UClCl3I9DfH4HUty22wPF9eg', 'UC3_QdDQnRVRDJzq56JTO_Zw'];
    const [video, setVideo] = useState([]);
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * channelId.length);
        getYoutubeList(setVideo, channelId[randomIndex])
    },[]);
    console.log(video.length > 0 || video !== undefined || video !== null && video.items.length > 1 );
  return (
    <div className='grid grid-cols-4 gap-4 w-full mb-5'>
        {video && video.items && video.items.length > 1 && video.items.map((i, index) => (
        <CardBlog key={index} d={i} page={1} />
      ))}
    </div>
  )
}

export default BlogVideo