import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mensagem, setMensagem] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMensagem(null);
    
    // Simula tempo de autenticação na API
    setTimeout(() => {
      setIsLoading(false);
      setMensagem({ tipo: 'sucesso', texto: 'Autenticado com sucesso! Redirecionando...' });
      
      // Redireciona logo após a mensagem visual
      setTimeout(() => navigate('/painel'), 1500);
    }, 1200);
  };

  return (
    <div className="tela-login">
      <main className="card-login">
        <img src="/img/logo.png" alt="Logo Quilombo Digital" className="logo-login" />
        <h1>Quilombo Digital</h1>
        <p className="subtitulo-login">Acesso ao Painel Administrativo</p>
        
        {mensagem && (
          <div className={`mensagem-${mensagem.tipo === 'sucesso' ? 'sucesso' : 'info'}`}>
            {mensagem.texto}
          </div>
        )}
        
        <form className="formulario" onSubmit={handleLogin}>
          <div className="campo">
            <label htmlFor="email">E-mail institucional</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              placeholder="Digite seu e-mail" 
              disabled={isLoading}
            />
          </div>
          <div className="campo">
            <label htmlFor="senha">Senha de acesso</label>
            <input 
              type="password" 
              id="senha" 
              value={senha} 
              onChange={(e) => setSenha(e.target.value)} 
              required 
              placeholder="Digite sua senha" 
              disabled={isLoading}
            />
          </div>
          <button type="submit" className="botao botao-full" disabled={isLoading}>
            {isLoading ? 'Autenticando...' : 'Entrar no Sistema'}
          </button>
        </form>
        
        <div style={{ marginTop: '20px' }}>
          <Link to="/" className="link-voltar">&larr; Voltar à página inicial</Link>
        </div>
        <p className="aviso-login">
          Aviso acadêmico: Ambiente de protótipo de software.<br/>O acesso não requer credenciais reais no momento.
        </p>
      </main>
    </div>
  );
}

export default Login;
