import reactLogo from "../assets/react-logo.png"
function Header(){
    return(
        <section className="header">
            <img srcSet={reactLogo}/>
            <div className="companyName">Chef App</div>
        </section>
    )
}

export default Header