import { useState } from "react";
import Header from "./components/Header";
import "./css/toggle.css"

function App() {
  const [flavors, setFlavors] = useState([
    { id: 1, name: "Vanilla", isSoldOut: false, scoopsSelected: 0 },
    { id: 2, name: "Chocolate", isSoldOut: false, scoopsSelected: 0 },
    { id: 3, name: "Strawberry", isSoldOut: true, scoopsSelected: 0 },
    { id: 4, name: "Pistachio", isSoldOut: false, scoopsSelected: 0 }
  ]);
  const SCOOP_LIMIT = 5;
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false)
  return (
    <div className="App">
      <Header />
      <div>
        <label class="switch">
          <input type="checkbox" checked={showOnlyAvailable} onChange={()=>setShowOnlyAvailable(!showOnlyAvailable)}/>
            <span class="slider"></span>
        </label>
        <label>show Only Available</label>
        
      </div>
    </div>
  );
}

export default App;
