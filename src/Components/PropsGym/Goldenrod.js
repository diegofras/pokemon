import GymLeader from "./GymLeader";
import "../../css/Aktivnosticss.css";
export default function Goldenrod(){
    let gradInfo = {
        Grad: "3. Goldenrod City",
        Leader: "Gym leader: Whitney",
        Vrsta: "Vrst: Normalni Pokemoni"
    };
    return(
        <div className="App">
            <GymLeader pr={gradInfo}/>
        </div>
    )
}