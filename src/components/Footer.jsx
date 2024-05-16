const Footer = () => {
  return (
    <footer className='bg-[#0D2F26] flex min-h-[20vh]'>
        <div className="flex flex-col min-w-full justify-center items-center gap-1">
            <h2 className="font-montserrat font-bold text-center text-2xl text-white">AyahHadis</h2>
            <p className="text-white text-xs">&copy;2024 <span className="font-bold font-montserrat">AyahHadis</span> design inspired by <a href="https://qurancollection.com/" target="_blank" className="no-underline font-bold">QuranCollection.com</a></p>
        </div>
    </footer>
  )
}

export default Footer