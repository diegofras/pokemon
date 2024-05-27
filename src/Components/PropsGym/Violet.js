import GymLeader from "./GymLeader";
import "../../css/Aktivnosticss.css";
export default function Violet(){
    let gradInfo = {
        Grad: "1. Violet City",
        Leader: "Gym leader: Falkner",
        Vrsta: "Vrsta: Leteći Pokemoni"
    };
    return(
        <div className="App">
            <GymLeader pr={gradInfo}/>
        </div>
    )
}