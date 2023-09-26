import Navbar from '../components/Navbar'
import Hero from '../components/Beranda/Hero'
import TentangDesa from '../components/Beranda/TentangDesa'
import Content from '../components/Beranda/Content'
import Wisata from '../components/Beranda/Wisata'
import Galeri from '../components/Beranda/Galeri'
import Maps from '../components/Beranda/Maps'
import Footer from '../components/Footer'

const Beranda = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <TentangDesa />
            <Content />
            <Wisata />
            <Galeri />
            <Maps />
            <Footer />
        </>
    )
}

export default Beranda