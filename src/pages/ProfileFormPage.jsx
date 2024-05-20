import { Button, Input } from '@nextui-org/react'
import React, { useContext, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Swal from 'sweetalert2';
import { updateProfile } from '../supabase/SupabaseCrud';
import { AyahContext } from '../context/AyahHadisContext';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';


const ProfileFormPage = () => {
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [file, setFile] = useState([]);
    const { user } = useContext(AyahContext);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        if (user === undefined) {
            window.location.href = '/login'
        }
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        if (!username || !phoneNumber) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Field is empty!',
            })
            setIsLoading(false)
            return;
        }
        if (!file) {
            Swal.fire({
                icon: 'warning',
                title: "You haven't upload an Image",
                showConfirmButton: true,
            })
            setIsLoading(false)
            return;
        }
        const { error } = await updateProfile(user.id, username, user.user_metadata.fullName, uuidv4(), phoneNumber, user.user_metadata.role, file);
        if (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message,
            })
            setIsLoading(false)
            return;
        }
        toast.success('Profile Updated Successfully',)
        setTimeout(() => {
            window.location.replace('/')
        }, 5000);
    }
    const handleImage = (e) => setFile(e.target.files[0]);
    return (
        <section className='h-screen'>
            <Toaster />
            <div className=" h-full w-full ">
                <div className="flex justify-center items-center w-full h-full">
                    <div className="w-full rounded-lg shadow-xl border md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight md:text-2xl">
                                Lengkapi Profil Kamu Dulu Yuk!
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <Input isDisabled={isLoading} variant='faded' type="text" label='Username' value={username} onValueChange={setUsername} isRequired />
                                <Input isDisabled={isLoading} variant='faded' type="number" label='Nomor Telepon' value={phoneNumber} onValueChange={setPhoneNumber} isRequired />
                                <label className="block mb-2 font-semibold font-poppins" htmlFor="file_Value">Unggah Foto Profil Kamu<span className='text-red-700 text-base font-semibold'>*</span></label>
                                <input disabled={isLoading} type="file" onChange={handleImage} className="text-sm text-grey-500 file:mr-5 file:duration-150 w-full file:transition-all file:py-2 file:px-6 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-foreground-500 hover:file:cursor-pointer hover:file:bg-slate-500  hover:file:text-white" accept="image/*" />
                                <Button isLoading={isLoading} color='success' variant='ghost' type='submit' radius='full' className='w-full hover:!text-white'>Simpan Profil</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfileFormPage