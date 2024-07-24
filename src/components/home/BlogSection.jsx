import { useState, useRef, useEffect } from 'react';
import BlogArticle from './BlogArticle';
import TabsPills from '../TabsPills';
import BlogVideo from './BlogVideo';
import CardBlogSkeleton from '../skeleton/CardBlogSkeleton';
import { getYoutubeList } from '../../utils/data';
import { getArticleList } from '../../supabase/SupabaseCrud';

const BlogPage = () => {
    const tabsRef = useRef([]);
    const [activeTab, setActiveTab] = useState(0);
    const arrayTabs = ['Artikel Islami', 'Video Dakwah']
    const [initializing, setInitializing] = useState(true);
    const [dataArticle, setDataArticle] = useState([]);
    const channelId = ['UCX-4mrOc5r691SzDhHtkOgw', 'UCZHbLWGrq43F0-5Ef37CpWQ', 'UClCl3I9DfH4HUty22wPF9eg', 'UC3_QdDQnRVRDJzq56JTO_Zw'];
    const [video, setVideo] = useState([]);
    const [itemsArticle, setItemsArticle] = useState(1)
    const itemSkeleton = []

    for (let i = 0; i < 4; i++) {
        itemSkeleton.push(<CardBlogSkeleton />)
      }
  
      useEffect(() => {
    }, []);
    useEffect(() => {
        const getDataBlog = async () => {
            const randomIndex = Math.floor(Math.random() * channelId.length);
            getYoutubeList(setVideo, channelId[randomIndex]);
            const { data, count } = await getArticleList();
            setDataArticle(data);
            setItemsArticle(count);
        };
        getDataBlog().then(() => {
            setTimeout(() => {
                setInitializing(false)
            }, 2000);
        })
    }, []);
    return (
        <div className="mt-32 mb-20">
            <h1 className='font-black text-green-primary text-center text-5xl mb-10'>Blog Islami</h1>
            <div className="flex flex-col ">
                <TabsPills activeTab={activeTab} setActiveTab={setActiveTab} tabsRef={tabsRef} arrayContent={arrayTabs}/>
                <div className="mt-6 mx-auto">
                {initializing ? (
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full mb-5'>
                            {itemSkeleton}
                        </div>
                    ) : (
                        <>
                            {activeTab === 1 ? (
                                <BlogVideo video={video} />
                            ) : (
                                <BlogArticle data={dataArticle} totalData={itemsArticle}/>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
