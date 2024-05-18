// import React, { useContext, useEffect, useState } from 'react'
// import HeaderAdmin from '../components/header/HeaderAdmin'
// import { Button, Input, Select, SelectItem, Switch } from '@nextui-org/react'
// import { v4 as uuidv4 } from 'uuid';
// import Swal from 'sweetalert2';
// import { getArticleList, insertArticle } from '../supabase/SupabaseCrud';
// import { AyahContext } from '../context/AyahHadisContext';
// import toast from 'react-hot-toast';
// import { useLocation } from 'react-router-dom';

// const FormDataArticle = () => {
//   const { user } = useContext(AyahContext);
//   const categories = [{
//     label: 'Ibadah'
//   }, {
//     label: 'Muamalah'
//   }, {
//     label: 'Motivasi'
//   }]
//   const [isLoading, setIsLoading] = useState(true);
//   const path = useLocation()
//   const title = sessionStorage.getItem('title');
//   const [isPublish, setIsPublish] = useState(true);
//   const desc = sessionStorage.getItem('desc');
//   const [imgValue, setImgValue] = useState();
//   const [selectedItem, setSelectedItem] = useState([]);
//   console.log(path.hash.slice(1));
//   useEffect(() => {
//     if (path.hash) {
//       const getArticle = async() => {
//         const {data, error} = await getArticleList(null, path.hash.slice(1));
//         if (error) {
//             console.log(error.message);
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Oops...',
//                 text: 'Something went wrong, please refresh page!',
//             })
//             } else {
//               const d = data[0]
//                 setImgValue(d.image);
//                 setIsPublish(d.isPublish)
//                 setTimeout(() => {
//                     setIsLoading(false)
//                 }, 3000);
//                 }
//     }
//     getArticle();
//     }
//   },[path.hash]);
//   const handleImage = (e) => setImgValue(e.target.files[0]);
//   const handleSelect = (e) => {
//     const value = e.target.value;
//     setSelectedItem([value]);
//   }
//   console.log(selectedItem);
//     const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("im clicked");
//     let imgUrl;
//     let publishDate;
//     if (!imgValue || selectedItem.length === 0) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Please fill all the fields',
//       })
//       return;
//     } else {

//       if (!isPublish) {
//         publishDate = null
//       } else {
//         publishDate = new Date().toISOString();
//       }
//       imgUrl ="article-thumbnail" + '/' +  uuidv4();
//       const { error } = await insertArticle(user.id, title, desc, imgValue, imgUrl, selectedItem, isPublish, publishDate);
//       if (error) {
//         Swal.fire({
//           icon: 'error',
//           title: 'Oops...',
//           text: 'Something went wrong',
//         })
//       } else {
//         toast.success('Your article has been published');
//         sessionStorage.clear()
//         setTimeout(() => {
//           window.location.replace('/blog/admin');
//         }, 2000);
//       }
//     }
//   }
//   return (
//     <section className='min-h-screen '>
//       <div className='container mx-auto px-4 sm:px-8 py-8'>
//         <div className='flex flex-col mb-5 items-center'>
//           <h2 className='font-semibold text-2xl text-gray-800 dark:text-white'>Article Form</h2>
//           <p className='text-sm text-gray-500 mt-2'><span className='text-red-700 text-base font-semibold'>*</span>Harap lengkapi data dibawah ini terlebih dahulu</p>
//           <div className="border text-center max-w-40 aspect-video p-2 rounded-lg">
//             <h2 className='font-semibold text-sm line-clamp-1'>{title}</h2>
//             <h3 className='font-poppins text-xs line-clamp-2' dangerouslySetInnerHTML={{ __html: desc }} />
//           </div>
//           <form onSubmit={handleSubmit}>
//             <div className="input-data flex flex-col gap-6 mt-6">
//               <div className="img-upload flex gap-3 items-center">
//                 <div className="flex flex-col">
//                   <label className="block mb-2 font-semibold font-poppins" htmlFor="file_Value">Upload Thumbnail<span className='text-red-700 text-base font-semibold'>*</span></label>
//                   <input type="file" onChange={handleImage} className="text-sm text-grey-500 file:mr-5 file transition-all file:py-2 file:px-6 file:rounded-lg file:border-0f ile:text-sm file:font-medium file:bg-blue-50 file:text-foreground-500 hover:file:cursor-pointer hover:file:bg-amber-50 hover:file:text-foreground-800 w-1/2" accept="image/*" required />
//                   <p className="mt-1 text-sm  text-gray-300" id="file_Value_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
//                 </div>
//                 <div className="w-[320px] h-[180px] border rounded-md">
//                   {
//                     imgValue &&
//                     <img src={URL.createObjectURL(imgValue)} alt="thumbnail image" className='min-w-full min-h-full max-w-full max-h-full object-cover' />
//                   }
//                 </div>
//               </div>
//               <Select
//                 // isDisabled={isLoading}
//                 label="Category Article"
//                 selectionMode="multiple"
//                 selectedKeys={selectedItem}
//                 placeholder="Select Category Article (can be more than one)"
//                 value={selectedItem}
//                 onChange={handleSelect}
//                 isRequired
//               >
//                 {categories.map((i) => (
//                   <SelectItem key={i.label} value={i.label} >
//                     {i.label}
//                   </SelectItem>
//                 ))}
//               </Select>


//               <Switch color="success" className='self-end' isSelected={isPublish} onValueChange={setIsPublish}>
//                 Terbitkan Sekarang
//               </Switch>
//               <Button type='submit' variant='ghost' className='hover:!text-white' color='success'>Simpan Data</Button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default FormDataArticle


import React, { useContext, useEffect, useState } from 'react'
import HeaderAdmin from '../components/header/HeaderAdmin'
import { Button, Input, Select, SelectItem, Switch } from '@nextui-org/react'
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';
import { getArticleList, getImage, insertArticle, updateArticle } from '../supabase/SupabaseCrud';
import { AyahContext } from '../context/AyahHadisContext';
import toast, { Toaster } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import { data } from 'autoprefixer';

const FormDataArticle = () => {
  const { user } = useContext(AyahContext);
  const categories = [
    { label: 'Ibadah' },
    { label: 'Muamalah' },
    { label: 'Motivasi' }
  ];

  const [isLoading, setIsLoading] = useState(true);
  const path = useLocation();
  const title = sessionStorage.getItem('title');
  const [isPublish, setIsPublish] = useState(true);
  const desc = sessionStorage.getItem('desc');
  const [imgValue, setImgValue] = useState();
  const [selectedItem, setSelectedItem] = useState([]);
  const [imgUrlOld, setImgUrlOld] = useState();

  useEffect(() => {
    if (path.hash) {
      const getArticle = async () => {
        const { data, error } = await getArticleList(null, path.hash.slice(1));
        if (error) {
          console.log(error.message);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong, please refresh page!',
          });
        } else {
          const d = data[0];
          setImgValue(d.image);
          setIsPublish(d.isPublish);
          setImgUrlOld(d.image)
          setSelectedItem(d.category); // Initialize selected categories
          setIsLoading(false);
        }
      };
      getArticle();
    }
  }, [path.hash]);

  const handleImage = (e) => setImgValue(e.target.files[0]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("I'm clicked");
    setIsLoading(true)
    let imgUrl;
    let publishDate;
    if (!imgValue || selectedItem.length === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill all the fields',
      });
      return;
    } 
    if (!isPublish) {
      publishDate = null;
    } else {
      publishDate = new Date().toISOString();
    }
    imgUrl = "article-thumbnail" + '/' + uuidv4();
    if (path.hash) {
      const { error } = await updateArticle(path.hash.slice(1), user.id, title, imgValue, desc, selectedItem, isPublish, publishDate, imgUrl, imgUrlOld );
      if (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong',
        });
        setIsLoading(false)
        return;
      } else {
        toast.success('Your article has been updated');
        sessionStorage.clear();
        setTimeout(() => {
          window.location.replace('/blog/admin');
        }, 2000);
      }
    } else {
      if (!imgValue) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please upload an image',
        })
        setIsLoading(false)
        return;
      }
      const { error } = await insertArticle(user.id, title, desc, imgValue, imgUrl, selectedItem, isPublish, publishDate);
      if (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong',
        });
        setIsLoading(false)
        return;
      } else {
        toast.success('Your article has been published');
        sessionStorage.clear();
        setTimeout(() => {
          window.location.replace('/blog/admin');
        }, 2000);
      }
    }
    };
    
  console.log(selectedItem);
  return (
    <section className='min-h-screen'>
      <Toaster />
      <div className='container mx-auto px-4 sm:px-8 py-8'>
        <div className='flex flex-col mb-5 items-center'>
          <h2 className='font-semibold text-2xl text-gray-800 dark:text-white'>Article Form</h2>
          <p className='text-sm text-gray-500 mt-2'><span className='text-red-700 text-base font-semibold'>*</span>Harap lengkapi data dibawah ini terlebih dahulu</p>
          <div className="border text-center max-w-40 aspect-video p-2 rounded-lg">
            <h2 className='font-semibold text-sm line-clamp-1'>{title}</h2>
            <h3 className='font-poppins text-xs line-clamp-2' dangerouslySetInnerHTML={{ __html: desc }} />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-data flex flex-col gap-6 mt-6">
              <div className="img-upload flex gap-3 items-center">
                <div className="flex flex-col">
                  <label className="block mb-2 font-semibold font-poppins" htmlFor="file_Value">Upload Thumbnail<span className='text-red-700 text-base font-semibold'>*</span></label>
                  <input type="file" onChange={handleImage} className="text-sm text-grey-500 file:mr-5 file transition-all file:py-2 file:px-6 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-foreground-500 hover:file:cursor-pointer hover:file:bg-amber-50 hover:file:text-foreground-800 w-1/2" accept="image/*"  />
                  <p className="mt-1 text-sm text-gray-300" id="file_Value_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                </div>
                <div className="w-[320px] h-[180px] border rounded-md">
                  {
                    imgValue &&
                    <img src={typeof imgValue === 'string' ? getImage(imgValue):URL.createObjectURL(imgValue)} alt="thumbnail image" className='min-w-full min-h-full max-w-full max-h-full object-cover' />
                  }
                </div>
              </div>
              <Select
                label="Category Article"
                selectionMode="multiple"
                selectedKeys={new Set(selectedItem)}
                placeholder="Select Category Article (can be more than one)"
                onSelectionChange={(keys) => setSelectedItem([...keys])}
                isRequired
              >
                {categories.map((i) => (
                  <SelectItem key={i.label} value={i.label}>
                    {i.label}
                  </SelectItem>
                ))}
              </Select>
              <Switch color="success" className='self-end' isSelected={isPublish} onValueChange={setIsPublish}>
                Terbitkan Sekarang
              </Switch>
              <Button type='submit' variant='ghost' className='hover:!text-white' color='success'>Simpan Data</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default FormDataArticle;
