import {useState} from 'react'
import axios from 'axios'

function NavButtons() {

    return (
        //if it's anywhere but the launchpad, show the nav out/back buttons
        <>
        <button>Navigate Back</button>
        <button>Navigate Out</button>
        </>

        //or if its on the launch pad (or lunar sufarce) show only a giant lauch button
        //<button>Liftoff<button/>
    ) 
}

export default NavButtons