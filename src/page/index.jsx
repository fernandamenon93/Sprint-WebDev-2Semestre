import React from 'react';
import './index.css';

export default function Main() {
  return (
    <div>
      <header>
        <nav>
          <div className="logo-container">
            <img src="src/assets/images/logo.png" alt="Logo" />
          </div>
          <ul>
            <li><a href="#projeto">PROJETO</a></li>
            <li><a href="#impactos">IMPACTOS</a></li>
            <li><a href="#sobre">SOBRE</a></li>
            <li><a href="#home">HOME</a></li>
          </ul>
        </nav>
      </header>
      <section class="">
        
      </section>
      <section background-banner>
      <img class="banner" src="src/assets/images/banner.png" alt="banner" />
      </section>
      <section id="solucao" className="background-top-main">
        
        <h1 className="texto-p">A SOLUÇÃO</h1>
        <div className="container">
          <p>
            Um site interativo dedicado aos entusiastas da Fórmula E, projetado para oferecer uma experiência envolvente e informativa...
          </p>
        </div>
        <div className="red-line"></div>
      </section>

      <section className="back">
        <h2 className="h1-p">O DESAFIO</h2>
        <p className="container">
        A FIAP juntamente com a empresa Tech Mahindra, elaborou como Challenge de 2024 para as turmas de primeiro ano de Engenharia de Software o desafio de Popularizar a Fórmula E, a fim de trazer maior visibilidade aopúblico através de uma solução tecnológica a ser desenvolvida pelos alunos até o fim do ano.
        </p>
        <div className="red-line"></div>
      </section>

      <section id="impactos" className="back-2">
        <div className="container">
          <h2>IMPACTOS</h2>
          <p>
            Temos uma ideia inovadora e uma tecnologia revolucionária que estamos confiantes de que atrairá um público ainda maior para a Fórmula E...
          </p>
        </div>
      </section>
      <section>
        
      </section>

      <footer className="footer">
        
        <div className="links">
          <a href="#projeto">PROJETO</a>
          <a href="#impactos">IMPACTOS</a>
          <a href="#sobre">SOBRE</a>
          <a href="#home">HOME</a>
        </div>
        <div className="logos">
          <a href="https://github.com"><img src="src/assets/images/github.png"></img></a>
          <a href="https://linkedin.com"><img src="src/assets/images/linkedin.png"></img></a>
          <a href="https://facebook.com"><img src="src/assets/images/facebook.png"></img></a>
        </div>
        <p>© Virtual Vanguard - Todos os direitos reservados - Segurança e Privacidade</p>
      </footer>
    </div>
  );
}

