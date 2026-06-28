import React, { useState } from 'react';

function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    responsavel: '',
    tipo: 'agricultura',
    localidade: '',
    descricao: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (isSubmitted) setIsSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ nome: '', responsavel: '', tipo: 'agricultura', localidade: '', descricao: '' });
    
    // Esconde a mensagem de sucesso após 4 segundos para limpar a tela
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <main className="container">
      <div className="cadastro-container">
        <h2>Novo Registro Comunitário</h2>
        <p className="subtitulo-form">
          Preencha os dados abaixo para homologar uma nova iniciativa no sistema.
        </p>

        {isSubmitted && (
          <div className="mensagem-sucesso">
            <span>✓</span> Registro comunitário salvo com sucesso no sistema!
          </div>
        )}

        <form className="formulario" onSubmit={handleSubmit}>
          <div className="campo">
            <label htmlFor="nome">Nome da Comunidade ou Associação</label>
            <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required placeholder="Ex: Quilombo Boa Esperança" />
          </div>
          
          <div className="campo">
            <label htmlFor="responsavel">Nome do Responsável/Liderança</label>
            <input type="text" id="responsavel" name="responsavel" value={formData.responsavel} onChange={handleChange} required placeholder="Nome completo" />
          </div>
          
          <div className="campo">
            <label htmlFor="tipo">Categoria Principal</label>
            <select id="tipo" name="tipo" value={formData.tipo} onChange={handleChange}>
              <option value="agricultura">Agricultura Familiar</option>
              <option value="artesanato">Artesanato e Produção Manual</option>
              <option value="cultura">Manifestação Cultural</option>
              <option value="extrativismo">Extrativismo Sustentável</option>
              <option value="outro">Outro (Especificar na descrição)</option>
            </select>
          </div>
          
          <div className="campo">
            <label htmlFor="localidade">Localidade / Município</label>
            <input type="text" id="localidade" name="localidade" value={formData.localidade} onChange={handleChange} required placeholder="Cidade e Estado" />
          </div>
          
          <div className="campo">
            <label htmlFor="descricao">Descrição da Iniciativa</label>
            <textarea id="descricao" name="descricao" value={formData.descricao} onChange={handleChange} required placeholder="Descreva brevemente o que é produzido, quantas famílias estão envolvidas..."></textarea>
          </div>
          
          <button type="submit" className="botao botao-full">Salvar Registro no Sistema</button>
        </form>
      </div>
    </main>
  );
}

export default Cadastro;

