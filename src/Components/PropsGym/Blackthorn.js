import GymLeader from "./GymLeader";
import "../../css/Aktivnosticss.css";
export default function Blackthorn(){
    let gradInfo = {
        Grad: "8. Blackthorn City",
        Leader: "Gym leader: Clair",
        Vrsta: "Vrsta: Zmaj Pokemoni"
    };
    return(
        <div className="App">
            <GymLeader pr={gradInfo}/>
        </div>
    )
}