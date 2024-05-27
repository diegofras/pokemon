import GymLeader from "./GymLeader";
import "../../css/Aktivnosticss.css";
export default function Cianwood(){
    let gradInfo = {
        Grad: "5. Cianwood City",
        Leader: "Gym leader: Chuck",
        Vrsta: "Vrsta: Borilački Pokemoni"
    };
    return(
        <div className="App">
            <GymLeader pr={gradInfo}/>
        </div>
    )
}