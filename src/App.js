import { useState } from "react";

import { Navbar } from "./components/Navbar";
import { DropDownMenu } from "./components/DropDownMenu";
import { TriviaGame } from "./components/TriviaGame";
import { Meme } from "./components/Meme";
import { Welcome } from "./components/Welcome";

export function App(){
    const [dropMenu, setDropMenu] = useState(false)

    const [renderedComponent, setRenderedComponent] = useState(-1)

    function toggleDropMenu(){
        setDropMenu(prevState => !prevState)
    }

    function setMainComponent(value){
        setDropMenu(prevState => !prevState)
        setRenderedComponent(value)
    }

    function renderGame(value){
        switch(value){
            case 0:
                return (<TriviaGame />)
            case 1:
                return (<Meme />)
            case 2:
                return (<h1>App 3</h1>)
            case 3:
                return (<h1>App 4</h1>)
            default:
                return (<Welcome />)
        }
    }

    return (
        <div className="main">
            <Navbar 
                toggleDropMenu={toggleDropMenu}
                dropMenu={dropMenu}
            />
            {dropMenu && <DropDownMenu setMainComponent={setMainComponent}/>}
            {renderGame(renderedComponent)}
        </div>
    )
}