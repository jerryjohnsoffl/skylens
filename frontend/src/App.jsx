import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import WeatherPage from './pages/WeatherPage'

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Your fetch logic here
      } catch (err) {
        console.error("Error fetching data:", err)
      }
    }
    // Uncomment when you want to call fetchData
    // fetchData()
  }, [])

  return (
    <div className="w-full min-h-screen">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/weather' element={<WeatherPage />} />
      </Routes>
    </div>
  )
}

export default App