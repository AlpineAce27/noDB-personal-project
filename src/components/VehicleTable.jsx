import { useState, useEffect } from "react";
import axios from "axios";
import TableRow from "./TableRow";

function VehicleTable() {
  
  useEffect(() => {
    getAllVehicles()
  }, [])

  const [currentData, setCurrentData] = useState([])

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
          craft = {el}
          key={el.id}
          craftName={el.craftName}
          deltaV={el.deltaV}
          location = {el.location}
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
            <th>Mission Clock</th>
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
