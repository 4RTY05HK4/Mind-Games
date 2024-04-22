export function Navbar(props){
    return (
        <nav>
            <h1>Mind Games</h1>
            <button 
                onClick={props.toggleDropMenu}
                className="nav-button"
            >   
                <div>
                    {
                        props.dropMenu ?
                            <img 
                            src="./images/close.png" 
                            alt="close drop down menu" 
                            className="drop-menu-icon"/>
                        : 
                            <img 
                            src="./images/hamburger.png" 
                            alt="open drop down menu" 
                            className="drop-menu-icon"/>
                    }
                </div>
            </button>
        </nav>
    )
}