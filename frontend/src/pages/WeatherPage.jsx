import React from 'react'
import ChanceOfRain from '../components/ChanceOfRain'
import Location from '../components/Location'
import BestDay from '../components/BestDay'
import Suggestion from '../components/Suggestion'

const WeatherPage = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#52C7E8] to-[#96D9EC] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="md:hidden space-y-4">
          {/* Location Card - Mobile */}
          <Location />
          
          {/* Best Day Card - Mobile */}
          <BestDay />
          
          {/* Today's Highlights - Mobile */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Today's Highlights</h2>
            
            {/* UV Index and Humidity */}
            <div className="bg-white/50 rounded-2xl p-5 mb-4">
              {/* UV Index */}
              <div className="mb-6">
                <p className="text-sm text-gray-700 mb-2">UV Index</p>
                <div className="w-full h-2 rounded-full bg-gradient-to-r from-green-500 via-yellow-400 via-orange-500 via-red-500 to-pink-600"></div>
              </div>
              
              {/* Humidity */}
              <div>
                <p className="text-sm text-gray-700 mb-2">Humidity</p>
                <p className="text-2xl font-semibold text-gray-900 mb-2">65%</p>
                <div className="w-full h-2 rounded-full bg-gray-300">
                  <div className="w-[65%] h-full bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Show More Button */}
            <button className="w-full py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition">
              Show more
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="bg-white/70 backdrop-blur-sm rounded-[40px] p-8">
            <div className="flex gap-6">
              {/* Left Section - 60% */}
              <div className="w-[60%] space-y-4">
                {/* Top Row - Location and Best Day */}
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <Location />
                  </div>
                  <div className="w-1/2">
                    <BestDay />
                  </div>
                </div>
                
                {/* Today's Highlights */}
                <div className="bg-white/60 rounded-3xl p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Today's Highlights</h2>
                  
                  <div className="flex gap-6">
                    {/* Left - UV Index and Humidity */}
                    <div className="w-1/2 bg-white/50 rounded-2xl p-6">
                      {/* UV Index */}
                      <div className="mb-6">
                        <p className="text-sm text-gray-700 mb-3">UV Index</p>
                        <div className="w-full h-2 rounded-full bg-gradient-to-r from-green-500 via-yellow-400 via-orange-500 via-red-500 to-pink-600"></div>
                      </div>
                      
                      {/* Humidity */}
                      <div>
                        <p className="text-sm text-gray-700 mb-2">Humidity</p>
                        <p className="text-2xl font-semibold text-gray-900 mb-3">65%</p>
                        <div className="w-full h-2 rounded-full bg-gray-300">
                          <div className="w-[65%] h-full bg-blue-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right - Grid of 4 items */}
                    <div className="w-1/2 grid grid-cols-2 gap-4">
                      {/* Wind Speed */}
                      <div className="bg-white/50 rounded-2xl p-4 flex flex-col items-center justify-center">
                        <p className="text-xs text-gray-600 mb-2">Wind speed</p>
                        <p className="text-2xl font-semibold text-gray-900">5 km/h</p>
                      </div>
                      
                      {/* Precipitation Probability */}
                      <div className="bg-white/50 rounded-2xl p-4 flex flex-col items-center justify-center">
                        <p className="text-xs text-gray-600 mb-2 text-center">Precipitation Probability</p>
                        <p className="text-2xl font-semibold text-gray-900">Val</p>
                      </div>
                      
                      {/* AQI */}
                      <div className="bg-white/50 rounded-2xl p-4 flex flex-col items-center justify-center">
                        <p className="text-xs text-gray-600 mb-2">AQI</p>
                        <p className="text-2xl font-semibold text-gray-900">Val</p>
                      </div>
                      
                      {/* Precipitation Amount */}
                      <div className="bg-white/50 rounded-2xl p-4 flex flex-col items-center justify-center">
                        <p className="text-xs text-gray-600 mb-2 text-center">Precipitation Amount</p>
                        <p className="text-2xl font-semibold text-gray-900">Val</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Section - 40% */}
              <div className="w-[40%] flex flex-col gap-4">
                <div className="flex-1">
                  <ChanceOfRain />
                </div>
                <div className="flex-1">
                  <Suggestion />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherPage