import React from 'react'
import ChanceOfRain from '../components/ChanceOfRain'
import Location from '../components/Location'
import BestDay from '../components/BestDay'
import Suggestion from '../components/Suggestion'

const WeatherPage = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#52C7E8] to-[#96D9EC] pt-12 pb-8">
        <div className="h-full w-full flex flex-col justify-center items-center">
            {/* Mobile Location - Hidden on desktop */}
            <div className="container px-5 w-11/12 h-44 bg-sh-white  mb-8 rounded-3xl md:hidden">
                <Location />
            </div>

            {/* Main Container */}
            <div className="container flex flex-col md:flex-row justify-center rounded-3xl md:rounded-4xl items-start gap-6 w-11/12 bg-sh-white p-6">
                
                {/* Left Section - 60% width on desktop */}
                <div className="w-full md:w-[60%] flex flex-col gap-6">
                    
                    {/* Top Row - Location and Best Day */}
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Location - Desktop only */}
                        <div className="hidden md:block md:w-1/2">
                            <Location />
                        </div>
                        
                        {/* Best Day */}
                        <div className="w-full md:w-1/2">
                            <BestDay />
                        </div>
                    </div>

                    {/* Today's Highlights Section */}
                    <div className="w-full bg-l-white shadow-[0_0_4px_2px_rgba(0,0,0,0.1)] rounded-3xl p-6">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Today's Highlights</h2>
                        
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* UV Index and Humidity Card */}
                            <div className="w-full md:w-1/2 bg-gray-50 rounded-2xl p-6">
                                {/* UV Index */}
                                <div className="mb-6">
                                    <p className="text-sm text-gray-600 mb-3">UV Index</p>
                                    <div className="w-full h-2 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-600"></div>
                                </div>
                                
                                {/* Humidity */}
                                <div>
                                    <p className="text-sm text-gray-600 mb-2">Humidity</p>
                                    <p className="text-2xl font-semibold text-gray-900 mb-3">65%</p>
                                    <div className="w-full h-2 rounded-full bg-gray-300">
                                        <div className="w-[65%] h-full bg-blue-400 rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Weather Data Grid */}
                            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                                {/* Wind Speed */}
                                <div className="bg-m-white rounded-2xl p-4 flex flex-col justify-center items-center">
                                    <p className="text-xs text-gray-600 mb-2">Wind speed</p>
                                    <p className="text-2xl font-semibold text-gray-900">5 km/h</p>
                                </div>

                                {/* Precipitation Probability */}
                                <div className="bg-m-white rounded-2xl p-4 flex flex-col justify-center items-center">
                                    <p className="text-xs text-gray-600 mb-2 text-center">Precipitation Probability</p>
                                    <p className="text-2xl font-semibold text-gray-900">Val</p>
                                </div>

                                {/* AQI */}
                                <div className="bg-m-white rounded-2xl p-4 flex flex-col justify-center items-center">
                                    <p className="text-xs text-gray-600 mb-2">AQI</p>
                                    <p className="text-2xl font-semibold text-gray-900">Val</p>
                                </div>

                                {/* Precipitation Amount */}
                                <div className="bg-m-white rounded-2xl p-4 flex flex-col justify-center items-center">
                                    <p className="text-xs text-gray-600 mb-2 text-center">Precipitation Amount</p>
                                    <p className="text-2xl font-semibold text-gray-900">Val</p>
                                </div>
                            </div>
                        </div>

                        {/* Show More Button - Mobile Only */}
                        <button className="md:hidden mt-6 w-full py-3 px-6 text-gray-700 font-medium bg-gray-100 rounded-full hover:bg-gray-200 transition">
                            Show more
                        </button>
                    </div>
                </div>

                {/* Right Section - 40% width on desktop */}
                <div className="w-full md:w-[40%] flex flex-col gap-6">
                    
                    {/* Chance of Rain */}
                    <div className="w-full h-1/2">
                        <ChanceOfRain />
                    </div>
                    <div className="w-full h-1/2">
                        <Suggestion />
                    </div>

                </div>
            </div>

            {/* View Past 7 Days Button */}
            <button className="my-6 py-3 px-10 h-14 font-medium text-gray-900 rounded-full bg-white hover:bg-gray-50 transition shadow-sm">
                View past 7 days
            </button>
        </div>
    </div>
  )
}

export default WeatherPage