import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { IoIosInformationCircleOutline, IoMdMore } from 'react-icons/io'
import { FaRegCopy } from 'react-icons/fa6';
import { RiShareForwardLine } from 'react-icons/ri';
import toast from 'react-hot-toast';
import { insertBookmark } from '../../supabase/SupabaseCrud';
import { useContext } from 'react';
import { AyahContext } from '../../context/AyahHadisContext';
const DropdownButton = ({ d, index, surah }) => {
    const { user } = useContext(AyahContext);
    const handleCopy = () => {
        navigator.clipboard.writeText(`${d.text.arab}\n${d.translation.id}\n\n\n\n\nMau baca artikel lainnya? atau mau membaca Al-Quran atau hadist? semua nya ada di https://ayahHadis.com, website islami terlengkap di Indonesia`);
        toast.success('Berhasil di copy');
    }

    const handleBookmark = async () => {
        if (user === undefined) {
            toast.error('Anda harus login terlebih dahulu');
            return;
        }
        if (surah === null) {
            toast('Coming Soon', {
                icon: <IoIosInformationCircleOutline  />,
            });
            return;
        }
        const { error } = await insertBookmark(user.id, index, surah.name.transliteration.id, d.number.inSurah);
        if (error) {
            toast.error('Gagal menyimpan bookmark, mungkin anda sudah menyimpannya sebelumnya');
            console.error(error);
            return;
        } else {
            toast.success('Berhasil menyimpan bookmark');
        }

    }
    return (
        <Menu>
            <MenuButton><button className='hover:bg-slate-200 rounded-full p-1  flex transition-all items-center justify-center'><IoMdMore size={24} /></button></MenuButton>
            <Transition
                enter="duration-200 ease-out"
                enterFrom="scale-95 opacity-0"
                enterTo="scale-100 opacity-100"
                leave="duration-300 ease-out"
                leaveFrom="scale-100 opacity-100"
                leaveTo="scale-95 opacity-0"
            >
                <MenuItems anchor="bottom" className="origin-top transition bg-white shadow-lg !p-3 flex justify-center flex-col rounded-md  ms-7">
                    <MenuItem>
                        <li className="data-[focus]:bg-blue-100 cursor-pointer p-1 rounded flex items-end gap-3" onClick={handleBookmark}>
                            <MdOutlineBookmarkAdd size={20} /> Simpan ke bookmark
                        </li>
                    </MenuItem>
                    <MenuItem>
                        <li onClick={handleCopy} className="data-[focus]:bg-blue-100 cursor-pointer p-1 rounded flex items-end gap-3">
                            <FaRegCopy size={20} /> Salin Ayat
                        </li>
                    </MenuItem>
                    <MenuItem>
                        <li className="data-[focus]:bg-blue-100 cursor-pointer p-1 rounded flex items-end gap-3">
                            <RiShareForwardLine size={20} /> Bagikan Ayat
                        </li>
                    </MenuItem>
                </MenuItems>
            </Transition>
        </Menu>)
}

export default DropdownButton