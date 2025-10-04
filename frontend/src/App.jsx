import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage'
import WeatherPage from './pages/WeatherPage'

function App() {

  return (
    <>
      <div className="w-full min-h-screen">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/weather' element={<WeatherPage />} />
        </Routes>
      </div> 
    </>
  )
}

export default App
