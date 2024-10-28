import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Listado from './pages/Listado'
import './App.css'

function App() {

    return (
      <>
        <Router>
          <div>
            <Routes>
                <Route
                path='/'
                element={<Listado />}
              />
            </Routes>
          </div>
        </Router>
      </>
    )
  }

export default App
