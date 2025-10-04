import React from 'react';

export default function ChanceOfRain() {
  // Fixed time periods from the image
  const rainData = [85, 45, 20, 15, 15, 18, 18, 18];
  const timePeriods = ['03 am', '06 am', '09 am', '12 pm', '03 pm', '06 pm', '09 pm', '12 am'];
  
  return (
    <div className="bg-gray-100 bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 shadow-md max-w-xl w-full">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-left">
        Chance of Rain
      </h2>
      
      {rainData && rainData.length > 0 ? (
        <>
          <div className="space-y-3">
            {timePeriods.map((time, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="text-gray-700 font-normal w-16 text-base">
                  {time}
                </span>
                
                <div className="flex-1 bg-gray-300 rounded-full h-1.5 relative overflow-hidden">
                  <div
                    className="bg-blue-500 h-1.5 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${rainData[index] || 0}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between mt-8 text-sm text-gray-600 font-normal">
            <span className="text-left flex-1">Sunny</span>
            <span className="text-center flex-1">Rainy</span>
            <span className="text-right flex-1">Heavy Rain</span>
          </div>
        </>
      ) : (
        <div className="text-center text-gray-600 py-8">
          No data available
        </div>
      )}
    </div>
  );
}