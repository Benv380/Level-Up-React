import logo from './logo.svg';
import Home from './pages/Home';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Catalogo from './pages/Catalogo';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './App.css';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalogo" element={<Catalogo />} />
      </Routes>
      <Footer />
    </div>
    
  );
}

export default App;
