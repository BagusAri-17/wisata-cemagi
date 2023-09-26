import React from 'react'
import { AiOutlineWhatsApp, AiOutlineYoutube, AiOutlineInstagram } from "react-icons/ai";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <section className='py-16 bg-sec'>
        <div className='container'>
            <div className='text-center space-y-8'>
                <h1 className='text-primary text-4xl lg:text-5xl font-indo'>desa wisata cemagi</h1>
                <div className='flex mt-4 gap-4 text-white justify-center items-center'>
                  <Link to='https://wa.me/+628123948602'>
                    <AiOutlineWhatsApp size={24} />
                  </Link>
                  <Link to='https://www.youtube.com/@desacemagi'>
                    <AiOutlineYoutube size={24} />
                  </Link>
                  <Link to='https://www.instagram.com/desacemagi/'>
                    <AiOutlineInstagram size={24} />
                  </Link>
                </div>
                <div className='border-t border-white rounded'></div>
                <p className='text-xs md:text-sm leading-6 text-white'>© Desa Wisata Cemagi All Rights Reserved. Website by <span className='font-semibold'>Tim Perbekel Cemagi.</span></p>
            </div>
        </div>
    </section>
  )
}

export default Footer