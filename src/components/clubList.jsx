// src/components/ClubList.jsx
import React, { useState } from 'react'
import clubsData from '../data/plantaranClub'
import { Link } from 'react-router-dom'

const ClubList = () => {
  const [viewMode, setViewMode] = useState('grid') // 'grid' | 'list'
  const [sortOrder, setSortOrder] = useState('asc') // 'asc' | 'desc'

  // Sorting berdasarkan nama klub
  const sortedClubs = [...clubsData].sort((a, b) => {
    const nameA = a.name.toLowerCase()
    const nameB = b.name.toLowerCase()
    if (sortOrder === 'asc') return nameA.localeCompare(nameB)
    else return nameB.localeCompare(nameA)
  })

  return (
    <div className="p-6 mt-[60px] pb-28">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold">Daftar Klub Kampus</h2>
        <div className="flex gap-2 items-center">
          {/* Dropdown Sort */}
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border px-3 py-1 rounded text-sm"
          >
            <option value="asc">Sort A - Z</option>
            <option value="desc">Sort Z - A</option>
          </select>

          {/* Tombol View Mode */}
          <button
            onClick={() => setViewMode('grid')}
            className={`px-3 py-1 rounded ${
              viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Grid
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`px-3 py-1 rounded ${
              viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            List
          </button>
        </div>
      </div>

      {/* Tampilan Grid */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sortedClubs.map((club) => (
            <div
              key={club.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <img src={club.image} alt={club.name} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{club.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{club.shortDescription}</p>
                <Link to={`/clubs/${club.id}`}>
                    <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Lihat Detail
                    </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tampilan List */}
      {viewMode === 'list' && (
        <div className="space-y-6">
          {sortedClubs.map((club) => (
            <div
              key={club.id}
              className="flex flex-col md:flex-row items-start bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
            >
              <img
                src={club.image}
                alt={club.name}
                className="w-full md:w-40 h-32 object-cover rounded"
              />
            <Link to={`/clubs/${club.id}`}>
              <div className="md:ml-6 mt-4 md:mt-0 flex-1">
                <h3 className="text-xl font-semibold">{club.name}</h3>
                <p className="text-gray-600 mt-1">{club.description}</p>
                <div className="mt-3">
                  <span className="font-medium text-gray-700">Upcoming Events:</span>
                  <ul className="list-disc list-inside text-sm text-gray-500">
                    {club.events.map((event, index) => (
                      <li key={index}>
                        {event.name} — <span className="text-xs text-gray-400">{event.date}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
                
            </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ClubList
