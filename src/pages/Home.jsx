import './home.css';
import Header from '../components/Header.jsx';
import Chat from '../components/Chat.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <section className='home'>
      <div>
        <header>
          <Header></Header>
        </header>
        <div className="degradado">
        <div className="question">
          <span>Ready to create your own journey?</span>
        </div>
        <img
          src="https://static.vscdn.net/images/careers/demo/siemens/1680611485::All+Others+Shadow+2023"
          alt=""
          className="img-banner"
        ></img>
      </div>
      </div>
      <body>
        <div className='vacantesEnSiemens'>
          <span>Vacantes en Siemens</span>
        </div>


        <div className="buscadores">
          <input type="text" className="inputBuscar" placeholder="Buscar" />
          <input type="text" className="inputUbicacion" placeholder="Ubicación" />

          <button className="go-button">Buscar</button>
        </div>

      <div className='div-vacante'>
        <p className='titulo-vacante'>Desarrollador Web Frontend</p>
        <p><strong>Descripción del puesto:</strong> Buscamos un desarrollador web frontend creativo y apasionado para unirse a nuestro equipo. Deberás trabajar en la creación de interfaces de usuario atractivas y funcionales utilizando tecnologías como HTML, CSS y JavaScript.</p>
        <p><strong>Skills:</strong> HTML, CSS, JavaScript, React, Diseño de interfaz de usuario</p>
        <p><strong>Experiencia:</strong> Profesional Junior</p>
        <p><strong>Modalidad:</strong>Híbrido (Remoto/Oficina)</p>
        <p><strong>País:</strong> México</p>
      </div>

      <div className='contenedor-video'>
        <p>Videos Recomendados</p>
        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/wyVRozRIAP0"
          title="Título del video"
          allowfullscreen
        />
      </div>

      <div>
        <Footer></Footer>
      </div>

      <div>
        <Chat></Chat>
      </div>

      </body>
    </section>

  );
}
export default Home;