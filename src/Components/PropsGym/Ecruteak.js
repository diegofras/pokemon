import GymLeader from "./GymLeader";
import "../../css/Aktivnosticss.css";
export default function Ecruteak(){
    let gradInfo = {
        Grad: "4. Ecruteak City",
        Leader: "Gym leader: Morty",
        Vrsta: "Vrsta: Duh Pokemoni"
    };
    return(
        <div className="App">
            <GymLeader pr={gradInfo}/>
        </div>
    )
}