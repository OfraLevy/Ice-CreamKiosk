import { useState } from "react";
import Header from "./components/Header";
import FlavorList from "./components/FlavorList";
import OrderSummary from "./components/OrderSummary";
import NoticeArea from "./components/NoticeArea";

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
  const [scoopsSelected, setScoopsSelected] = useState(0)
  return (
    <div className="App">
      <Header />
      <div className="available-filter">
        <label className="switch">
          <input type="checkbox" checked={showOnlyAvailable} onChange={()=>setShowOnlyAvailable(!showOnlyAvailable)}/>
            <span className="slider"></span>
        </label>
        <label>show Only Available</label>
      </div>
      <div className="app-content">
      <FlavorList flavors={flavors} showOnlyAvailable={showOnlyAvailable} setScoopsSelected={setScoopsSelected} setFlavors={setFlavors} scoopLimit={SCOOP_LIMIT}/>
      <div className="notice-container">
      { scoopsSelected>=SCOOP_LIMIT && ( 
        <NoticeArea message="Scoop limit reached" />)
      }
      {  showOnlyAvailable && flavors.filter(f => !f.isSoldOut).length === 0 &&( 
        <NoticeArea message="No flavors to show" />)
      }
      </div>
      <OrderSummary scoopsSelected={scoopsSelected}/>
    </div>
  </div>
  );
}

export default App;
