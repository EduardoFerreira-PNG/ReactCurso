import {BrowserRouter as Router,Routes,Route,Link, NavLink} from 'react-router-dom'
import Footer from './components/layouts/Footer';
import NavBar from './components/layouts/NavBar';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Home from './pages/Home';



function App() {


  return (
    <Router>
       <NavBar/>
    <Routes>
    <Route exact path="/" element={<Home />} > </Route>
    <Route path="/contato" element={<Contato />} > </Route>
    <Route path="/empresa" element={<Empresa />} > </Route>
    </Routes>
    <Footer />
    </Router>
  )
}

export default App;
                                                                                                      