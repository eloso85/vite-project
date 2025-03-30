import React from "react";

export default function StateArray(){
    
    const [myFavoriteThings, setmyFavoriteThings] = React.useState([])

    const allFavoriteThings = ["cat", "dog", "mouse"]

    function addFavortieThing(){
        setmyFavoriteThings(prev=> [...prev, allFavoriteThings[prev.length]])
    }
    
    return(
        <>
        <div>
            <button onClick={addFavortieThing}>Add Items</button>
            <section>
                {myFavoriteThings.map((thing, index) =><p key={index}>{thing}</p>)}
            </section>
        </div>
        </>
    )
}