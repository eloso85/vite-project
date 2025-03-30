import React from "react";

export default function Form(){
    function signUp(formData){
        // const email = formData.get("email")
        // const password = formData.get("password")
        // const employment = formData.get("employmentStatus")
        const data = Object.fromEntries(formData.entries());
        console.log(formData);
        
        console.log(data);
        
    }
    return(
        <>
        <section className="form-body">
            <h1>This is a form </h1>
            <form action={signUp} className="form">
                <label htmlFor="email">Email:</label>
                    <input 
                    id="email"
                     type="email" 
                    name="email" 
                    placeholder="joe@email.com"/>
                <label htmlFor="Password">Password:</label>
                    <input 
                    id="password"
                     type="password" 
                    name="password" 
                    />

                    <fieldset>
                        <legend>Employment Status</legend>
                        <label htmlFor="">
                    <input type="radio" name="employmentStatus" value="unemployed"/>
                    unemployed
                    </label>
                    <label htmlFor="">
                    <input type="radio" name="employmentStatus" value="part-time"/>
                    part-time
                    </label>
                    <label htmlFor="">
                    <input type="radio" name="employmentStatus"  value="full-time"/>
                    full-time
                    </label>
                    </fieldset>
                    
                    

                <button>Submit</button>

            </form>
        </section>
        </>
    )
}