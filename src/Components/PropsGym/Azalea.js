import GymLeader from "./GymLeader";
import "../../css/Aktivnosticss.css";
export default function Azalea(){
    let gradInfo = {
        Grad: "2. Azalea Town",
        Leader: "Gym leader: Bugsy",
        Vrsta: "Vrsta: Bube Pokemoni"
    };
    return(
        <div className="App">
            <GymLeader pr={gradInfo}/>
        </div>
    )
}