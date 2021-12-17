import NavBar from './components/NavBar'
import Inicio from './components/Inicio'
import Login from './components/Login'
import Registro from './components/Registro'
import Contacto from './components/Contacto'
import MisPredios from './components/MisPredios'
import MisRecibos from './components/MisRecibos'
import Cobros from './components/Cobros'
import Predios from './components/Predios'
import SolicitudConv from './components/SolicitudConv'
import Usuarios from './components/Usuarios'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/registro" element={<Registro />} />
        <Route exact path="/contacto" element={<Contacto />} />
        <Route exact path="/mispredios" element={<MisPredios />} />
        <Route exact path="/misrecibos" element={<MisRecibos />} />
        <Route exact path="/cobros" element={<Cobros />} />
        <Route exact path="/predios" element={<Predios />} />
        <Route exact path="/solicitudconv" element={<SolicitudConv />} />
        <Route exact path="/usuarios" element={<Usuarios />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
