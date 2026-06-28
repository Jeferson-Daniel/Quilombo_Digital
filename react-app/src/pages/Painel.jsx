import React from 'react';
import { Link } from 'react-router-dom';
import Indicador from '../components/Indicador';
import { indicadores, atividadesRecentes } from '../data/dados';

function Painel() {
  return (
    <main className="container">
      <div className="painel-header">
        <h2>Dashboard Analítico</h2>
        <Link to="/cadastro" className="botao">Inserir Novo Registro</Link>
      </div>
      
      <section className="indicadores-grid">
        {indicadores.map((ind) => (
          <Indicador key={ind.id} valor={ind.valor} label={ind.label} />
        ))}
      </section>

      <div className="dashboard-layout">
        <section className="painel-box">
          <h3>Visão Global da Plataforma</h3>
          <p>
            O sistema tem processado um volume crescente de registros socioeconômicos na região de abrangência.
            A sistematização destes dados permite uma articulação mais eficiente entre os arranjos produtivos locais
            e o escoamento da agricultura familiar, além de preservar informações de valor histórico-cultural.
          </p>
          <div style={{ marginTop: '24px' }}>
            <Link to="/relatorios" className="botao botao-secundario">Acessar Base de Dados</Link>
          </div>
        </section>

        <section className="painel-box">
          <h3>Atividades Recentes</h3>
          <ul className="lista-atividades">
            {atividadesRecentes.map((ativ) => (
              <li key={ativ.id}>
                <span className="tempo-atividade">{ativ.tempo}</span>
                {ativ.descricao}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Painel;
