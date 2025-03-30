
import ChefMain from "./components/chefMain";
import Jokes from "./components/conRen";
import jokeData from "./assets/jokedata";
import Header from "./components/header";



export default function App(){
    return(
        <>
        <Header />
        
        <ChefMain />
        <Jokes jokes={jokeData} />
        
        </>
    )
}