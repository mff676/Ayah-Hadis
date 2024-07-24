import {Link,  NavLink } from 'react-router-dom'
import Logo from '/assets/images/LogoAyah.png'
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import { useContext, useEffect, useState } from 'react';
import { BiLogOut } from 'react-icons/bi';
import { IoPerson, IoSettingsSharp } from 'react-icons/io5';
import { AyahContext } from '../../context/AyahHadisContext';
import { signOut } from '../../supabase/SupabaseAuth';
import { getImage } from '../../supabase/SupabaseCrud';
import Hamburger from 'hamburger-react';
import DrawerNavigation from './DrawerNavigation';
import { PiSignInBold } from "react-icons/pi";
const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const {profiles} = useContext(AyahContext);
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
      setShow(false); 
    } else { // if scroll up show the navbar
      setShow(true);  
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY); 
  };

  const toggleDrawer = inOpen => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
  
    setIsOpen(inOpen)
  }
  
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    // cleanup function
    return () => {
       window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <header className={`flex justify-between items-center shadow-lg transition-all px-3 md:px-16 py-2 font-poppins z-10 bg-white min-w-full sticky  ${show ? 'top-0' : '-top-96'}`}>
      <div className="left-side flex items-center gap-2">
     <div className="md:hidden">
     <Hamburger toggled={isOpen} toggle={setIsOpen}  size={24}/>
     {/* navigation mobile */}
    <DrawerNavigation open={isOpen} toggleDrawer={toggleDrawer} />
     {/* end navigation mobile */}
     </div>
     <NavLink to={'/'}>
      <img src={Logo} alt="Logo Image" className='md:w-16 w-10 cursor-pointer' />
     </NavLink>
      </div>
      <div className="md:hidden">
        {
           profiles === undefined ? 
           <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                showFallback
                className="transition-transform w-8 h-8"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="login" onClick={() => window.location.replace(`/login`)} startContent={<PiSignInBold size={16} className='flex-shrink-0' />}>
                Masuk
              </DropdownItem>
              <DropdownItem key="settings" startContent={<IoSettingsSharp size={16} className='flex-shrink-0' />}>
                Pengaturan
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
           :
      <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                showFallback
                className="transition-transform w-8 h-8"
                src={getImage(profiles.avatar_url, 'avatars')}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{profiles.email}</p>
              </DropdownItem>
              <DropdownItem key="profile" onClick={() => window.location.replace(`/profile/${profiles.id}`)} startContent={<IoPerson size={16} className='flex-shrink-0' />}>
                Akun Saya
              </DropdownItem>
              <DropdownItem key="settings" startContent={<IoSettingsSharp size={16} className='flex-shrink-0' />}>
                Pengaturan
              </DropdownItem>
              <DropdownItem key="logout" className='flex' color="danger" startContent={<BiLogOut size={16} className='flex-shrink-0'/>} onClick={() => signOut()}>
               Keluar
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        }
      </div>
      <ul className='md:flex gap-10 items-center font-semibold text-grey-secondary hidden'>
        <nav className='flex gap-10'>
          <NavLink to={'/'} className='cursor-pointer'>Beranda</NavLink>
          <NavLink to={'/quran'} className='cursor-pointer'>Quran</NavLink>
          <NavLink to={'/hadis'} className='cursor-pointer'>Hadist</NavLink>
          <NavLink to={'dzikir'} className='cursor-pointer'>Dzikir</NavLink>
          <NavLink to={'/doa'} className='cursor-pointer'>Doa</NavLink>
        </nav>
        <li className='ms-5 cursor-pointer'>
          {
            profiles === undefined ? 
            <p><Link to={'/register'} className='hover:underline hover:text-blue-500'>Daftar</Link> | <Link to={'/login'} className='hover:underline hover:text-blue-500'>Masuk</Link></p>
            :
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                showFallback
                className="transition-transform w-10 h-10"
                src={getImage(profiles.avatar_url, 'avatars')}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{profiles.email}</p>
              </DropdownItem>
              <DropdownItem key="profile" onClick={() => window.location.replace(`/profile/${profiles.id}`)} startContent={<IoPerson size={16} className='flex-shrink-0' />}>
                Akun Saya
              </DropdownItem>
              <DropdownItem key="settings" startContent={<IoSettingsSharp size={16} className='flex-shrink-0' />}>
                Pengaturan
              </DropdownItem>
              <DropdownItem key="logout" className='flex' color="danger" startContent={<BiLogOut size={16} className='flex-shrink-0'/>} onClick={() => signOut()}>
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

export default MainHeader