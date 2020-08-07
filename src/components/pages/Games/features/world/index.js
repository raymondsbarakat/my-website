// rfc for function like this

import React from 'react'
import Player from '../player'
import Map from '../map'
import{ tiles } from '../../data/maps/1'
import store from '../../config/store'
//const tiles = from 

export default function World(props) {
    
    store.dispatch({ type: 'ADD_TILES', payload:{tiles}})  // if you dispatch it doesnt go to redux store we need the reducer to reduce ation to state. 
    return (
        <div
        style ={{ // a JS OBJECT
            margin: '20px auto', // 20 px down and center in the middle of the page
            width: '800px',
            height: '400px',
            position:'relative',
        }}>

                <Map widthMap = '800px'/>
                <Player />
        </div>
    )
}
