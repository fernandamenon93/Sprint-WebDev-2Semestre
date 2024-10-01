import { FaGithub } from "react-icons/fa";

const footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-links">
        <a href="#home">LIVE!</a>
        <a href="#about">ADQUIRIR PONTOS</a>
        <a href="#services">COMPRAR PODERES</a>
      </div>
      <div className="footer-social">
        <a href="https://github.com/fernandamenon93/Sprint-WebDev-2Semestre" target="_blank" rel="noopener noreferrer">
          <FaGithub color="white" size={35}/>
        </a>
      </div>
      <div className="footer-info">
        <p>&copy; 2024 Virtual Vanguard. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
  )
}

export default footer