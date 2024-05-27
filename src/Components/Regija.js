import { Link } from 'react-router-dom';
import '../css/App.css';
import Logo from "../Slike/logo.png";
import "../css/ORegijicss.css";
import Sudo from "../Slike/RegijaSlike/Sudowoodo.png";
import Alph from "../Slike/RegijaSlike/alph.png";
import Tower from "../Slike/RegijaSlike/BurntTower.png";

function Regija() {
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
      <div className='ContentRe'>
        <div className='Psi'>
          <h1>
            Informacije o regiji
          </h1>
        </div>
        <div className='Container'>
          <div className='AboutJohto'>
            <h2>O Johto-u</h2>
            <div className='AboutJohtoSudoTekst'>
              <p>Regija Johto očarava svojom raznolikom prirodom koja seže od impozantnih planinskih vrhova do slikovitih obalnih područja. Guste šume, prostrane livade, bistre rijeke i jezera te šarene poljoprivredne površine oblikuju njezin prepoznatljiv krajolik. Ovdje se prožimaju pastoralne seoske scene s urbanošću gradskih središta, stvarajući jedinstvenu harmoniju između prirode i civilizacije. Raznolika flora i fauna doprinose bogatom ekosustavu regije, dok promjenjiva klima s godišnjim dobima donosi svoju čaroliju. Svaki kutak Johtoa pruža nezaboravna iskustva i prilike za istraživanje, otkrivanje i povezivanje s prirodom.</p>
              <img src={Sudo}></img>
            </div>
          </div>
          <div className='Povijest'>
            <h2>Povijest</h2>
            <div className='RuinsOfAlph'>
              <h3> Ruševine Alph</h3>
              <p>Regija Johto ima bogatu povijest koja se proteže tisućama godina unatrag, prepunu legendi, mitova i kulturnih spomenika koji svjedoče o njezinoj prošlosti. Jedna od najvažnijih lokacija iz stare povijesti su Ruševine Alph.
              </p>
              <p> Ruševine Alph nalaze se južno od Violet Cityja i predstavljaju jedno od najstarijih i najtajanstvenijih mjesta u Johto regiji. Ove drevne ruševine smatraju se ostacima civilizacije koja je postojala prije više tisuća godina. Ruševine su prekrivene hijeroglifima i zagonetnim natpisima koje su arheolozi i povjesničari pokušavali dešifrirati desetljećima.
                U središtu ovih ruševina nalaze se zagonetne komore koje sadrže ploče sa simbolima koje podsjećaju na Pokémon vrste poznate kao Unown. Prema legendama, Unown su misteriozna bića povezana s drevnim znanjem i magijom. Njihova prisutnost u ruševinama Alph sugerira da su možda bili štovani kao božanstva ili korišteni u drevnim ritualima.</p>
              <p> Arheološka istraživanja otkrila su i ostatke starog hrama koji je, čini se, bio središte religijskih aktivnosti i ceremonija. Ovaj hram, zajedno s hijeroglifima, pruža dragocjen uvid u duhovni život drevnih stanovnika Johtoa. Drevni tekstovi i artefakti pronađeni u ruševinama ukazuju na visoku razinu kulturnog razvoja i umjetnosti koja je bila prisutna u toj civilizaciji. </p>
              <p> Johto je također dom brojnih drugih povijesnih mjesta, uključujući drevne tornjeve i svetišta koja se nalaze diljem regije. Svi oni zajedno čine Johto bogatim arheološkim područjem koje privlači znanstvenike i turiste iz cijelog svijeta.</p>
              <img src={Alph}></img>
            </div>

            <div className='BurntTower'>
              <h3>Izgoreni toranj</h3>
              <p>Jedan od najvažnijih dijelova povijesti Johto regije je priča o Spaljenom Tornju i oživljavanju legendarnih pasa - Enteija, Raikoua i Suicunea. Prije otprilike 150 godina, Brass Tower je pogođen munjom i uništen u velikom požaru. U požaru su stradala tri Pokémon-a, koje je Ho-oh zatim oživio, transformirajući ih u Enteija (vatra), Raikoua (munje) i Suicunea (voda). Danas, Spaljeni Toranj stoji kao podsjetnik na ovu tragediju i čudesno oživljavanje, dok Bell Tower ostaje svetište posvećeno Ho-oh-u. Ova legenda simbolizira obnovu i neraskidivu vezu između ljudi i Pokémon-a u regiji Johto.</p>
              <img src={Tower}></img>
            </div>
          </div>
        </div>
        <div className='DestinacijaRegija'>
          <Link to="/Destinacije"><button><h2>Posjetite ova mjesta!</h2> </button></Link>
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

export default Regija;
