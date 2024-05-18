import React, { useEffect, useState } from 'react'
import HeaderAdmin from '../components/header/HeaderAdmin'
import { Button, Input, Select, SelectItem } from '@nextui-org/react'
import { deleteArticle, getArticleList } from '../supabase/SupabaseCrud'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

const DetailEditPage = () => {
    const [dataPage, setData] = useState([]);
    const path = useLocation();
    const {id} = useParams();
    const navigate = useNavigate()
    useEffect(() => {
        const getDetailArticle = async () => {
            const {data,error} = await getArticleList(path.hash.slice(1), id);
            if (error) {
                console.log(error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong, please refresh this page!',
                })
                return;
            }
            setData(data[0]);
        }
        getDetailArticle();
    },[id]);
    const handleDelete = async() => {
        const {isConfirmed} = await Swal.fire({
            title: 'Apakah Kamu Yakin?',
            text: 'Data akan dihapus secara permanen!',
            icon: 'warning',
            showCancelButton: true,
            })
            if (isConfirmed) {
                const {error} = await deleteArticle(dataPage.id, dataPage.image)
                if (error) {
                    console.log(error.message);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong, please refresh this page!',
                        })
                        return;
                        }
                        Swal.fire({
                            icon: 'success',
                            title: 'Berhasil!',
                            text: 'Data berhasil dihapus!',
                            })
                            window.location.href = '/blog/admin';

    }
}
    console.log(dataPage);
    return (
        <section className='min-h-screen'>
            <div className='container mx-auto px-4 sm:px-8 py-8'>
                <div className='flex flex-col mb-5 gap-7 items-center'>
                    <h2 className='font-semibold text-2xl text-gray-800 dark:text-white'>Article Form</h2>
                    <div className="flex flex-col w-1/2 gap-1">
                        <label>Judul Artikel</label>
                        <Input
                            isDisabled
                            value={dataPage.title}
                            labelPlacement="outside"
                        />
                    </div>
                    <div className="flex flex-col w-1/2 gap-1">
                        <label>Penulis</label>
                        <Input
                            isDisabled
                            value={"akakakakak"}
                            labelPlacement="outside"
                        />
                    </div>
                    <div className="flex gap-2 w-1/2">
                <Button className='w-1/2' color='danger' variant='ghost' onClick={handleDelete}>Buang</Button>
                <Button className='w-1/2' color='primary' variant='ghost' onClick={() => navigate(`/blog/admin/article-form#${id}`)}>Edit</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailEditPage