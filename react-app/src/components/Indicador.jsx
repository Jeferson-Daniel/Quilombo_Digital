import React from 'react';

function Indicador({ valor, label }) {
  return (
    <article className="indicador-card">
      <h3>{valor}</h3>
      <p>{label}</p>
    </article>
  );
}

export default Indicador;
