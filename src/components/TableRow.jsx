// import ModeButtons from './ModeButtons.jsx'
// import Description from './Description.jsx'
// import Rate from './Rate.jsx'
// import Hours from './Hours.jsx'
import {useState} from 'react'
import axios from 'axios'
import NavButtons from './NavButtons'
import DeactivateButton from './DeactivateButton'

const TableRow = (props) => {
  
    //import the delete row functionality to send down the parent/child chain
  const deactivate = props.deactivate
  const setCurrentData = props.setCurrentData
  
  //setting up state values
  const [craftName, setcraftName] = useState(props.craft.craftName)
  const [deltaV, setDeltaV] = useState(props.craft.deltaV)
  const [location, setLocation] = useState(props.craft.currLocation)

    return (
        <tr>
            <td><NavButtons/></td>
            <td>{craftName}</td>
            <td>00:00:00:00</td>
            <td>{location}</td>
            <td>{deltaV}</td>
            <td><DeactivateButton deactivate = {deactivate}/></td>
        </tr>
    )
}
export default TableRow