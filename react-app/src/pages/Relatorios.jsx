import React from 'react';
import { comunidades } from '../data/dados';

function Relatorios() {
  return (
    <main className="container">
      <h2>Relatórios e Mapeamento</h2>
      <p style={{ marginBottom: '30px' }}>
        Abaixo estão os dados consolidados das iniciativas cadastradas no sistema,
        permitindo uma visão geral da atuação do projeto Quilombo Digital.
      </p>

      <div className="tabela-container">
        <table className="tabela">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome da Comunidade/Associação</th>
              <th>Famílias Envolvidas</th>
              <th>Atividade Principal</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {comunidades.map((com) => (
              <tr key={com.id}>
                <td>{com.id}</td>
                <td><strong>{com.nome}</strong></td>
                <td>{com.familias}</td>
                <td>{com.atividade}</td>
                <td>
                  <span className="status-chip status-ativo">Ativo</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="relatorio-footer">
        <img src="/img/cultura-afrobrasileira.jpg" alt="Manifestação cultural afro-brasileira" className="relatorio-imagem" />
        <p className="relatorio-caption">Registro de evento cultural comunitário mantido na base de dados.</p>
      </div>
    </main>
  );
}

export default Relatorios;
