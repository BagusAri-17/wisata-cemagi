import {Routes, Route} from 'react-router-dom'
import Beranda from './pages/Beranda'
import TentangDesa from './pages/TentangDesa'
import WisataMengening from './pages/WisataMengening'
import WisataSeseh from './pages/WisataSeseh'

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Beranda />} /> 
        <Route path='/tentang-desa' element={<TentangDesa />} />
        <Route path='/wisata/pantai-mengening' element={<WisataMengening />} />
        <Route path='/wisata/pantai-seseh' element={<WisataSeseh />} />
      </Routes>
  )
}
//Update
export default App