import { Link } from 'react-router-dom';
import '../css/App.css';
import '../css/Naslovnacss.css'
import Logo from "../Slike/logo.png";
import Great from "../Slike/NaslovnaSlike/greatball.png";
import KontClassComp from './KontClassComp';

function Naslovna() {
  return (
    <div className="App">

      <div className="Header">
        <nav>
          <div className='navbar'>
            <Link to="/"><img src={Logo}></img></Link>


            <ul>
              <li><Link to="/" >Naslovna</Link></li>
              <li><Link to="/Regija" >O Regiji</Link></li>
              <li><Link to="/Destinacije" >Destinacije</Link></li>
              <li><Link to="/Aktivnosti" >Aktivnosti</Link></li>
            </ul>
          </div>
        </nav>
      </div>
      <div className='ContentNas'>
        <div className='Map'>
          <h1>Dobrodošli u Johto</h1>
        </div>

        <div className='Container'>
          <div className='Uvod'>
            <p>Regija Johto, susjedna Kanto-u, poznata je po svojoj bogatoj povijesti, kulturnoj baštini i predivnim prirodnim ljepotama. Istražite veličanstvene gradove, mirne šume i uzbudljive Pokémon bitke. Otkrijte sve što Johto nudi i uživajte u nezaboravnoj avanturi!</p>
            <img src={Great}></img>
          </div>
          <div className='Novosti'>
            <h2>
              Novosti
            </h2>
            <div className='NovostiSlike'>
              <div className='NovHooh'>
                <div className='NHSlika'></div>
                <div className='NovTekst'>
                  <h3>Ho-oh viđen!</h3>
                  <p>Izvještaji potvrđuju da je legendarni Pokémon Ho-oh ponovno viđen kako leti iznad Ecruteak Cityja. Svjedoci su opisali njegovo veličanstveno perje koje sjaji u bojama duge.</p>
                </div>

              </div>
              <div className='NovRocket'>
                <div className='NRSlika'></div>
                <div className='NovTekst'>
                  <h3>Team Rocket poražen!</h3>
                  <p>U herojskoj borbi, mladi trener Gold uspješno je porazio zloglasnu kriminalnu organizaciju Team Rocket u regiji Johto. Nakon niza intenzivnih bitaka, Gold je uspio spriječiti njihove zlonamjerne planove i vratiti mir regiji. </p>
                </div>

              </div>
            </div>
          </div>


        </div>
      </div>
      <div className='RegijaContent'>
        <Link to="/Regija"><button><h2>Saznajte o regiji!</h2> </button></Link>
      </div>
      <div className='DestinacijaContent'>
        <Link to="/Destinacija"><button><h2>Istražite regiju!</h2> </button></Link>

      </div>
      <div className='AktivnostiContent'>
        <Link to="/Aktivnosti"><button><h2>Sakupljajte bedževe!</h2> </button></Link>

      </div>
      <div className='ContentNas'>
        <div className='Container2'>
          <KontClassComp></KontClassComp>
        </div>
      </div>
      <div className='Footer'>
        <div className='FooterContent'>
          <img src={Logo}></img>
          <div className='FooterKontakt'>
            <h4>Kontakt</h4>
            <p>Johto Turistička Zajednica, New Bark Town, Johto Region</p>
            <p>Email: <a href="mailto:contact@johto-tourism.com">contact@johto-tourism.com</a></p>
            <p>Broj mobitela: +123-456-7890</p>
          </div>
          
        </div>
        <p id='konOdskok'>@Diego Fras - Copyright- sva prava pridržana 2024</p>
      </div>
    </div>
  );
}

export default Naslovna;
