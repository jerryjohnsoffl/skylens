import React from 'react'
import ChanceOfRain from '../components/ChanceOfRain'

const WeatherPage = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#52C7E8] to-[#96D9EC] pt-12">
        <div className="h-full w-full flex flex-col justify-center items-center">
            <div className="container w-11/12 h-44 bg-sh-white mb-8 rounded-3xl sm:hidden">
                {/* Add location and details for phone ratio */}
                {/* Start here and remove these comments after completion*/}
            </div>
            <div className="container flex flex-col sm:flex-row justify-center rounded-3xl md:rounded-4xl items-center w-11/12 sm:w-3/4 h-[548px] bg-sh-white">
                {/* Both phone and desktop */}
                <div className="w-full h-auto">
                    {/* highlights and loc */}
                    <div className="w-full h-auto">
                        {/* best day, loc */}
                        <div className="w-full h-auto hidden sm:flex">
                            {/* loc */}
                        </div>
                        <div className="w-full h-36">
                            {/* best day */}
                        </div>
                    </div>
                    <div className="w-full">
                        {/* highlights and data */}
                        <div className="w-full flex flex-col items-center">
                            {/* highlights */}
                            <div className="w-full h-56">
                                {/* uv index */}
                            </div>
                            <button className="sm:hidden">Show more</button>
                            {/* till here, and call me */}
                        </div>
                        <div className="w-full">
                            {/* data */}
                        </div>
                    </div>
                </div>
                <div className="w-full flex-col">
                    {/* graph and suggestions */}
                    <div className="">
                        {/* graph */}
                    </div>
                    <div className="">
                        {/* suggestions */}
                    </div>
                </div>
            </div>
            <button className="my-4 py-3 px-10 h-14 w-2xs font-medium text-t-black rounded-full bg-sh-white">View past 7 days</button>
        </div>
    </div>
  )
}

export default WeatherPage