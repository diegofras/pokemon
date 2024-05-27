import { Link } from 'react-router-dom';
import '../css/App.css';
import Logo from "../Slike/logo.png";
import '../css/Aktivnosticss.css';
import battleIcon from "../Slike/AktivnostiSlike/Battle.png";
import JohtoGym from "../Slike/AktivnostiSlike/JohtoGymLeaders.png";
import Violet from "./PropsGym/Violet";
import Azalea from "./PropsGym/Azalea";
import Goldenrod from "./PropsGym/Goldenrod";
import Ecruteak from "./PropsGym/Ecruteak";
import Cianwood from "./PropsGym/Cianwood";
import Olivine from "./PropsGym/Olivine";
import Mahogany from "./PropsGym/Mahogany";
import Blackthorn from "./PropsGym/Blackthorn";

function Aktivnosti() {
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
      <div className='ContentAkt'>
        <div className='Treneri'>
          <h1>Za pustolove</h1>
        </div>
        <div className='Container'>
          <div className='AktivnostiAbout'>
            <h2>Aktivnosti</h2>
            <div className='AktivnostiTekstSlika'>
              <p> <p>Dobrodošli u regiju Johto, gdje vas očekuje mnoštvo uzbudljivih aktivnosti! Posjetite povijesne lokacije poput Spaljenog Tornja, sudjelujte u natjecanjima u National Parku, ili istražujte skrivene šumske staze. Uživajte u lokalnim specijalitetima i opuštanju na obali jezera. Johto nudi avanturu i zabavu na svakom koraku!</p></p>
              <img src={battleIcon}></img>
            </div>
          </div>
          <div className='GymDio'>
            <h2>Porazite Gym leadere!</h2>
            <img src={JohtoGym}></img>
            <div className='Gymovi'>
              <div className='KartaGyms'>
                <div className='VioletCity gym'>1</div>
                <div className='AzaleaTown gym'>2</div>
                <div className='GoldenrodCity gym'>3</div>
                <div className='EcruteakCity gym'>4</div>
                <div className='CianwoodCity gym'>5</div>
                <div className='OlivineCity gym'>6</div>
                <div className='MahoganyTown gym'>7</div>
                <div className='BlackthornCity gym'>8</div>
              </div>
              <div className='GymList'>
                <div className='GymPrvi'>
                  <Violet />
                  <Azalea />
                  <Goldenrod />
                  <Ecruteak />
                </div>
                <div className='GymDrugi'>
                  <Cianwood />
                  <Olivine />
                  <Mahogany />
                  <Blackthorn />
                </div>
              </div>
            </div>
          </div>

          <div className="Dogadaji">
            <h2>Događaji</h2>
            <div className='PrviRedDog'>
              <div className='BugCatch'>
                <div className='BugSlika'></div>
                <div className='BugTekst'>
                  <h2>Natjecanje hvatanja buba u nacionalnom parku</h2>
                  <p>Popularno natjecanje koje se održava nekoliko puta tjedno, gdje natjecatelji love i natječu se u hvatanju najimpresivnijih Bug-type Pokémon-a.</p>
                </div>
              </div>
              <div className='DanceTheater'>
                <div className='DanceSlika'></div>
                <div className='DanceTekst'>
                  <h2>Kazalište plesa u Ecruteak Cityu</h2>
                  <p>U ovom tradicionalnom kazalištu, možete uživati u izvedbama kimono plesa koje izvode Kimono Girls. Njihovi nastupi kombiniraju elegantne plesove s pričama o Pokémon-ima i lokalnim legendama.</p>
                </div>
              </div>
            </div>
            <div className='Pokeathlon'>
              <div className='AthlonSlika'></div>
              <div className='Athlontekst'>
                <h2>Natjecanje atletike u Goldenrodu</h2>
                <p>Sportski događaj koji okuplja trenere i njihove Pokémon-e u raznim atletskim natjecanjima. Ovaj događaj slavi sportsku izvrsnost i zajedništvo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='DanceYoutube'>
        <a href="https://www.youtube.com/watch?v=57EjeSaR38A&ab_channel=7GamerMinutes%2B%3AVideoGameMusic"><button><h2>Poslušaj glazbu plesnog kazališta</h2> </button></a>
        
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

export default Aktivnosti;
