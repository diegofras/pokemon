import { Link } from 'react-router-dom';
import '../css/App.css';
import Logo from "../Slike/logo.png";
import "../css/Destinacijecss.css";
import Unown from "../Slike/DestinacijaSlike/unownslika.png";

function Destinacije() {
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
      <div className='ContentDes'>
        <div className='Bell'>
          <h1>
            Mjesta za posjetiti!
          </h1></div>
        <div className='Container'>
          <div className='DestinacijeAbout'>
            <h2>Najbolje lokacije</h2>
            <div className='DestinacijeTekstSlika'>
              <p> <p>Dobrodošli u regiju Johto, gdje vas očekuje mnoštvo uzbudljivih aktivnosti! Posjetite povijesne lokacije poput Spaljenog Tornja, sudjelujte u natjecanjima u National Parku, ili istražujte skrivene šumske staze. Uživajte u lokalnim specijalitetima i opuštanju na obali jezera. Johto nudi avanturu i zabavu na svakom koraku!</p></p>
              <img src={Unown}></img>
            </div>
          </div>
        </div>
        <div className='Kultura'>
        <h2>
              Kulturna baština
            </h2>
            <div className='KulturaSlike'>
              <div className='AlphKult'>
                <div className='AKSlika'></div>
                <div className='DesTekst DT1'>
                  <h3>Ruševine Alph</h3>
                  <p>Drevno arheološko nalazište koje skriva brojne zagonetke i tajne. Ovo mjesto je dom misterioznih Unown-a i nudi jedinstveno iskustvo istraživanja povijesti Johto regije.</p>
                </div>

              </div>
              <div className='BellKult'>
                <div className='BellSlika'></div>
                <div className='DesTekst DT1'>
                  <h3>Bell Toranj</h3>
                  <p>Smješten u Ecruteak Cityju, Bell Tower je svetište posvećeno Ho-oh-u. Posjetitelji dolaze ovdje kako bi se molili i nadali blagoslovu od legendarnog Pokémon-a.</p>
                </div>

              </div>
            </div>
        </div>
        <div className='Priroda'>
        <h2>
              Prirodna baština
            </h2>
            <div className='PrirodaSlike'>
              <div className='SilverPrir'>
                <div className='SPSlika'></div>
                <div className='DesTekst DT2'>
                  <h3>Mt. Silver</h3>
                  <p>Impozantna planina koja dijeli Johto i Kanto regiju. Poznata po svojim izazovima i kao stanište rijetkih i moćnih Pokémon-a, pruža vrhunsko iskustvo za iskusne trenere.</p>
                </div>

              </div>
              <div className='RagePrir'>
                <div className='RPSlika'></div>
                <div className='DesTekst DT2'>
                  <h3>Jezero Rage</h3>
                  <p>Poznato po legendarnom crvenom Gyaradosu, ovo jezero je idealno mjesto za ribolov i istraživanje. Okruženo je predivnim krajolikom, privlači brojne trenere i avanturiste.</p>
                </div>

              </div>
            </div>
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

export default Destinacije;
