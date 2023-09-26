import React from 'react'
import contentImage from '../../assets/content-img.png'

const Content = () => {
  return (
    <section className='py-20'>
        <img className='w-full' src={contentImage} alt='content-image' />
    </section>
  )
}

export default Content