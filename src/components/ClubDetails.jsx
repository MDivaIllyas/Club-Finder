import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import clubs from '../data/plantaranClub'
import Navbar from './Navbar'
import FooterWeb from '../components/footerWeb'

const ClubDetail = () => {
  const { id } = useParams()
  const club = clubs.find((c) => c.id === id)

  const [joined, setJoined] = useState(false)

  // Cek localStorage saat pertama load
  useEffect(() => {
    const joinedClubs = JSON.parse(localStorage.getItem('joinedClubs')) || []
    if (joinedClubs.includes(id)) {
      setJoined(true)
    }
  }, [id])

  const handleJoin = () => {
    const joinedClubs = JSON.parse(localStorage.getItem('joinedClubs')) || []
    if (!joinedClubs.includes(id)) {
      joinedClubs.push(id)
      localStorage.setItem('joinedClubs', JSON.stringify(joinedClubs))
      setJoined(true)
    }
  }

  if (!club) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold">Klub tidak ditemukan</h2>
        <Link to={"/clubs"} className='flex items-center justify-center'>
            <button className="px-4 text-sm md:px-8 lg:px-12 md:text-base py-3 bg-[#3B82F6] rounded-2xl hover:bg-[#6366F1] text-white">← Kembali ke daftar klub</button>
        </Link>
      </div>
    )
  }

  return (
    <div className='bg-[#F9FAFB]'>
        <Navbar />
        <div className="p-6 mt-[65px] pb-28 max-w-3xl mx-auto bg-white">
            <img src={club.image} alt={club.name} className="w-full h-64 object-cover rounded-lg mb-6" />
            <h1 className="text-3xl font-bold mb-2">{club.name}</h1>
            <p className="text-gray-600 mb-4">{club.description}</p>

            {/* Join Button */}
            {!joined ? (
                <button
                onClick={handleJoin}
                className="mb-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                Join Club
                </button>
            ) : (
                <p className="mb-6 text-green-600 font-semibold">Kamu sudah bergabung di klub!</p>
            )}

            <h2 className="text-xl font-semibold mb-2">Upcoming Events</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-6">
                {club.events.map((event, idx) => (
                <li key={idx}>
                    {event.name} — <span className="text-sm text-gray-500">{event.date}</span>
                </li>
                ))}
            </ul>
            <Link to={"/clubs"} className='flex items-center justify-center'>
                <button className="px-4 text-sm md:px-8 lg:px-12 md:text-base py-3 bg-[#3B82F6] rounded-2xl hover:bg-[#6366F1] text-white">← Kembali ke daftar klub</button>
            </Link>
        </div>
        <FooterWeb />
    </div>
  )
}

export default ClubDetail;
