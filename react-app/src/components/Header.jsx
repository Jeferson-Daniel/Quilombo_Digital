import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="cabecalho">
      <div className="container">
        <Link to="/" className="logo">
          <img src="/img/logo.png" alt="Logo Quilombo Digital" />
          <span>Quilombo Digital</span>
        </Link>
        <nav>
          <ul className="menu">
            <li><NavLink to="/" end>Início</NavLink></li>
            <li><NavLink to="/painel">Painel</NavLink></li>
            <li><NavLink to="/cadastro">Cadastro</NavLink></li>
            <li><NavLink to="/relatorios">Relatórios</NavLink></li>
            <li><NavLink to="/login">Sair</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
