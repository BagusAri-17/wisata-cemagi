import React from 'react'
import heroImage from '../../assets/wisata-seseh/hero-img.png'

const Hero = () => {
  return (
    <section className='w-full'>
        <img className='top-0 left-0 w-full h-[300px] lg:h-full object-cover' src={heroImage} alt="" />
        <div className='absolute w-full top-32 lg:top-40 flex flex-col justify-center items-center'>
            <p className='text-white text-xl md:text-2xl font-medium text-center'>Desa Wisata</p>
            <h1 className='text-center font-indo md:leading-[64px] leading-0 text-5xl md:text-7xl text-white leading-[48px]'>
              pantai seseh
            </h1>
        </div>
    </section>
  )
}

export default Hero