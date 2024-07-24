import { IoCopyOutline, IoShareOutline, IoStarOutline, IoStar } from 'react-icons/io5';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { useContext, useState, useEffect } from 'react';
import { AyahContext } from '../../context/AyahHadisContext';
import { insertFavorite, deleteFavorite } from '../../supabase/SupabaseCrud'; // Asumsikan Anda memiliki fungsi deleteFavorite
const CardReadHadist = ({ h, lastIndex, hadis, favoriteList }) => {
    const { user } = useContext(AyahContext);
    const [isInsert, setIsInsert] = useState(false);
    useEffect(() => {
        const isFavorited = favoriteList.some(fav => fav.hadis_number === h.number);
        setIsInsert(isFavorited);
    }, [favoriteList, h.number]);

    const handleCopy = () => {
        navigator.clipboard.writeText(`${h.arab}\n${h.id}\n\n\n\n\nMau baca artikel lainnya? atau mau membaca Al-Quran atau hadist? semua nya ada di https://ayahHadis.com, website islami terlengkap di Indonesia`);
        toast.success('Berhasil di copy');
    };

    const handleFavorite = async () => {
        if (!user) {
            toast.error("Please Login First", {
                duration: 2000
            })
            setTimeout(() => {
                window.location.replace('/login')
            }, 2200);
            return;
        }
        if (isInsert) {
            // Call delete function
            const { data, error } = await deleteFavorite(user.id, h.number);
            if (error) return toast.error(error.message);
            toast.success(`Hadist ${h.number} berhasil dihapus dari favorit`);
        } else {
            // Call insert function
            const { data, error } = await insertFavorite(user.id, hadis.name, h.number);
            if (error) return toast.error(error.message);
            toast.success(`Hadist ${h.number} berhasil dimasukkan ke favorit`);
        }
        setIsInsert(!isInsert);
    };

    return (
        <div className={`card ${!lastIndex && 'border-b-1'} pb-10 mt-11 text-center`}>
            <div className="card-header mb-10">
                <h3 className="font-medium text-center text-2xl mb-5">{`#Hadist ke-${h.number}`}</h3>
                <div className="flex justify-center gap-2 items-center">
                    <motion.button whileTap={{ scale: .7 }} className='hover:bg-slate-200 p-2 rounded-full' title='copy' onClick={handleCopy}>
                        <IoCopyOutline size={24} />
                    </motion.button>
                    <motion.button whileTap={{ scale: .7 }} className='hover:bg-slate-200 p-2 rounded-full' title='share'>
                        <IoShareOutline size={24} />
                    </motion.button>
                    <motion.button whileTap={{ scale: .7 }} className='hover:bg-slate-200 p-2 rounded-full' title='Favorite' onClick={handleFavorite}>
                        {isInsert ? <IoStar size={24} color='green'/> : <IoStarOutline size={24} />}
                    </motion.button>
                </div>
            </div>
            <div className="body-card">
                <h2 className="mb-5 text-2xl font-hafs font-medium">{h.arab}</h2>
                <h2 className="leading-7">{h.id}</h2>
            </div>
        </div>
    );
};

export default CardReadHadist;
