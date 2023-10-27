const Header = () => {
  return (
    <div>
      {/* <header className="App-header"> */}
      <div className="boxHeader">
        <a className="logoSiemens" href="https://jobs.siemens.com/careers">
          <img
            src="https://static.vscdn.net/images/careers/demo/siemens/1677768532::Siemens+Logo+2023"
            width="auto"
            height="20"
            className="d-inline-block align-top"
            alt="eightfold-logo"
          ></img>
        </a>
        <a
          className="letreroInicio"
          href="https://jobs.siemens.com/candidate/login?domain=siemens.com&hl=es&microsite=siemens.com&utm_source=bing&next=https%3A%2F%2Fjobs.siemens.com%2Fcareerhub%2Fme%3Faction%3Dedit%26profile_type%3Dcandidate%26domain%3Dsiemens.com%26customredirect%3D1%26utm_source%3Dbing%26ste_sid%3D024741e2ed95c5cdd15f6fb3d595738d"
        >
          Inicio
        </a>
        <span className="letreroIdioma">Español</span>
      </div>

      {/* <div className="degradado">
        <div className="question">
          <span>Ready to create your own journey?</span>
        </div>
        <img
          src="https://static.vscdn.net/images/careers/demo/siemens/1680611485::All+Others+Shadow+2023"
          alt=""
          className="img-banner"
        ></img>
      </div> */}
      {/* </header> */}
    </div>
  );
}

export default Header;
