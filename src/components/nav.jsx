const nav = () => {
  return (
    <header>
        <nav>
          <div className="logo-container">
            <img src="src/assets/images/logo.png" alt="Logo" />
          </div>
          <div>
            <ul>
              <li><a href="#live">LIVE!</a></li>
              <li><a href="#get-points">ADQUIRIR-PONTOS</a></li>
              <li><a href="#get-powers">COMPRAR-PODERES</a></li>
            </ul>
          </div>
          <div className="div-pontos">
            <p className="pontos">0</p>
            <p>P</p>
          </div>
        </nav>
      </header>
  )
}

export default nav