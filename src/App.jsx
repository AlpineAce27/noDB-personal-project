import { useState } from "react";
import "./App.css";
import VehicleTable from "./components/VehicleTable";
import AddVehicle from "./components/AddVehicle";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>CLICKY SPACE PROGRAM</h1>
      </div>
      <div>
        <VehicleTable />
      </div>
      <div>
        <AddVehicle />
      </div>
    </>
  );
}

export default App;
