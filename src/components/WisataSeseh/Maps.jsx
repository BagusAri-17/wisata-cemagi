import React from 'react'

const Maps = () => {
    return (
        <section className='py-20'>
            <div className='container'>
                <div className='text-center'>
                    <h1 className='text-base md:text-lg lg:text-2xl font-medium text-primary leading-[32px]'>Lokasi</h1>
                    <h2 className="text-2xl md:text-3xl lg:text-5xl lg:mt-2 font-semibold text-sec">
                        Jelajahi Pantai Seseh
                    </h2>
                </div>
                <div className='mt-4 md:mt-8'>
                    <iframe className='w-full h-[240px] md:h-[360px] lg:h-[480px]'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15778.495674237183!2d115.1042088914398!3d-8.632054998695597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2383c7154a83f%3A0xee60166e4a939cca!2sCemagi%2C%20Mengwi%2C%20Badung%20Regency%2C%20Bali!5e0!3m2!1sen!2sid!4v1693149412419!5m2!1sen!2sid"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </section>
    )
}

export default Maps