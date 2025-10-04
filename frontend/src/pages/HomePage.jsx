import React from 'react'

const HomePage = () => {
  return (
    <div className="w-full min-h-screen flex justify-center  items-center bg-gradient-to-b from-[#52C7E8] to-[#96D9EC] ">
        <div className="h-full w-full flex justify-center items-center">
            <div className="h-[467px] w-3/5 bg-sh-white rounded-4xl flex flex-col items-center">
                <div className="h-1/2 flex justify-center items-center">
                    <h2 className="text-t-black text-5xl font-semibold text-center w-3/4 leading-16">What’s in the Sky Today?</h2>
                </div>
                <div className="h-1/2 flex justify-center items-center">
                    <form action="">
                        <label htmlFor=""></label>
                        <button className="bg-blue-700 h-12 w-2xs text-white font-medium text-xl rounded-full">Check Weather</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage