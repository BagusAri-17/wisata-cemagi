import {React, useEffect} from 'react'
import heroImage from '../../assets/hero1.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className='w-full h-screen'>
        <img className='top-0 left-0 w-full h-screen object-cover' src={heroImage} alt="" />
        <div className='bg-black/20 absolute top-0 left-0 w-full h-screen'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center items-center' data-aos='fade-up' data-aos-duration='2000'>
            <h1 className="text-center font-indo md:leading-[64px] leading-0 mt-4 md:mt-6 text-5xl md:text-7xl font-bold text-white leading-[48px]">
              desa wisata cemagi
            </h1>
            <p className='mt-2 text-white text-sm md:text-base max-w-xs md:max-w-md text-center'>Nikmati suasana pedesaan yang tenang dengan nuansa alam yang indah</p>
            <div className="mt-4 md:mt-6 flex flex-col md:flex-row md:justify-center lg:justify-start">
                <a
                    href='#wisata'
                    className="hover:cursor-pointer hover:brightness-90 bg-primary text-white px-6 py-3 rounded-full font-normal text-center text-sm md:text-base"
                >
                    Jelajahi Desa Kami
                </a>
            </div>
        </div>
    </section>
  )
}

export default Hero