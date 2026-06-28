import React from 'react';
import Card from '../components/Card';
import { recursosHome } from '../data/dados';

function Home() {
  return (
    <main className="container">
      <section className="hero">
        <div className="hero-texto">
          <h1>Sistematização e Visibilidade Comunitária</h1>
          <p>
            A plataforma Quilombo Digital foi desenvolvida para apoiar e estruturar a gestão de dados,
            produção e cultura de comunidades tradicionais. Promovemos a inclusão e o fortalecimento
            das identidades locais através da tecnologia.
          </p>
          <a href="/cadastro" className="botao">Cadastrar Iniciativa</a>
        </div>
        <div className="hero-imagem">
          <img src="/img/comunidade-quilombola.jpg" alt="Comunidade quilombola em atividade coletiva" />
        </div>
      </section>

      <section className="impacto-secao">
        <h2>Impacto do Sistema</h2>
        <div className="impacto-grid">
          <div className="impacto-item">
            <h3>Organização de Dados</h3>
            <p>Estruturação de informações sobre famílias e produção local.</p>
          </div>
          <div className="impacto-item">
            <h3>Valorização Cultural</h3>
            <p>Registro histórico das manifestações e saberes tradicionais.</p>
          </div>
          <div className="impacto-item">
            <h3>Apoio à Produção Local</h3>
            <p>Mapeamento do escoamento e capacidade produtiva regional.</p>
          </div>
        </div>
      </section>

      <h2>Recursos da Plataforma</h2>
      <section className="recursos impacto-grid">
        {recursosHome.map((recurso) => (
          <Card key={recurso.id} titulo={recurso.titulo} descricao={recurso.descricao} />
        ))}
      </section>
    </main>
  );
}

export default Home;
