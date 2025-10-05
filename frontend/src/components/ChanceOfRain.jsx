import React from 'react'

const ChanceOfRain = () => {
  // This data will come from backend
  const rainData = [85, 45, 20, 15, 15, 18, 18, 18]
  const timePeriods = ['03 am', '06 am', '09 am', '12 pm', '03 pm', '06 pm', '09 pm', '12 am']
 
  return (
    <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 h-full flex flex-col">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Chance of Rain
      </h2>
   
      {rainData && rainData.length > 0 ? (
        <div className="flex-1 flex flex-col">
          <div className="space-y-2 flex-1">
            {timePeriods.map((time, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-gray-700 font-medium w-14 text-xs">
                  {time}
                </span>
               
                <div className="flex-1 flex items-center">
                  <div className="flex-1 bg-gray-300 rounded-full h-1.5 relative overflow-hidden">
                    <div
                      className="bg-blue-500 h-1.5 rounded-full transition-all duration-700"
                      style={{ width: `${rainData[index] || 0}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
         
          <div className="flex justify-start">
            <div className="w-[20%]"></div>
            <div className="flex w-[80%] justify-between mt-3 text-xs text-gray-600">
                <span>Sunny</span>
                <span>Rainy</span>
                <span>Heavy Rain</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-600 py-6 text-sm">
          No data available
        </div>
      )}
    </div>
  )
}

export default ChanceOfRain