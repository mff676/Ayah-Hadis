import React, { useState } from 'react'
import { Button, Input } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { signIn } from '../supabase/SupabaseAuth';
import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';

const LoginPage = () => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const isInvalid = React.useMemo(() => {
      if (email === "") return false;
  
      return validateEmail(email) ? false : true;
    }, [email]);

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (!email || !password) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill all the fields',
            })
            return;
        }
        const { error, user, session } = await signIn(email, password)
        if (!error) {
          if (user && session) {
        toast.success("Login Successful")
            setTimeout(() => {
                window.location.replace('/')
            }, 3000);
          }
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong, please try again'
          })
        }
    }

    const handleVisible = (e) => {
        e.preventDefault();
        setIsVisible(!isVisible)
    }
  return (
    <section className='h-screen bg-kakba bg-center object-cover'>
            <Toaster />
        <div className=" h-full w-full bg-black/45">
            <div className="flex justify-center items-center w-full h-full">
            <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 backdrop-blur bg-white/20">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl text-center font-bold leading-tight tracking-tight md:text-2xl">
                    Masuk
                </h1>
                <form className="space-y-4 md:space-y-6">
                    <Input variant='faded' type="email" label='Email' value={email} onValueChange={setEmail} isInvalid={isInvalid} color={isInvalid && 'danger'} errorMessage={isInvalid && "Please enter a valid email"}/>
                    <Input variant='faded' type={!isVisible ?'password':'text'} label='Password' value={password} onValueChange={setPassword}  endContent={
                        !isVisible ?
                        <button className='focus:outline-none' onClick={handleVisible}>
                            <FaEye size={20} color={'gray'}/>
                        </button>
                        :
                        <button className='focus:outline-none' onClick={handleVisible}>
                            <FaEyeSlash size={20} color={'gray'}/>
                        </button>

                    }/>
                    <Button color='success' className='w-full' onClick={handleSubmit}>Masuk</Button>
                </form>
                <p className='text-xs font-poppins text-right'>Belum Memiliki Akun? <Link to={'/register'} className='underline cursor-pointer hover:text-blue-600'>Daftar Sekarang!</Link></p>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LoginPage