import React from 'react'
import {SPRITE_SIZE} from '../../config/constants'
import './styles.css'
import { connect } from 'react-redux'



function getTileSprite(type){ // only react componenets get props
    switch(type) {
        case 0:
            return 'grass'
        case 5:
            return 'rock'
        case 6:
            return 'water'
        
    } 
}


function MapTile(props){
  //  console.log(props.index)
    return <div 
        className = {`tile ${getTileSprite(props.tile)}`} // JS eval block
        style = {{
            height: SPRITE_SIZE,
            width: SPRITE_SIZE,
          //  resizeMode: "contain"
        }}
    >
       
    </div>
}

function MapRow(props){
    console.log(props.index)
    return <div className = "row" 
        //style = {{
        //width: props.widthMap,
        //height: '400px'
        //}}
        > 
    {
        props.tiles.filter((tile,index) => index < 20).map((tile, index) => <MapTile tile = {tile} index= {index}/>)
    }
    </div>
}


function Map(props){
    return(
    <div 
    
        style = {{
            top: '0px',
            left: '0px',
            position: 'relative',
            width: props.widthMap,
            height: '400px',
            border: '4px solid white', 
        }}>
            {   
                props.tiles.filter((row,index) => index < 10).map((row,index) => <MapRow mapWidth = {props.widthMap} tiles = {row} index = {index}/>)
            }

        </div>
    )
}

function mapStateToProps(state){
    return{
        //tiles: state.map.tiles,
        // widthMap: state.map.widthMap
        ...state.map
    }
}

export default connect(mapStateToProps)(Map)