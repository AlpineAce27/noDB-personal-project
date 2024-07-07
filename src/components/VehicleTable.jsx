import { useState, useEffect } from "react";
import axios from "axios";
import TableRow from "./TableRow";

function VehicleTable() {

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
          <TableRow/>
          <TableRow/>
        </tbody>
        
      </table>
    </>
  )
}

export default VehicleTable;
