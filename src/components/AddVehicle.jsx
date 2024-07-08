import { useState, useEffect } from 'react'
import axios from "axios";

function AddVehicle(props) {
    
    const createVehicle = props.createVehicle

    //see scott's react-demo-2 in the ft-9 discord channel for details on how to use state values and onclick to use inputs as variables for the axios request

    return (
      <>
      <button onClick={createVehicle}>Add Vehicle</button> <br /><br />
      <label htmlFor="craftName">Craft Name: </label>
      <input type="text" name="craftName" placeholder='Untitled Spacecraft 1'/>
      <br /><br />
      <label htmlFor="deltaV">Delta V: </label>
      <input type="text" name="deltaV" placeholder='3'/>
      </>
    )
  }
  
  export default AddVehicle