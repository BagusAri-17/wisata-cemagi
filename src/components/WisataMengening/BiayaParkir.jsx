import React from 'react'
import carImage from '../../assets/wisata-mengening/sports-car.png'
import motorcycleImage from '../../assets/wisata-mengening/sports-motorcycle.png'

const BiayaParkir = () => {
  return (
    <section className='my-20'>
        <div className='container'>
            <div className='text-center'>
                <h1 className='text-base md:text-lg lg:text-2xl font-medium text-primary leading-[32px]'>Biaya</h1>
                <h2 className="text-2xl md:text-3xl lg:text-5xl lg:mt-2 font-semibold text-sec">
                    Tarif Parkir
                </h2>
            </div>
            <div className='mt-8 md:mt-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 max-w-lg mx-auto gap-8 md:gap-16 lg:gap-24'>
                    <div className='py-4 px-12 bg-white shadow-lg rounded-xl text-center mx-auto'>
                        <p className='text-2xl leading-[48px] font-semibold'>Mobil</p>
                        <img src={carImage} alt='' />
                        <p className='text-2xl leading-[48px] font-semibold'>Rp. 5000</p>
                    </div>
                    <div className='py-4 px-12 bg-white shadow-lg rounded-xl text-center mx-auto'>
                        <p className='text-2xl leading-[48px] font-semibold'>Motor</p>
                        <img src={motorcycleImage} alt='' />
                        <p className='text-2xl leading-[48px] font-semibold'>Rp. 2000</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default BiayaParkir