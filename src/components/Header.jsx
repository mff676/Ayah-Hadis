import { Link, NavLink } from 'react-router-dom'
import Logo from '/assets/images/LogoAyah.png'
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import { useContext, useEffect, useState } from 'react';
import { BiLogOut } from 'react-icons/bi';
import { IoPerson, IoSettingsSharp } from 'react-icons/io5';
import { AyahContext } from '../context/AyahHadisContext';
const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const {user} = useContext(AyahContext);
  console.log(user);
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
      setShow(false); 
    } else { // if scroll up show the navbar
      setShow(true);  
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY); 
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    // cleanup function
    return () => {
       window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <header className={`flex justify-between items-center shadow-lg transition-all px-16 py-2 font-poppins z-10 bg-white w-full sticky  ${show ? 'top-0' : '-top-96'}`}>
     <NavLink to={'/'}>
      <img src={Logo} alt="Logo Image" className='w-16 cursor-pointer' />
     </NavLink>
      <ul className='flex gap-10 items-center font-semibold text-grey-secondary'>
        <nav className='flex gap-10'>
          <NavLink to={'/'} className='cursor-pointer'>Beranda</NavLink>
          <NavLink to={'/quran'} className='cursor-pointer'>Quran</NavLink>
          <NavLink to={'/hadis'} className='cursor-pointer'>Hadist</NavLink>
          <NavLink to={'dzikir'} className='cursor-pointer'>Dzikir</NavLink>
          <NavLink to={'/doa'} className='cursor-pointer'>Doa</NavLink>
        </nav>
        <li className='ms-5 cursor-pointer'>
          {
            user === undefined ? 
            <p><Link to={'/register'} className='hover:underline hover:text-blue-500'>Daftar</Link> | <Link to={'/login'} className='hover:underline hover:text-blue-500'>Masuk</Link></p>
            :
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                showFallback
                className="transition-transform w-10 h-10"
                src="https://i.pravatar.cc/150?u=a042581f4e2902670"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{user.email}</p>
              </DropdownItem>
              <DropdownItem key="settings" startContent={<IoPerson size={16} className='flex-shrink-0' />}>
                Akun Saya
              </DropdownItem>
              <DropdownItem key="settings" startContent={<IoSettingsSharp size={16} className='flex-shrink-0' />}>
                Pengaturan
              </DropdownItem>
              <DropdownItem key="logout" className='flex' color="danger" startContent={<BiLogOut size={16} className='flex-shrink-0'/>}>
               Keluar
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          }
        </li>
      </ul>
    </header>
  )
}

export default Header