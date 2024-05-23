import React from "react";
import image1 from '../../assets/galeri/image-1.png'
import image2 from '../../assets/galeri/image-2.png'
import image3 from '../../assets/galeri/image-3.png'
import image4 from '../../assets/galeri/image-4.png'
import image5 from '../../assets/galeri/image-5.png'
import image6 from '../../assets/galeri/image-6.png'
import image7 from '../../assets/galeri/image-7.png'

const Galeri = () => {
    return (
        <section id="galeri" className="my-20">
            <div className="container">
                <div className="text-center">
                    <h2 className='text-base md:text-lg lg:text-2xl font-medium text-primary leading-[32px]'>Galeri</h2>
                    <h1 className='text-2xl font-semibold md:text-3xl lg:text-5xl lg:mt-2 text-sec'>
                        Keindahan Desa Cemagi
                    </h1>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4 md:mt-8">
                    <div className="grid gap-2 md:gap-4">
                        <div className="bg-white shadow-md">
                            <img className="scale-90 hover:scale-100 transition duration-300 h-auto mx-auto my-auto max-w-full p-1.5 md:p-2" src={image1} alt="" />
                        </div>
                        <div className="bg-white shadow-md">
                            <img className="scale-90 hover:scale-100 transition duration-300 h-auto mx-auto my-auto max-w-full p-1.5 md:p-2" src={image2} alt="" />
                        </div>
                    </div>
                    <div className="grid gap-2 md:gap-4">
                        <div className="bg-white shadow-md">
                            <img className="scale-90 hover:scale-100 transition duration-300 h-auto mx-auto my-auto max-w-full p-1.5 md:p-2" src={image3} alt="" />
                        </div>
                        <div className="bg-white shadow-md">
                            <img className="scale-90 hover:scale-100 transition duration-300 h-auto mx-auto my-auto max-w-full p-1.5 md:p-2" src={image4} alt="" />
                        </div>
                        <div className="bg-white shadow-md">
                            <img className="scale-90 hover:scale-100 transition duration-300 h-auto mx-auto my-auto max-w-full p-1.5 md:p-2" src={image5} alt="" />
                        </div>
                    </div>
                    <div className="grid gap-2 md:gap-4">
                        <div className="bg-white shadow-md">
                            <img className="scale-90 hover:scale-100 transition duration-300 h-auto mx-auto my-auto max-w-full p-1.5 md:p-2" src={image6} alt="" />
                        </div>
                        <div className="bg-white shadow-md">
                            <img className="scale-90 hover:scale-100 transition duration-300 h-auto mx-auto my-auto max-w-full p-1.5 md:p-2" src={image7} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Galeri;
