import React from 'react'
import Hero from '../components/WisataMengening/Hero'
import Navbar from '../components/Navbar'
import Quotes from '../components/WisataMengening/Quotes'
import Content from '../components/WisataMengening/Content'
import BiayaParkir from '../components/WisataMengening/BiayaParkir'
import Maps from '../components/WisataMengening/Maps'
import Footer from '../components/Footer'

const WisataMengening = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Quotes />
        <Content />
        <BiayaParkir />
        <Maps />
        <Footer />
    </>
  )
}

export default WisataMengening