import React, { useEffect, useState } from 'react'

import { Button } from '@nextui-org/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getArticleList } from '../supabase/SupabaseCrud';
import Swal from 'sweetalert2';
import HTMLReactParser from 'html-react-parser/lib/index';
import LoadingBar from '../components/LoadingBar';

const FormArticle = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [initializing, setInitializing] = useState(true)
  const path = useLocation();
  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeDesc = (e) => setDesc(e.target.innerHTML);
  console.log(sessionStorage.getItem('title') && sessionStorage.getItem('desc') ? true:false);
  useEffect(() => {
    if (path.hash) {
      const getArticle = async() => {
        const {data, error} = await getArticleList(null, path.hash.slice(1));
        if (error) {
            console.log(error.message);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong, please refresh page!',
            })
            } else {
                setTitle(data[0].title);
                setDesc(data[0].content)
                setTimeout(() => {
                    setInitializing(false)
                }, 3000);
                }
    }
    getArticle();
    }
    setInitializing(false)
  }, [path.hash])
  const submitData = (e) => {
    e.preventDefault();
    setIsLoading(true);
    sessionStorage.setItem('title', title)
    sessionStorage.setItem('desc', desc)
    if (path.hash) {
      navigate(`data-form#${path.hash.slice(1)}`)
    } else {
      navigate('data-form');
    }
    setIsLoading(false)
  };
  if (initializing) {
    return <LoadingBar />
  }
  return (
    <section className='min-h-screen'>
        <form onSubmit={submitData} className="flex flex-col gap-2 p-2">
      <div className="w-full">
        <input 
          type="text" 
          className="w-full p-3 bg-transparent border border-gray-600 text-lg rounded-lg text-gray-900" 
          placeholder="Masukan Judul Artikel"
          onChange={onChangeTitle} 
          value={title}
        />
      </div>
      <div className="h-96 p-2 border border-gray-600 rounded-lg">
        <p 
          contentEditable 
          data-placeholder="Tuangkan Pikiran Anda Dengan Ilmu..."
          className="h-full outline-none text-lg text-gray-900" 
          onInput={onChangeDesc}
        >{HTMLReactParser(desc)}</p>
      </div>
      <div className="flex justify-end">
        <Button variant='ghost' color='success' radius='full' className='w-full' onClick={submitData} isLoading={isLoading}>Continue</Button>
      </div>
    </form>
    </section>
  )
}

export default FormArticle