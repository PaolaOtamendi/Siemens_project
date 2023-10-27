import { getAuth, signOut } from 'firebase/auth';

const Header = () => {

  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth)
    .then(() => {
      console.log('Usuario desconectado con éxito');
      window.location.href = '/Login';
    })
    .catch((error) => {
      // Maneja cualquier error que ocurra durante el cierre de sesión
      console.error('Error al desconectar:', error);
    });
  }
;

  return (
    <div>
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
        <a className="letreroInicio" onClick={handleLogout}>
          Salir
        </a>
        <span className="letreroIdioma">Español</span>
      </div>
    </div>
  );
}

export default Header;
