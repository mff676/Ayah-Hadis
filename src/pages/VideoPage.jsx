import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getVideoYoutube, getYoutubeList } from '../utils/data';
import { formatDate } from '../utils/StringManagement';
import LoadingBar from '../components/LoadingBar';

const VideoPage = () => {
  const [isShow, setIsShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  const [videoDetail, setVideoDetail] = useState(undefined);
  const [videoList, setVideoList] = useState(undefined);
  const arraySearch = ['ust Khalid Basalamah', 'Kajian Ust Khalid Basalamah', 'Kajian Ust Yazid bin Abdul Qodir Jawas', 'Kajian salaf', 'ust Beni Sarbeni', 'murottal quran merdu', 'ust Syafiq Basalamah', 'Ust Firanda Andirja']
  const { id } = useParams();
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * arraySearch.length); 
    
    getVideoYoutube(setVideoDetail, id).then(() => (
      getYoutubeList(setVideoList, "", arraySearch[randomIndex]).then(() => (
        setTimeout(() => {
          setIsLoading(false)
        }, 3000)
      ))
    ));
  }, [id]);

  if (isLoading) {
    return <LoadingBar />
  }

  return (
    <section className='min-h-screen flex justify-center items-center'>
      {
        videoDetail === undefined ?
          <div className='flex justify-center items-center'>
            <h1 className='text-4xl font-poppins font-semibold'>Video Not Found</h1>
          </div>
          :
          <div className='py-10 px-5 flex flex-col lg:flex-row justify-center items-start w-full'>
            <div className="left-side w-full lg:w-[80%] lg:mr-8">
              <div className="relative overflow-hidden w-full pt-[56.25%] mb-10">
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className='rounded-lg absolute w-full h-full inset-0' 
                />
                </div>
              <h2 className='font-semibold text-2xl mb-5' dangerouslySetInnerHTML={{ __html: videoDetail.snippet.title }} />
              <div className={`desc-box max-w-full ${isShow ? 'h-fit' : 'h-36'}  shadow-lg rounded-xl bg-gray-300 p-5`}>
                <p className='text-sm mb-1'>{formatDate(videoDetail.snippet.publishedAt)}</p>
                <p className={`text-sm ${!isShow && 'line-clamp-2'}`} dangerouslySetInnerHTML={{ __html: videoDetail.snippet.description }} />
                <div className="flex items-end h-1/2 pb-2">
                  <p onClick={() => setIsShow(!isShow)} className={`text-xs font-medium ${isShow && 'mt-5'} cursor-pointer`}>{isShow ? 'Show Less' : 'Show More'}</p>
                </div>
              </div>
            </div>
            <div className="right-side lg:w-1/2 p-5">
              <div className="card-list w-full flex flex-col gap-6">
                {
                  videoList.items.map((i, index) => (
                    <Link key={index} to={`/blog/watch/video/${i.id.videoId}`} className='cursor-pointer w-full'>
                    <div className="card flex flex-col sm:flex-row gap-5">
                      <img src={i.snippet.thumbnails.medium.url} alt='image thumbnail' className='aspect-video w-full min-w-[230px]  sm:min-h-[140px] sm:max-h-[180px] sm:min-w-[280px] sm:max-w-[320px] rounded-xl object-cover' />
                      <div className="flex flex-col gap-1">
                        <h2 className='font-medium text-sm' dangerouslySetInnerHTML={{ __html: i.snippet.title }} />
                        <div className="detail">
                          <h3 className='text-gray-500 text-sm'>{i.snippet.channelTitle}</h3>
                          <h3 className='text-gray-500 text-sm'>{formatDate(i.snippet.publishedAt)}</h3>
                        </div>
                      </div>
                    </div>
                  </Link>
                  ))
                }
              </div>
            </div>
          </div>
      }
    </section>
  );
};

export default VideoPage;
