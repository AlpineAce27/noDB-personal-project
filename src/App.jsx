import { useState } from "react";
import "./App.css";
import VehicleTable from "./components/VehicleTable";
import AddVehicle from "./components/AddVehicle";
import axios from "axios";

//create a function to add a new vehicle
const createVehicle = (craftName, deltaV) => {
  const newVehicle = { //id and current location are not in this scope, so we only put in what we can before we send it to the server where it will add the other properties
    craftName : craftName,
    deltaV : deltaV,
  }

  axios.post('/api/vehicle', newVehicle).then((response) => {
    setCurrentData(response.data)
  })
}

function App() {

  const background = {
    backgroundImage : "url(https://wallpapercave.com/wp/5Nunz4j.jpg)",
    height : "100vh",
    marginTop: "-70px", 
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }


  return (
    <div style={background}>
      <div>
        <h1>CLICKY SPACE PROGRAM</h1>
      </div>
      <div>
        <VehicleTable />
      </div>
      <div>
        <AddVehicle createVehicle = {createVehicle}/>
      </div>
    </div>
  );
}

export default App;
