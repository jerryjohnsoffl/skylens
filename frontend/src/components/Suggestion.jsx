import React, { useState } from 'react'

const Suggestion = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // This data will come from backend
  const suggestions = [
    {
      title: 'Stay hydrated',
      description: 'Drink plenty of water, even if you don\'t feel thirsty. Sunny weather can dehydrate you faster.'
    },
    {
      title: 'Wear sunscreen',
      description: 'Protect your skin from harmful UV rays by applying sunscreen before going outside.'
    },
    {
      title: 'Seek shade',
      description: 'Take breaks in shaded areas during peak sun hours to avoid overheating.'
    }
  ]

  return (
    <div className="bg-white/20 shadow-[0_0_4px_2px_rgba(0,0,0,0.1)] backdrop-blur-sm rounded-3xl p-6 h-full flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Suggestions:</h2>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          {suggestions[currentIndex].title}
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          {suggestions[currentIndex].description}
        </p>
      </div>
                     
      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {suggestions.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-gray-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Suggestion