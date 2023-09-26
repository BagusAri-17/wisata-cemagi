import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/WisataSeseh/Hero'
import Quotes from '../components/WisataSeseh/Quotes'
import Content from '../components/WisataSeseh/Content'
import BiayaParkir from '../components/WisataSeseh/BiayaParkir'
import Maps from '../components/WisataSeseh/Maps'
import Footer from '../components/Footer'

const WisataSeseh = () => {
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

export default WisataSeseh