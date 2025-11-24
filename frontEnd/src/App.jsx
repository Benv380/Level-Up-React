import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import Login from './pages/Login';
import Register from './pages/Register';
import Nosotros from './pages/Nosotros';
import Carrito from './pages/Carrito';
import Paid from './pages/Paid';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './App.css';
import { AuthProvider } from './components/context/authContext';
import { CartProvider } from './components/context/CartContext';

function App() {
  return ( 
    <AuthProvider>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/paid" element={<Paid />} />
        </Routes>
        <Footer />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
