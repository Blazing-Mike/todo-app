import "../styles/header.scss"
const Header = ({}) => {


    
    return ( 
        <header className="todo-header">
        <nav>
        <div className="logo-container">
                <h1 className="logo">TODO</h1>
            </div>
            <button className="switch-theme" onClick={() => {
                console.log("switched theme");
            }}>
                <img src="images/icon-moon.svg" alt="moon svg" />
            </button>
        </nav>
        </header>
     );
}
 
export default Header;