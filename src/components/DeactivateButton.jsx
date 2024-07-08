import { useState, useEffect } from "react";
import axios from "axios";

function DeactivateButton(props) {
    const deactivate = props.deactivate
    return (
        <>
            <button id="deactivate" onClick={deactivate}>DEACTIVATE</button>
        </>
    )
}

export default DeactivateButton