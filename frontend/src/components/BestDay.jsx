import React from 'react'
import HappySun from '../assets/Happy-sun.svg'

const BestDay = () => {
  // This data will come from props/backend
  const bestDayData = {
    label: 'Best day',
    day: 'Wednesday,',
    date: '01 Oct'
  }

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 flex items-center justify-between h-full">
      <div className="flex flex-col justify-center">
        <p className="text-sm font-medium text-gray-700 mb-2">{bestDayData.label}</p>
        <p className="text-3xl font-bold text-gray-900 leading-tight">{bestDayData.day}</p>
        <p className="text-3xl font-bold text-gray-900">{bestDayData.date}</p>
      </div>
      
      {/* Sun Icon - Replace with your image */}
      <div className="flex-shrink-0">
        <img 
          src={HappySun}
          alt="best day" 
          className="w-24 h-24"
        />
      </div>
    </div>
  )
}

export default BestDay