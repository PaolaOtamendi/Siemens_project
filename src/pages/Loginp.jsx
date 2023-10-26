import people from "../assets/people.png";
import "./loginp.css";
import Header from "../components/Header";

const Login2 = () => {
  return (
    <section className="Login-page2">
      <header className="header">
        <Header />
      </header>
      <div className="container-sesion">
        <div className="texto-sesion">
          <p className="titlesesion">Iniciar Sesion</p>
          <p className="intro">
            Desde 11 04 2023 este es nuestro nuevo portal de empleo - si ya
            tenías una cuenta con nosotros, por favor vuelve a registrarte
            utilizando la misma dirección de correo electrónico para aplicar a
            vacantes o mantener tu perfil. En caso de que quieras hacer un
            seguimiento de tus solicitudes pasadas, puedes seguir entrando con
            tus credenciales anteriores
            <br></br>
            <a href='https://talent.siemens.com/es_ES/myapplications'>https://talent.siemens.com/es_ES/myapplications</a>
          </p>
        </div>
        <div className="container-inputs">
          <div className="container-email">
            <label className="input-label">Correo Electrónico</label>
            <input type="email" id="email" />
          </div>
          <div className="container-password">
            <label className="input-label">Contraseña</label>
            <input type="password" id="password" />
          </div>
          <div className="finalText">
            <p>Olvidaste la contraseña?</p>
          </div>
          <div className="buttonsopen">
            <button className="submitBotton" type="submit">
              Iniciar sesión
            </button>
          </div>
          <div className="buttonsopen">
            <button className="submitBotton" type="submit">
              Inicia con Google
            </button>
          </div>
          <div className="finalText">
            <href>Necesitar una cuenta? Registrar</href>
          </div>
        </div>
      </div>
      <div className="container-image">
        <img src={people} alt="bgs" className="image" />
      </div>
    </section>
  );
};

export default Login2;
