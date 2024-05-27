import GymLeader from "./GymLeader";
import "../../css/Aktivnosticss.css";
export default function Olivine(){
    let gradInfo = {
        Grad: "6. Olivine City",
        Leader: "Gym leader: Jasmine",
        Vrsta: "Vrsta: Željezni Pokemoni"
    };
    return(
        <div className="App">
            <GymLeader pr={gradInfo}/>
        </div>
    )
}