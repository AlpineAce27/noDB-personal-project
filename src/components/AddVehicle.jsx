import { useState, useEffect } from 'react'
import axios from "axios";

function AddVehicle() {
    
    //const addVehicle = props.addVehicle

    return (
      <>
      <button >Add Vehicle</button>
      <input type="text" name="craftName" placeholder='Untitled Spacecraft 1'/>
      <input type="text" name="deltaV" placeholder='3'/>
      </>
    )
  }
  
  export default AddVehicle