import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Listado from './pages/Listado'
import ReactHookForm from './pages/Rhf'

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
                <Route
                path='/rhf'
                element={<ReactHookForm />}
              />
            </Routes>
          </div>
        </Router>
      </>
    )
  }

export default App
