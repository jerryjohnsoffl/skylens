import React from 'react'

const Suggestion = () => {
  return (
    <div className="w-full  bg-l-white shadow-[0_0_4px_2px_rgba(0,0,0,0.1)] rounded-3xl max-w-sm h-full p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Suggestions:</h2>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Stay hydrated</h3>
        <p className="text-gray-700 text-md leading-relaxed mb-6">
             Drink plenty of water, even if you don't feel thirsty. Sunny weather can dehydrate you faster.
        </p>
                        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
    </div>
  )
}

export default Suggestion