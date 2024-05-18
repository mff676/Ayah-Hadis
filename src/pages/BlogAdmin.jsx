import React, { useContext, useEffect, useState } from 'react'
import HeaderAdmin from '../components/header/HeaderAdmin'
import { useNavigate } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
import { AyahContext } from '../context/AyahHadisContext'
import { getArticleList } from '../supabase/SupabaseCrud'
import CardBlogAdmin from '../components/admin/CardBlogAdmin'

const BlogAdmin = () => {
  const { user } = useContext(AyahContext);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const getArticleByUser = async () => {
    const { data, error } = await getArticleList(user.id);
    if (error) {
      console.log(error.message);
    }
    else {
      setData(data)
    }
  }
  
  useEffect(() => {
    if (user) {
      getArticleByUser()
    }
  }, [user])
  console.log(data);
  return (
  
      <section className='min-h-screen p-5'>
        <h2 className='text-2xl text-center'>Artikel Anda</h2>
        <div className="card-list grid grid-cols-3 p-5">
          {
            data.map((i, index) => (
              <CardBlogAdmin key={index} d={i} user={user}/>
            ))
          }
        </div>
        <div className="fixed flex justify-end items-end right-12 bottom-5 gap-2">
          <button title='Add Article' className="p-4 text-background bg-green-primary rounded-full border-none cursor-pointer" onClick={() => navigate('/blog/admin/article-form')}>
            <FaPlus />
          </button>
        </div>
      </section>
  )
}

export default BlogAdmin