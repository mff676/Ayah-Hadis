import './App.css'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import QuranPage from './pages/QuranPage'
import HadisPage from './pages/HadisPage'
import DzikirPage from './pages/DzikirPage'
import { Route, Routes, useLocation } from 'react-router-dom'
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
import MainHeader from './components/header/MainHeader'
import DetailArticle from './pages/DetailArticle'
import HeaderAdmin from './components/header/HeaderAdmin'
import ProfileFormPage from './pages/ProfileFormPage'
import { getProfile } from './supabase/SupabaseCrud'
import LoadingBar from './components/LoadingBar'
import NotPage from './pages/NotPage'
import JuzReadPage from './pages/JuzReadPage'
import DetailEditPage from './pages/AdminPages/DetailEditPage'
import BlogAdmin from './pages/AdminPages/BlogAdmin'
import FormArticle from './pages/AdminPages/FormArticle'
import FormDataArticle from './pages/AdminPages/FormDataArticle'
import { Helmet } from 'react-helmet'

function App() {
  const [userData, setUserData] = useState(undefined);
  const location = useLocation();
  const [profiles, setProfiles] = useState(undefined);
  const [Initialize, setInitialize] = useState(true)

  useEffect(() => {
    const onLoad = async () => {
      const { user, error } = await getUser();
      if (error) {
        console.log(error);
      }
      if (user) {
        setUserData(user);
      }
      if (user) {
        const { data } = await getProfile(user.id);
        setProfiles(data[0]);
      }
    }
    onLoad().then(() => setTimeout(() => {
      setInitialize(false)
    }, 3000))
  }, [])

  const shouldHideHeaderFooter =
    location.pathname.startsWith('/blog/article/') && location.hash ||
    location.pathname === '/blog/admin' ||
    location.pathname === '/blog/admin/article-form' ||
    location.pathname.endsWith('/edit-article');

  if (Initialize) {
    return <LoadingBar />
  }
  return (
    <AyahProvider value={{ user: userData, profiles }}>
      <Helmet>
        <title>Wawasan Islami dari Al-Quran hingga Dzikir - AyahHadis</title>
        <meta name="description" content="Temukan wawasan Islami lengkap mulai dari Al-Quran, Hadis, doa, dzikir, hingga artikel-artikel Islami bermanfaat di Ayah Hadis. Dapatkan terjemahan Al-Quran, penjelasan Hadis Nabi, dan panduan doa harian secara praktis." />
        <meta name="keywords" content="Al-Quran, Hadis, Islam, terjemahan Al-Quran, tafsir Al-Quran, Hadis Nabi, doa harian, dzikir, artikel Islami, panduan Islam, rumaysho" />
        <meta name="author" content="Muhammad Fathul Falah" />
      </Helmet>
      <AnimatePresence>
        {shouldHideHeaderFooter ? <HeaderAdmin /> : <MainHeader />}
        <ScrollToTop>
          {
            userData && profiles.role === 'guru' &&
            <Routes>
              <Route path='/blog/article/:id/edit-article' element={<DetailEditPage />} />
              <Route path='/blog/admin' element={<BlogAdmin />} />
              <Route path='/blog/admin/article-form' element={<FormArticle />} />
              <Route path='/blog/admin/article-form/data-form' element={<FormDataArticle />} />
            </Routes>
          }
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/quran' element={<QuranPage />} />
            <Route path='/blog/article/:id' element={<DetailArticle />} />
            <Route path='/hadis' element={<HadisPage />} />
            <Route path='/dzikir' element={<DzikirPage />} />
            <Route path='/doa' element={<DoaPage />} />
            <Route path='quran/detail/surah/:id' element={<ReadQuranPage />} />
            <Route path='quran/detail/jozz/:id' element={<JuzReadPage />} />
            <Route path='hadis/detail/:name' element={<HadistReadPage />} />
            <Route path='dzikir/detail/:id' element={<DzikirReadPage />} />
            <Route path='doa/detail/:id' element={<DzikirReadPage />} />
            <Route path='blog/watch/video/:id' element={<VideoPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/profile/:id' element={<ProfilePage />} />
            <Route path='/profile/form' element={<ProfileFormPage />} />
            <Route path='/*' element={<NotPage />} />
          </Routes>
        </ScrollToTop>
        {!shouldHideHeaderFooter && <Footer />}
      </AnimatePresence>
    </AyahProvider>
  )
}

export default App
