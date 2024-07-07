import { useState, useEffect } from 'react'
import axios from "axios";

function AddVehicle() {
    
    //const addVehicle = props.addVehicle

    return (
      <>
      <button >Add Vehicle</button> <br /><br />
      <label htmlFor="craftName">Craft Name: </label>
      <input type="text" name="craftName" placeholder='Untitled Spacecraft 1'/>
      <br /><br />
      <label htmlFor="deltaV">Delta V: </label>
      <input type="text" name="deltaV" placeholder='3'/>
      </>
    )
  }
  
  export default AddVehicle