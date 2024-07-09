import { useState, useEffect } from 'react'
import axios from "axios";

function AddVehicle(props) {
    
    const currentData = props.currentData
    const setCurrentData = props.setCurrentData
    const createVehicle = props.createVehicle
    const setInputVehicleName = props.setInputVehicleName
    const inputVehicleName = props.inputVehicleName
    const setInputDeltaV = props.setInputDeltaV
    const inputDeltaV = props.inputDeltaV

    //const [vehicleName]

    //see scott's react-demo-2 in the ft-9 discord channel for details on how to use state values and onclick to use inputs as variables for the axios request

    return (
      <>
      <button onClick={() => createVehicle(inputVehicleName, inputDeltaV)}>Add Vehicle</button> <br /><br />
      <label htmlFor="craftName">Craft Name: </label>
      <input type="text" name="craftName" placeholder={inputVehicleName} onChange={(e) => setInputVehicleName(e.target.value)}/>
      <br /><br />
      <label htmlFor="deltaV">Delta V: </label>
      <input type="text" name="deltaV" placeholder={inputDeltaV} onChange={(e) => setInputDeltaV(e.target.value)}/>
      </>
    )
  }
  
  export default AddVehicle