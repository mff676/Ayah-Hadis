import { Avatar } from '@nextui-org/react'
import { getImage } from '../../supabase/SupabaseCrud'
import { useContext } from 'react'
import { AyahContext } from '../../context/AyahHadisContext'
const HeaderAdmin = () => {
  const {profiles} = useContext(AyahContext)
  return (
    <header className='py-4 px-6 shadow-lg'>
        <div className="container flex justify-between items-center">
            <h2 className='text-lg font-poppins font-semibold text-green-primary'>AyahAdmin</h2>
            <button>
           <Avatar 
              isBordered
              as="button"
              showFallback
              className="transition-transform w-10 h-10"
              src={getImage(profiles.avatar_url, 'avatars')}
              />
              </button>
        </div>
    </header>
  )
}

export default HeaderAdmin