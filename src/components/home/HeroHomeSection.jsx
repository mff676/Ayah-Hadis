import Hero from '/assets/images/hero.png'

const HeroHomeSection = () => {
    return (
        <div className="flex items-center">
            <div className="w-1/2">
                <div className="flex flex-col gap-5">
                    <h2 className='font-bold text-6xl w-[85%] font-montserrat'>Raih Kesucian Diri Dengan Membaca<br /><span className="text-green-primary">Quran dan Hadits</span></h2>
                    <p className='text-justify text-grey-secondary w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci commodi repellendus provident esse qui, non, modi culpa voluptatibus deleniti, tenetur doloremque minus pariatur ipsam explicabo amet et possimus id quasi est consectetur ratione? Qui magni eos accusantium nesciunt molestiae nobis numquam vitae. Veniam impedit a enim vitae asperiores sunt praesentium?</p>
                </div>
            </div>
            <div className="w-1/2">
                <img src={Hero} alt="Hero Images" />
            </div>
        </div>)
}

export default HeroHomeSection