import React from "react";

export default function StateObject(){
    

    

    const [contact, setContact] = React.useState({
    firstName: "Alejandro",
    lastName: "Garcia",
    phone: "512-555-1212",
    email: "alejandro@example.com",
    isFavorite: true,
    })

    function toggleFavorite(){
        setContact(prevContact => {
            console.log({...prevContact});
            
            return{
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
       
        })
        
        
    }

    return(
        <>
        <div className="user-card">
            <button
            onClick={toggleFavorite}
            aria-pressed={contact.isFavorite}
            aria-label="add to favorites"
            className="favorite-button"
            >
            {contact.isFavorite ? <span>⭐</span> : <span>🤢</span>}
            </button>
        
            <h2>{contact.firstName}</h2>
            <h2>{contact.lastName}</h2>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
        </div>
        </>
    )
}
