import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Painel from './pages/Painel';
import Cadastro from './pages/Cadastro';
import Relatorios from './pages/Relatorios';

function Layout() {
  const location = useLocation();
  // Não mostrar Header e Footer na página de login para manter o layout centralizado
  const isLogin = location.pathname === '/login';

  return (
    <>
      {!isLogin && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/painel" element={<Painel />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/relatorios" element={<Relatorios />} />
      </Routes>
      {!isLogin && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
