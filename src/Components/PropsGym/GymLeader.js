import "../../css/Aktivnosticss.css";
export default function GymLeader({pr}){
    return (
        <div className="App">
            <h3>{pr.Grad}</h3>
            <h4>{pr.Leader}</h4>
            <h5>{pr.Vrsta}</h5>
        </div>
    )
}