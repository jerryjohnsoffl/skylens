import React from 'react'
import LocationPin from '../assets/Loc-col.svg'
import Sunny from '../assets/Sunny.svg'

const Location = () => {
  // This data will come from props/backend
  const weatherData = {
    date: 'Wednesday, 01 Oct',
    location: 'Kochi, India',
    temperature: '33°C',
    condition: 'Sunny'
  }

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 flex items-center justify-between h-full">
      <div className="flex items-start gap-4">
        {/* Location Pin Icon - Replace with your image */}
        <img 
          src={LocationPin} 
          alt="location" 
          className="w-12 h-12 flex-shrink-0"
        />
        
        {/* Location Info */}
        <div className="flex flex-col">
          <p className="text-sm font-medium text-gray-900 mb-1">{weatherData.date}</p>
          <p className="text-sm text-gray-600 mb-2">{weatherData.location}</p>
          <p className="text-5xl font-bold text-gray-900 mb-1">{weatherData.temperature}</p>
          <p className="text-sm text-gray-600">{weatherData.condition}</p>
        </div>
      </div>

      {/* Sun/Weather Icon - Replace with your image */}
      <div className="flex-shrink-0">
        <img 
          src={Sunny}
          alt="sunny" 
          className="w-20 h-20"
        />
      </div>
    </div>
  )
}

export default Location