import './App.css'
import { Routes, Route} from 'react-router-dom'
import Accueil from './pages/accueil'
import Login from './pages/login'
import LoginClient from './pages/loginClient'
import CreateResto from './pages/createResto'
import CreateClient from './pages/createClient'
import HomeResto from './pages/homeResto'
import Publier from './pages/publier'
import Vues from './pages/vues'
import HomeClient from './pages/homeClient'
import Historique from './pages/historique'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>  
      <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/loginClient' element={<LoginClient/>} />
          <Route path='/createResto' element={<CreateResto/>} />
          <Route path='/createClient' element={<CreateClient/>} />
          <Route path='/homeResto' element={<HomeResto/>} />
          <Route path='/publier' element={<Publier/>} />
          <Route path='/vues' element={<Vues/>} />
          <Route path='/homeClient' element={<HomeClient/>} />
          <Route path='/historique' element={<Historique/>} />
      </Routes>
    </>
  )
}

export default App
