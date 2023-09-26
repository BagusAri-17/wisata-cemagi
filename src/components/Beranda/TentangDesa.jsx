import {React, useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className='py-20'>
      <div className='container'>
        <div className='grid md:grid-cols-2 gap-0 md:gap-8' data-aos='fade-up' data-aos-duration='2000'>
          <div data-aos='fade-left' data-aos-duration='2000'>
            <iframe className='w-full h-[216px] md:h-[190px] lg:h-[315px]' src="https://www.youtube.com/embed/gm2f5AxSXio?si=b2LgkL4dh6oXnbTJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className='mt-4 md:mt-0' data-aos='fade-right' data-aos-duration='2000'>
            <h2 className='text-base md:text-lg lg:text-2xl font-medium text-primary leading-[32px]'>Tentang Desa</h2>
            <h1 className="text-2xl md:text-3xl lg:text-5xl lg:mt-2 font-semibold text-sec">
              Cemagi - The Wonderful Village
            </h1>
            <p className='text-sm lg:text-lg mt-4 font-light leading-[24px] lg:leading-[28px] tracking-[0.1px] text-justify text-gray-500'>Nikmati kehidupan pedesaan yang damai dengan nuansa alam yang indah. Anda dapat mengagumi arsitektur, seni, dan budaya Bali yang masih terjaga. Desa yang akan memberikan Anda kenangan yang tak terlupakan di Bali.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About