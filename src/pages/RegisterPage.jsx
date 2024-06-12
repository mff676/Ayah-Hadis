import { Button, Input, Radio, RadioGroup } from '@nextui-org/react'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { signUp } from '../supabase/SupabaseAuth'
import Swal from 'sweetalert2'

const RegisterPage = () => {
  const handleVisible = (e) => {
    e.preventDefault();
    setIsVisible(!isVisible)
  }
  const handleVisible2 = (e) => {
    e.preventDefault();
    setIsVisible2(!isVisible2)
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !password || !confirmPass || !fullName || !role) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill all input',
        })
        return;
      }
    if (confirmPass !== password) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password not match',
      })
      return;
    }
    const error = await signUp(email, password, fullName, role)
    if (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
        })
        return;
        } else {
          toast.success('You have been registered, please check your email for confirm');
          setTimeout(() => {
            window.location.replace('/')
          }, 2000);
        }
  }
  const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [email]);

  return (
    <section className='h-screen bg-kakba bg-center object-cover'>
    <Toaster />
    <div className=" min-h-full w-full flex justify-center items-center bg-black/45">
        <div className="flex justify-center items-center w-full h-full py-10">
          <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 backdrop-blur bg-white/20">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center text-white  font-bold leading-tight tracking-tight md:text-2xl">
                Daftarkan Diri Anda!
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <Input variant='faded' type="text" label='Nama Lengkap' value={fullName} onValueChange={setFullName} isRequired />
                <Input variant='faded' type="email" label='Email' value={email} onValueChange={setEmail} isInvalid={isInvalid} color={isInvalid && 'danger'} errorMessage={isInvalid && "Please enter a valid email"} isRequired />
                <Input variant='faded' type={!isVisible ? 'password' : 'text'} label='Password' value={password} onValueChange={setPassword} isRequired endContent={
                  !isVisible ?
                    <button className='focus:outline-none' onClick={handleVisible}>
                      <FaEye size={20} color={'gray'} />
                    </button>
                    :
                    <button className='focus:outline-none' onClick={handleVisible}>
                      <FaEyeSlash size={20} color={'gray'} />
                    </button>

                } />
                <Input variant='faded' type={!isVisible2 ? 'password' : 'text'} label='Confirm Password' value={confirmPass} onValueChange={setConfirmPass} isRequired endContent={
                  !isVisible2 ?
                    <button className='focus:outline-none' onClick={handleVisible2}>
                      <FaEye size={20} color={'gray'} />
                    </button>
                    :
                    <button className='focus:outline-none' onClick={handleVisible2}>
                      <FaEyeSlash size={20} color={'gray'} />
                    </button>

                } />
                <div className="flex flex-col gap-2 items-center">
                <label className='text-white font-poppins font-semibold text-xl'>Anda Adalah</label>
                <RadioGroup value={role} onValueChange={setRole} orientation='horizontal' className='text-white'>
                  <Radio  value='guru'><span className='text-white'>Penulis Artikel</span></Radio>
                  <Radio value='murid'><span className="text-white">Penuntut Ilmu</span></Radio>
                </RadioGroup>
                </div>
                <Button type='submit' color='success' className='w-full text-white'>Daftar</Button>
              </form>
              <p className='text-xs font-poppins text-right'>Sudah Memiliki Akun? <Link to={'/login'} className='underline cursor-pointer hover:text-blue-600'>Masuk Sekarang!</Link></p>
            </div>
          </div>
        </div>
      </div>
    </section>)
}

export default RegisterPage