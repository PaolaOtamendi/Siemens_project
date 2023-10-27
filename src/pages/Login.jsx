import Image from "../assets/smsf.png";
import "./login.css";
import Header from "../components/Header";

const Login = () => {
  return (
    <section className="login-page">
      <header className="header">
        <Header />
      </header>
      <div className="login-container">
        <div className="tittle">Iniciar la sesión</div>
        <div className="form-container">
          <div className="information-text">
            " Desde 11 04 2023 este es nuestro nuevo portal de empleo - si ya
            tenías una cuenta con nosotros, por favor vuelve a registrarte
            utilizando la misma dirección de correo electrónico para aplicar a
            vacantes o mantener tu perfil. En caso de que quieras hacer un
            seguimiento de tus solicitudes pasadas, puedes seguir entrando con
            tus credenciales anteriores "
          </div>
        </div>
        <form>
          <div className="form-container-2">
            <div className="email-container">
              <label className="input-label">Correo Electrónico</label>
              <input type="email" id="email" />
            </div>
            <div className="passwordText">
              <label className="input-password">Contraseña</label>
            </div>

            <input type="password" id="password" />
            <div className="finalText">
              <p>Olvidaste la contraseña?</p>
              <div className="BottonLogin">
                <button className="submitBotton" type="submit">
                  Iniciar Sesión
                </button>
              </div>
              <div className="BottonLogin">
                <button className="googleBotton" type="submit">
                  Iniciar con Google
                </button>
              </div>
              <p>Necesita una cuenta?</p>
              <p>Registrar</p>
            </div>
          </div>
        </form>
      </div>
      <div className="square-container">
        <div className="square top"></div>
        <img src={Image} alt="bgs" className="p_image" />

        <div className="square bottom"></div>
      </div>
    </section>
  );
};

export default Login;
