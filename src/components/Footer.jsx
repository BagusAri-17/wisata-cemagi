import React from 'react'
import { AiOutlineWhatsApp, AiOutlineYoutube, AiOutlineInstagram } from "react-icons/ai";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='py-16 bg-sec'>
        <div className='container'>
            <div className='space-y-8 text-center'>
                <h1 className='text-4xl text-primary lg:text-5xl font-indo'>desa wisata cemagi</h1>
                <div className='flex items-center justify-center gap-4 mt-4 text-white'>
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
                <p className='text-xs leading-6 text-white md:text-sm'>© Desa Wisata Cemagi All Rights Reserved. Website by <span className='font-semibold'>Tim Perbekel Cemagi.</span></p>
            </div>
        </div>
    </footer>
  )
}

export default Footer