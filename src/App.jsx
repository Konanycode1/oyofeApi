import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Accueil from './pages/accueil'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
          <Route path='/' element={<Accueil />} />
      </Routes>
    </>
  )
}

export default App
