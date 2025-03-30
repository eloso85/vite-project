import React from "react";

export default function Jokes({jokes}) {
    const[isShown, setIsShowen] = React.useState(false)

    function clickForJoke(){
        setIsShowen(previsShown => !previsShown)
    }
    console.log(isShown);
    

    return (
        <>
            {jokes.map((joke, index) => (
                <div key={index}>
                    <h1>This is a joke</h1>
                    <h3>{joke.setup && joke.setup}</h3>
                    {isShown === true && <p>{joke.punchline}</p>}
                    <button onClick={clickForJoke}>Click For PunchLline</button>
                </div>
            ))}
        </>
    );
}