import React from 'react'

const BestDay = () => {
  return (
    <div className="w-full h-full bg-l-white shadow-[0_0_4px_2px_rgba(0,0,0,0.1)] rounded-3xl p-6 flex items-center justify-between">
      <div className="flex flex-col">
        <p className="text-sm text-gray-600 mb-2">Best day</p>
        <p className="text-3xl font-semibold text-gray-900 leading-tight">Wednesday,</p>
        <p className="text-3xl font-semibold text-gray-900 leading-tight">01 Oct</p>
      </div>

      {/* Cute Sun Icon */}
      <div className="flex-shrink-0">
        <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
          {/* Sun Circle */}
          <circle cx="50" cy="50" r="25" fill="#FCD34D"/>
          
          {/* Sun Rays */}
          <circle cx="50" cy="15" r="3" fill="#FCD34D"/>
          <circle cx="50" cy="85" r="3" fill="#FCD34D"/>
          <circle cx="15" cy="50" r="3" fill="#FCD34D"/>
          <circle cx="85" cy="50" r="3" fill="#FCD34D"/>
          <circle cx="25" cy="25" r="3" fill="#FCD34D"/>
          <circle cx="75" cy="75" r="3" fill="#FCD34D"/>
          <circle cx="25" cy="75" r="3" fill="#FCD34D"/>
          <circle cx="75" cy="25" r="3" fill="#FCD34D"/>
          
          {/* Smiling Face */}
          <circle cx="42" cy="45" r="2.5" fill="#000"/>
          <circle cx="58" cy="45" r="2.5" fill="#000"/>
          <path d="M 40 55 Q 50 60 60 55" stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  )
}

export default BestDay