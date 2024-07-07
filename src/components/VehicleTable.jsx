// import TableHeader from "./TableHeader";
// import AddButton from "./AddButton";
// import TableRow from "./TableRow";
import { useState, useEffect } from "react";
import axios from "axios";

function VehicleTable() {
  let rowArray = [];

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
          <tr>
            <td><button>navigate back</button><button>navigate out</button></td><td>Catshit 1</td><td>00:00:01:39</td><td>Atmosphere</td><td>3</td><td><button>DEACTIVATE</button></td>
          </tr>
          <tr>
          <td><button>LAUNCH</button></td><td>Catshit 2</td><td>00:00:00:00</td><td>Lanchpad</td><td>5</td><td><button>DEACTIVATE</button></td>
          </tr>
        </tbody>
        
      </table>
    </>
  )
}

export default VehicleTable;
