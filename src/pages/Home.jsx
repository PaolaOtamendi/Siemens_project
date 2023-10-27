import './home.css';
import Header from '../components/Header';
import Chat from '../components/chat';

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

      <div>
        <Chat></Chat>
      </div>
      </body>
    </section>

  );
}
export default Home;