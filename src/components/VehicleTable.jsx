import { useState, useEffect } from "react";
import axios from "axios";
import TableRow from "./TableRow";

function VehicleTable(props) {

  const currentData = props.currentData
  const setCurrentData = props.setCurrentData

  useEffect(() => {
    getAllVehicles()
  }, [])



  //create a function that uses axios to get TEST_DATA from server
  const getAllVehicles = () => {
    axios.get('/api/allVehicles').then((response) => {
        setCurrentData(response.data)
    })
}

//create a function to deactivate a vehicle
const deactivate = (id2kill) => {
  axios.delete(`/api/vehicle/${id2kill}`).then((response) => {
      setCurrentData(response.data)
  })
}

 //create an array of table rows
 const rowsArray = currentData.map((el) => {
  return (
      <TableRow
          //pass down the whole craft element
          craft = {el}
          //pass down each individual property of the craft element
          key={el.id}
          craftName={el.craftName}
          launchTime = {el.launchTime}
          deltaV={el.deltaV}
          location = {el.location}
          //pass down the functions that the buttons will need
          navigate={() => navigate(el.id, direction)}
          deactivate={() => deactivate(el.id)}
          setCurrentData={setCurrentData}
      />
  )
})

  return (
    <>
      <table>

        <thead>
          <tr id="header">
            <th>{/*space above the navigate buttons*/}</th>
            <th>Craft Name</th>
            <th>Launch Date</th>
            <th>Location</th>
            <th>DeltaV</th>
            <th>{/*space above the deactivate buttons*/}</th>
          </tr>
        </thead>
    
        <tbody id="vehicles">
        {rowsArray}
        </tbody>
        
      </table>
    </>
  )
}

export default VehicleTable;
