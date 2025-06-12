import { useState } from 'react'
import FooterWeb from './components/footerWeb'
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <div className="bg-[url('./assets/kampus.jpg')] bg-cover bg-center h-[676px] mt-[60px] flex items-center justify-center text-[#ddd]">
        <div className="text-center bg-black/50 p-6 w-full h-[676px] rounded-lg content-center">
          <h1 className="text-3xl font-bold">Selamat Datang di Klub Finder</h1>
          <p className="mt-2 text-sm">Temukan klub kampus plantaran yang sesuai dengan minatmu</p>
          <Link to={"/clubs"}>
            <button className="px-12 py-3 mt-6 bg-[#3B82F6] rounded-2xl hover:bg-[#6366F1] text-white">Lihat Klub</button>
          </Link>
        </div>
      </div>
      <FooterWeb />
    </div>
  )
}

export default App
