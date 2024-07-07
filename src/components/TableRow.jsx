// import ModeButtons from './ModeButtons.jsx'
// import Description from './Description.jsx'
// import Rate from './Rate.jsx'
// import Hours from './Hours.jsx'
import {useState} from 'react'
import axios from 'axios'
import NavButtons from './NavButtons'
import DeactivateButton from './DeactivateButton'

const TableRow = () => {

    return (
        <tr>
            <td><NavButtons/></td>
            <td>Catshit 1</td>
            <td>00:00:01:39</td>
            <td>Atmosphere</td>
            <td>3</td>
            <td><DeactivateButton/></td>
        </tr>
    )
}
export default TableRow