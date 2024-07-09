import {useState} from 'react'
import axios from 'axios'

function NavButtons(props) {
    
    //console.log(props)
    const id = props.id
    const location = props.location
    const navigate = props.navigate


    //these buttons have to change depending on where the craft is located
    if(location === "Lunar Surface")
    {
        return (
            <>
            <button id="liftoff-button" onClick={() => navigate(id, "back")}>TAKE OFF</button>
            </>
        )
    }else if (location === "Launchpad") {
        return (
            <>
            <button id="launch-button" onClick={() => navigate(id, "out")}>LAUNCH</button>
            </>
        )
    }else{
        return (
            //if it's anywhere but the launchpad, show the nav out/back buttons
            <>
            <button onClick={() => navigate(id, "back")}>Navigate Back</button>
            <button onClick={() => navigate(id, "out")}>Navigate Out</button>
            </>
        ) 
    }
}

export default NavButtons