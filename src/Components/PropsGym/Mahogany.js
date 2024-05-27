import GymLeader from "./GymLeader";
import "../../css/Aktivnosticss.css";
export default function Mahogany(){
    let gradInfo = {
        Grad: "7. Mahogany Town",
        Leader: "Gym leader: Pryce",
        Vrsta: "Vrsta: Ledeni Pokemoni"
    };
    return(
        <div className="App">
            <GymLeader pr={gradInfo}/>
        </div>
    )
}