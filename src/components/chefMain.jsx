import React from "react"
export default function ChefMain() {
     //const ingredients = ['Chicken', "Orgeno", "Tomatoes"]

    let [isIngredient, setIngredient] = React.useState([])

         

    function handleSubmit(formData){
        const newIngredient = formData.get("ingredient")
        setIngredient(prevIngredient=> [...prevIngredient,newIngredient])
        console.log(newIngredient);
        
        
    }
    
    

    return (
        <main className="main-section">
            <div className="container">
            <form action={handleSubmit} className="main-section__form">
                <input 
                    type="text" 
                    placeholder="e.g. Oregeno"
                    aria-label="Add Ingredient" 
                    name="ingredient"
                />
                <button >Add Ingredient</button>
            </form>
            
            </div>
            <ul>
            {isIngredient.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
             ))}
</ul>
            
        </main>
    )
}