import {React, useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import wisataImage1 from '../../assets/wisata-pantai-mengening.png'
import wisataImage2 from '../../assets/wisata-pantai-seseh.png'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';

const Wisata = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <section id='wisata' className='py-20'>
        <div className='container'>
            <div className='grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-0 md:gap-8'>
                <div className='col-span-1 md:col-span-3 lg:col-span-4' data-aos='fade-right' data-aos-duration='2000'>
                    <h2 className='text-base md:text-lg lg:text-2xl font-medium text-primary leading-[32px]'>Wisata Desa</h2>
                    <h1 className='text-2xl md:text-3xl lg:text-5xl lg:mt-2 font-semibold text-sec'>
                        Nikmati Wisata Di Desa Kami
                    </h1>
                    <p className='text-sm lg:text-lg mt-4 font-light leading-[24px] lg:leading-[28px] tracking-[0.1px] text-justify text-gray-500'>Nikmati kehidupan pedesaan yang damai dengan nuansa alam yang indah. Anda dapat mengagumi arsitektur, seni, dan budaya Bali yang masih terjaga. Desa yang akan memberikan Anda kenangan yang tak terlupakan di Bali.</p>
                </div>
                <div className='col-span-1 md:col-span-5 lg:col-span-8 mt-4 md:mt-0' data-aos='fade-left' data-aos-duration='2000'>
                    <Swiper className='mySwiper flex flex-row' modules={[Pagination, Autoplay]} loop={true} autoplay={{delay: 2500, disableOnInteraction: false,}} slidesPerView={2} spaceBetween={20}>
                        <SwiperSlide>
                            <div>
                                <img className="w-full -z-10" src={wisataImage1} alt="hero-image" />
                                <div className='absolute bottom-2 lg:bottom-6 p-4 lg:p-6 z-50'>
                                    <h1 className='font-semibold leading-6 lg:leading-9 text-lg lg:text-3xl text-white max-w-[172px]'>Pantai Mengening</h1>
                                    <div className='mt-2 lg:mt-4'>
                                        <a href='/wisata/pantai-mengening' className='text-[10px] lg:text-xs font-medium text-sec py-1.5 md:py-2 px-3.5 md:px-4 bg-white rounded-[24px]'>Jelajahi</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img className="w-full -z-10" src={wisataImage2} alt="hero-image" />
                                <div className='absolute bottom-2 lg:bottom-6 p-4 lg:p-6 z-50'>
                                    <h1 className='font-semibold leading-6 lg:leading-9 text-lg lg:text-3xl text-white max-w-[172px]'>Pantai Seseh</h1>
                                    <div className='mt-2 lg:mt-4'>
                                        <a href='/wisata/pantai-seseh' className='text-[10px] lg:text-xs font-medium text-sec py-1.5 md:py-2 px-3.5 md:px-4 bg-white rounded-[24px]'>Jelajahi</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Wisata