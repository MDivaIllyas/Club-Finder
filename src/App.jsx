import { useState } from 'react'
import FooterWeb from './components/footerWeb'
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom'
import HeroSection from './components/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <HeroSection/>
      <FooterWeb />
    </div>
  )
}

export default App
