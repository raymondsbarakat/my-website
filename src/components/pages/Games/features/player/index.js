import React from 'react'
import walkSprite from '../tile/player_walk.png'
import { connect } from 'react-redux'
import handleMovement from './movement'


function Player(props){
    return(
        <div style = {{
            position: 'absolute',
            top: props.position[1],
            left: props.position[0],
            backgroundImage: `url('${walkSprite}')`,
            backgroundPosition: props.spriteLocation,
            width: '40px',
            height: '40px',
           // backgroundSize: "200px 500px"
        }}/>
    )
}

function mapStateToProps(state){
    return{
        ...state.player, // spread operator
    }
}

export default connect(mapStateToProps)(handleMovement(Player))
