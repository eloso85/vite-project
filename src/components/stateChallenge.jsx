import React from "react"
export default function StateChallenge(){

    const [isGoingOut, setGoingOut] = React.useState(true)

    function trueOrFalse(){
        setGoingOut(prevGoingOut=> !prevGoingOut)
    }
    
    
    return(
        <>
        <h1>Do I feel like going out tonight</h1>
        <button className="value" onClick={trueOrFalse}>{isGoingOut ? "Yes" : "No"}</button>
        </>
    )
}