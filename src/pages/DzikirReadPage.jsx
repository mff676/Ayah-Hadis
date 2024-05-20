import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import shalah from '../data/dhikr-after-salah/id.json';
import morning from '../data/morning-dhikr/id.json';
import evening from '../data/evening-dhikr/id.json';
import selectedDoa from '../data/selected-dua/id.json'
import dailyDoa from '../data/daily-dua/id.json'
import CardRead from '../components/dhikr-dua-components/CardRead';
import category from '../data/Categories.json';
import { motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';

const DzikirReadPage = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const path = useLocation()
    console.log(path);

    const titleArray = ['Dzikir Pagi', 'Dzikir Petang', 'Dzikir Setelah Shalat'];

    useEffect(() => {
        if (path.hash === '#dzikir') {
            switch (id) {
                case '0':
                    setData(morning);
                    break;
                case '1':
                    setData(evening);
                    break;
                case '2':
                    setData(shalah);
                    break;
                default:
                    setData([]);
                    break;
            }
        }
        else if (path.hash === '#doa') {
            switch (id) {
                case '0':
                    setData(dailyDoa);
                    break;
                case '1':
                    setData(selectedDoa);
                    break;
                default:
                    setData([]);
                    break;
            }
        }
    }, [id, path.hash]);

    return (
        <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='min-h-screen py-12 px-16'
        >
            <Toaster />
            <div className="header-content flex flex-col gap-2 items-center">
                <h2 className="text-2xl font-semibold font-poppins">{titleArray[id]}</h2>
                <h4 className="font-poppins text-grey-secondary">{category.dhikr[id].total_read} Bacaan</h4>
            </div>
            <div className="main-content mt-5">
                <div className="flex flex-col gap-2">
                    {
                        data.map((i, index, array) => (
                            <CardRead key={index} d={i} lastIndex={array.length - 1 === index} />
                        ))
                    }
                </div>
            </div>
        </motion.section>
    );
};

export default DzikirReadPage;
