import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Loc from '../assets/Location.svg'
import Calender from '../assets/Calender.svg'

const HomePage = () => {
  const [location, setLocation] = useState('')
  const [dateTime, setDateTime] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // You can pass the location and dateTime as state or query params
    navigate('/weather', { state: { location, dateTime } })
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-b from-[#52C7E8] to-[#96D9EC] relative overflow-hidden">
      {/* Decorative Clouds */}
      <img src="/clouds.png" alt="" className="absolute top-20 left-20 w-24 opacity-90" />
      <img src="/clouds.png" alt="" className="absolute top-16 right-32 w-20 opacity-80" />
      <img src="/clouds.png" alt="" className="absolute top-40 left-48 w-16 opacity-70" />
      <img src="/clouds.png" alt="" className="absolute bottom-40 left-32 w-20 opacity-75" />
      <img src="/clouds.png" alt="" className="absolute bottom-32 right-40 w-24 opacity-85" />
      <img src="/clouds.png" alt="" className="absolute top-1/2 right-20 w-20 opacity-70" />
      <img src="/clouds.png" alt="" className="absolute top-96 right-1/4 w-16 opacity-60" />
      <img src="/clouds.png" alt="" className="absolute bottom-96 left-1/4 w-20 opacity-65" />

      {/* Main Card */}
      <div className="h-full w-full flex justify-center items-center relative z-10">
        <div className="min-h-[500px] w-3/5 max-w-[90%] bg-sh-white backdrop-blur-sm rounded-[40px] flex flex-col items-center shadow-[0_0_4px_2px_rgba(0,0,0,0.1)] px-8 py-12 relative">
          {/* Small decorative clouds on card */}
          <img src="/clouds.png" alt="" className="absolute -bottom-8 left-12 w-20 opacity-60" />
          <img src="/clouds.png" alt="" className="absolute -top-4 right-16 w-16 opacity-50" />
          
          {/* Title Section */}
          <div className="flex-1 flex justify-center items-center mb-8">
            <h2 className="text-t-black w-3/4 text-6xl font-semibold text-center leading-tight">
              What's in the Sky Today?
            </h2>
          </div>

          {/* Form Section */}
          <div className="flex-1 flex flex-col justify-center items-center w-full gap-6">
            <form onSubmit={handleSubmit} className="w-2/5 max-w-md flex flex-col gap-4">
              {/* Location Input */}
              <div className="relative">
                <img 
                  src={Loc} 
                  alt="location" 
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
                />
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full h-11 pl-12 pr-4 rounded-full border-2 border-grey-sh outline-none text-gray-700 placeholder-gray-500 text-base"
                />
              </div>

              {/* Date/Time Input */}
              <div className="relative">
                <img 
                  src={Calender} 
                  alt="calendar" 
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
                />
                <input
                  type="number"
                  placeholder="Date/Time"
                  value={dateTime}
                  onChange={(e) => setDateTime(e.target.value)}
                  className="w-full h-11 pl-12 pr-4 rounded-full border-2 border-grey-sh outline-none text-gray-700 placeholder-gray-500 text-base"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-medium text-lg rounded-full shadow-lg mt-2"
              >
                Check Weather
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage