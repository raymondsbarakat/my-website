import React from 'react'
import { Link } from 'react-router-dom';
//import { handleMovement } from '../pages/Games/features/player/movement'
//onClick = {removeKeyDownListener}
function refresh(){
    console.log("AT HEADER")
 //   removeKeyDownListener
}

function Header(){
        return (
            <header style = {headerStyle}> 
                <h1>Raymond Sharbel Barakat</h1>
                <Link to="/" > Home </Link> 
                | <Link to="/about">About </Link> 
                | <Link to="/game">Game </Link> 
                | <Link to="/scheduler">Scheduler </Link>
            </header>
        )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Header;
