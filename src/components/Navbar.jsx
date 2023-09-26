import {React, useState} from 'react'
import {Divide as Hamburger} from 'hamburger-react'
import {AiOutlineWhatsApp, AiOutlineYoutube, AiOutlineInstagram} from 'react-icons/ai'
import {Link} from 'react-router-dom'

const Navbar = () => {

    const [color, setColor] = useState('text-white');
    const [hamburgerColor, setHamburgerColor] = useState('#FFF');

    const [isOpen, setOpen] = useState(false)
    
    window.onscroll = () => {
        const header = document.querySelector("nav");
        const fixedNav = header.offsetTop;
    
        if (window.scrollY > fixedNav) {
          header.classList.add("navbar-fixed");
          setColor('text-primary');
          setHamburgerColor('#CBA772');
        } else {
          header.classList.remove("navbar-fixed");
          setColor('text-white');
          setHamburgerColor('#FFF');
        }
    };

  return (
    <nav className='bg-transparent absolute top-0 left-0 w-full flex items-center z-10'>
        <div className='container'>
            <div className='flex items-center justify-between relative'>
                <div>
                    <Link to='/' className='flex items-center py-2'>
                        <span className={`text-[40px] font-indo font-bold tracking-widest ${color}`}>cemagi</span>
                    </Link>
                </div>
                <div className='flex items-center lg:hidden'>
                    <div>
                        <Hamburger size={28} color={`${hamburgerColor}`} toggled={isOpen} toggle={setOpen} />
                    </div>
                    <div>
                        <ul className={isOpen ? 'absolute right-0 top-full w-full rounded-lg bg-white py-4 md:py-8 shadow-lg duration-500 ease-in-out': 'fixed left-[-100%] duration-500 ease-in-out'}>
                                <li className='flex flex-row items-center justify-center'>
                                    <Link to='/' className='gap-4 text-primary font-semibold mx-8 flex py-2 text-sm md:text-base hover:cursor-pointer duration-300 transition' >
                                        Beranda
                                    </Link>
                                </li>
                                <li className='flex flex-row items-center justify-center'>
                                    <Link to='/tentang-desa' className='gap-4 text-primary font-semibold mx-8 flex py-2 text-sm md:text-base hover:cursor-pointer duration-300 transition' >
                                        Tentang Desa
                                    </Link>
                                </li>
                                <li className='flex flex-row items-center justify-center'>
                                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className={` text-primary font-semibold mx-8 py-2 text-sm md:text-base hover:cursor-pointer duration-300 transition flex items-center justify-center`}>Wisata <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                        </svg>
                                    </button>
                                        
                                    <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                                        <ul className="py-2 text-sm text-primary font-semibold" aria-labelledby="dropdownLargeButton">
                                            <li>
                                                <Link to='/wisata/pantai-mengening' className="block px-4 py-2">Pantai Mengening</Link>
                                            </li>
                                            <li>
                                                <Link to='/wisata/pantai-seseh' className="block px-4 py-2">Pantai Seseh</Link>
                                            </li>
                                                    
                                        </ul>
                                    </div>
                                </li>
                                    <li className='flex flex-row items-center justify-center'>
                                        <a href='#galeri' className='gap-4 text-primary font-semibold mx-8 flex py-2 text-sm md:text-base hover:cursor-pointer duration-300 transition' >
                                            Galeri
                                        </a>
                                    </li>
                            <li className='flex flex-row items-center justify-center gap-6 mt-4 mb-2'>
                                <Link to='https://wa.me/+628123948602'>
                                    <AiOutlineWhatsApp size={28} className='text-primary' />
                                </Link>
                                <Link to='https://www.youtube.com/@desacemagi'>
                                    <AiOutlineYoutube size={28} className='text-primary' />
                                </Link>
                                <Link to='https://www.instagram.com/desacemagi/'>
                                    <AiOutlineInstagram size={28} className='text-primary' />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='hidden lg:flex items-center'>
                    <ul className='flex items-center gap-6'>
                        
                        <li>
                            <Link to='/' className={`font-semibold text-base ${color}`}>Beranda</Link>
                        </li>
                        <li>
                            <Link to='/tentang-desa' className={`font-semibold text-base ${color}`}>Tentang Desa</Link>
                        </li>
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbarlarge" className={`${color} text-base font-semibold flex items-center justify-between w-full py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto`}>Wisata <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg>
                            </button>
                                        
                            <div id="dropdownNavbarlarge" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                                <ul className="py-2 text-sm text-primary font-semibold" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <Link to='/wisata/pantai-mengening' className="block px-4 py-2">Pantai Mengening</Link>
                                    </li>
                                    <li>
                                        <Link to='/wisata/pantai-seseh' className="block px-4 py-2">Pantai Seseh</Link>
                                    </li>
                                            
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href='#galeri' className={`font-semibold text-base ${color}`}>Galeri</a>
                        </li>
                        
                        
                        <li className='flex items-center justify-center gap-4'>
                            <Link to='https://wa.me/+628123948602'>
                                <AiOutlineWhatsApp size={24} className={`${color}`} />
                            </Link>
                            <Link to='https://www.youtube.com/@desacemagi'>
                                <AiOutlineYoutube size={24} className={`${color}`} />
                            </Link>
                            <Link to='https://www.instagram.com/desacemagi/'>
                                <AiOutlineInstagram size={24} className={`${color}`} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar