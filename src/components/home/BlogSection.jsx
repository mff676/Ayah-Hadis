import { useState, useRef } from 'react';
import BlogArticle from './BlogArticle';
import TabsPills from '../TabsPills';
import BlogVideo from './BlogVideo';

const BlogPage = () => {
    const tabsRef = useRef([]);
    const [activeTab, setActiveTab] = useState(0);
    const arrayTabs = ['Artikel Islami', 'Video Dakwah']

    return (
        <div className="mt-32 mb-20">
            <h1 className='font-black text-green-primary text-center text-5xl mb-10'>Blog Islami</h1>
            <div className="flex flex-col ">
                <TabsPills activeTab={activeTab} setActiveTab={setActiveTab} tabsRef={tabsRef} arrayContent={arrayTabs}/>
                <div className="mt-6 mx-auto">
                    {
                    activeTab ===  1 ?      
                   <BlogVideo />
                    :
                    <div>
                        <BlogArticle />
                    </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
