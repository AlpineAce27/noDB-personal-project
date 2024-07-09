import {useState} from 'react'
import axios from 'axios'

function NavButtons(props) {
    
    
    location = props.location
    
    //these buttons have to change depending on where the craft is located
    // if(location === "Lunar Surface")
    // {
    //     return (
    //         <>
    //         <button id="liftoff-button">TAKE OFF</button>
    //         </>
    //     )
    // }else if (location === "Launchpad") {
    //     return (
    //         <>
    //         <button id="launch-button">LAUNCH</button>
    //         </>
    //     )
    // }else{
    //     return (
    //         //if it's anywhere but the launchpad, show the nav out/back buttons
    //         <>
    //         <button>Navigate Back</button>
    //         <button>Navigate Out</button>
    //         </>
    //     ) 
    // }
    return (
                //if it's anywhere but the launchpad, show the nav out/back buttons
                <>
                <button>Navigate Back</button>
                <button>Navigate Out</button>
                </>
            ) 
}

export default NavButtons