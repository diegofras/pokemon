import {Routes, Route, BrowserRouter as Router,} from "react-router-dom";
import './css/App.css';
import Naslovna from "./Components/Naslovna";
import Aktivnosti from "./Components/Aktivnosti";
import Destinacije from "./Components/Destinacije";
import Regija from "./Components/Regija";



function App() {
  return (
    <div className="App">


        <Router>
          <Routes>
            <Route path="/" element={<Naslovna/>}></Route>
            <Route path="/Regija" element={<Regija/>}></Route>
            <Route path="/Destinacije" element={<Destinacije/>}></Route>
            <Route path="/Aktivnosti" element={<Aktivnosti/>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
