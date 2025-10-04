import React from 'react'
import ChanceOfRain from '../components/ChanceOfRain'
import Location from '../components/Location'
import BestDay from '../components/BestDay'

const WeatherPage = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#52C7E8] to-[#96D9EC] pt-12">
        <div className="h-full w-full flex flex-col justify-center items-center">
            <div className="container px-5 w-11/12 h-44 bg-sh-white mb-8 rounded-3xl md:hidden">
                {/* Start here and remove these comments after completion*/}
                <Location />
            </div>
            <div className="container flex flex-col md:flex-row justify-center rounded-3xl md:rounded-4xl items-center w-11/12 md:w-3/4 h-[548px] bg-sh-white">
                {/* Both phone and desktop */}
                <div className="w-full h-auto md:h-full md:w-3/5">
                    {/* highlights and loc */}
                    <div className="w-full flex flex-col md:flex-row md:w-1/2 h-auto md:h-1/4">
                        {/* best day, loc */}
                        <div className="w-full h-full hidden md:flex">
                            {/* loc */}
                            <Location />
                        </div>
                        <div className="w-full h-36 md:h-full">
                            {/* best day */}
                            <BestDay />
                        </div>
                    </div>
                    <div className="w-full h-auto md:h-3/4">
                        {/* highlights and data */}
                        <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center">
                            {/* highlights */}
                            <div className="w-full h-3/4">
                                {/* uv index */}
                                uv index
                            </div>
                            <button className="md:hidden">Show more</button>
                            {/* till here, and call me */}
                        </div>
                        <div className="w-full">
                            {/* data */}
                        </div>
                    </div>
                </div>
                {/* Albin */}
                <div className="w-full h-auto flex flex-col md:h-full md:w-2/5">
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