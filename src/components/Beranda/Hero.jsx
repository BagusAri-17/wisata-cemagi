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
        <img className='top-0 left-0 object-cover w-full h-screen' src={heroImage} alt="" />
        <div className='absolute top-0 left-0 w-full h-screen bg-black/20'></div>
        <div className='absolute top-0 flex flex-col items-center justify-center w-full h-full' data-aos='fade-up' data-aos-duration='2000'>
            <h1 className="text-center font-indo md:leading-[64px] leading-0 mt-4 md:mt-6 text-5xl md:text-7xl font-bold text-white leading-[48px]">
              desa wisata cemagi
            </h1>
            <p className='max-w-xs mt-2 text-sm text-center text-white md:text-base md:max-w-md'>Nikmati suasana pedesaan yang tenang dengan nuansa alam yang indah</p>
            <div className="flex flex-col mt-4 md:mt-6 md:flex-row md:justify-center lg:justify-start">
                <a
                    href='#wisata'
                    className="px-6 py-3 text-sm font-normal text-center text-white rounded-full hover:cursor-pointer hover:brightness-90 bg-primary md:text-base"
                >
                    Jelajahi Desa Kami
                </a>
            </div>
        </div>
    </section>
  )
}

export default Hero