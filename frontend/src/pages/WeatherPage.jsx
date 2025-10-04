import React from 'react'
import ChanceOfRain from '../components/ChanceOfRain'

const WeatherPage = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#52C7E8] to-[#96D9EC] pt-12">
        <div className="h-full w-full flex flex-col justify-center items-center">
                <div className="container flex justify-center rounded-4xl items-center w-3/4 h-[548px] bg-sh-white">
            
            </div>
            <button className="my-5 py-3 px-10 h-14 w-2xs font-medium text-t-black rounded-full bg-sh-white">View past 7 days</button>
        </div>
    </div>
  )
}

export default WeatherPage