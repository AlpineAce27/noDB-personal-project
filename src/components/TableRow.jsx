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
    
    //import the navigate buttons functionality to send down the parent/child chain
    const navigate = props.navigate
    const craftID = props.craft.id    

    return (
        <tr>
            <td><NavButtons navigate = {navigate} id = {craftID} location = {props.craft.currLocation}/></td>
            <td>{props.craft.craftName}</td>
            <td>{props.launchTime}</td>
            <td>{props.craft.currLocation}</td>
            <td>{props.craft.deltaV}</td>
            <td><DeactivateButton deactivate = {deactivate}/></td>
        </tr>
    )
}
export default TableRow