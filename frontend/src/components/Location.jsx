import React from 'react'

const Location = () => {
  return (
    <div className="w-full h-full bgl-l-white  shadow-[0_0_4px_2px_rgba(0,0,0,0.1)] rounded-3xl p-6 flex items-center justify-between">
      <div className="flex items-start gap-4">
        {/* Location Pin Icon */}
        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
        
        {/* Location Info */}
        <div className="flex flex-col">
          <p className="text-sm font-medium text-gray-900 mb-1">Wednesday, 01 Oct</p>
          <p className="text-sm text-gray-600 mb-2">Kochi, India</p>
          <p className="text-5xl font-bold text-gray-900 mb-1">33°C</p>
          <p className="text-sm text-gray-600">Sunny</p>
        </div>
      </div>

      {/* Sun Icon */}
      <div className="flex-shrink-0">
        <svg className="w-20 h-20 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5"/>
          <path d="M12 1v4m0 14v4M4.22 4.22l2.83 2.83m9.9 9.9l2.83 2.83M1 12h4m14 0h4M4.22 19.78l2.83-2.83m9.9-9.9l2.83-2.83" strokeWidth="1" stroke="currentColor"/>
        </svg>
      </div>
    </div>
  )
}

export default Location