import people from "../assets/people.png";
import "./loginp.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getAuth, signInWithPopup } from "firebase/auth";
import { provider } from "../app/firebase";

const Login2 = () => {
  const auth = getAuth();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // El usuario ha iniciado sesión con Google.
        const user = result.user;
        console.log("Usuario autenticado:", user);
        // Realiza la redirección manual
        window.location.href = "/Home";
      })
      .catch((error) => {
        console.error("Error al iniciar sesión con Google:", error);
      });
  };

  return (
    <section className="containerall">
      <section className="Login-page2">
        <header className="header">
          <Header />
        </header>
        <div className="container-sesion">
          <div className="texto-sesion">
            <p className="titlesesion">Registrar</p>
            <div className="intro">
              <p className="icon">⚠</p>
              <p className="text">
                Desde 11 04 2023 este es nuestro nuevo portal de empleo - si ya
                tenías una cuenta con nosotros, por favor vuelve a registrarte
                utilizando la misma dirección de correo electrónico para aplicar
                a vacantes o mantener tu perfil. En caso de que quieras hacer un
                seguimiento de tus solicitudes pasadas, puedes seguir entrando
                con tus credenciales anteriores
                <br></br>
                <a href="https://talent.siemens.com/es_ES/myapplications">
                  https://talent.siemens.com/es_ES/myapplications
                </a>
              </p>
            </div>
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
            {/*           <div className="final-text">
            <p>¿Olvidaste la contraseña?</p>
          </div> */}
            <div className="buttonsopen">
              <button className="submitBotton" type="submit">
                Registrar
              </button>
            </div>
            <div className="buttonsopen">
              <button
                className="submitBottonGoogle"
                type="submit"
                onClick={handleGoogleSignIn}
              >
                Inicia con Google
              </button>
            </div>
            <br></br>
            <div className="selected">
              <p>Elige uno:</p>
              <div className="firts-input">
                <input type="checkbox" id="opcion1" />
                <label>
                  Hacer que mis datos sean accesibles globalmente para todas las
                  empresas del grupo Siemens, de modo que puedan considerarme
                  para cualquier vacante que coincida con mi perfil.
                </label>
              </div>
              <div className="second-input">
                <input type="checkbox" id="opcion2" />
                <label>
                  Hacer que mis datos sean accesibles solo para Siemens AG y la
                  empresa del grupo Siemens relacionada con el(los) trabajo(s)
                  que solicito.
                </label>
              </div>
            </div>
            <div className="politica-privacidad">
              <a href="https://www.siemens.com/global/en/general/talent-management/privacy-notice.html">
                Please see our Privacy Notice for further details
              </a>
            </div>
            <div className="selected">
              <input type="checkbox" id="opcion1" />
              <label>
                ¿Te gustaría suscribirte a las alertas de empleo para el groupo
                Siemens generadas por la IA?
              </label>
            </div>
            <div className="final-text">
              <a>¿Ya tienes una cuenta? Iniciar Sesión</a>
            </div>
          </div>
        </div>
        <div className="container-image">
          <img src={people} alt="bgs" className="image" />
        </div>
      </section>
      <div className="footer">
        <Footer />
      </div>
    </section>
  );
};

export default Login2;
