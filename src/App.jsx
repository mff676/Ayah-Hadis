import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import QuranPage from './pages/QuranPage'
import HadisPage from './pages/HadisPage'
import DzikirPage from './pages/DzikirPage'
import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import ReadQuranPage from './pages/ReadQuranPage'
import HadistReadPage from './pages/HadistReadPage'
import DzikirReadPage from './pages/DzikirReadPage'
import DoaPage from './pages/DoaPage'
import ScrollToTop from "./utils/ScrollToTop";
import VideoPage from './pages/VideoPage'
import { useEffect, useState } from 'react'
import { getUser } from './supabase/SupabaseAuth'
import { AyahProvider } from './context/AyahHadisContext'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'

function App() {
  const [user, setUser] = useState(undefined)
  useEffect(() => {
    const onLoad = async() =>{
      const {user, error} = await getUser();
      if (error) {
        console.log(error);
      }
      if (user) {
        setUser(user);
        }
    }
    onLoad()
  }, [])
  return (
    <AyahProvider value={{user}}>
      <AnimatePresence>
        <Header />
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/quran' element={<QuranPage />} />
            <Route path='/hadis' element={<HadisPage />} />
            <Route path='/dzikir' element={<DzikirPage />} />
            <Route path='/doa' element={<DoaPage />} />
            <Route path='quran/detail/surah/:id' element={<ReadQuranPage />} />
            <Route path='hadis/detail/:name' element={<HadistReadPage />} />
            <Route path='dzikir/detail/:id' element={<DzikirReadPage />} />
            <Route path='doa/detail/:id' element={<DzikirReadPage />} />
            <Route path='blog/watch/video/:id' element={<VideoPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/profile/:id' element={<ProfilePage />}/>
          </Routes>
        </ScrollToTop>
        <Footer />
      </AnimatePresence>
    </AyahProvider>
  )
}

export default App
