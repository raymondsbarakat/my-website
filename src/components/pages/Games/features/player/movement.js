import React from 'react'
import store from '../../config/store'
import { SPRITE_SIZE , SCREEN_HEIGHT, SCREEN_WIDTH } from '../../config/constants'



export default function handleMovement(player) {
    
    function getNewPosition(direction){
        const oldPos = store.getState().player.position

        switch(direction){
            case 'WEST':
                return [oldPos[0] - SPRITE_SIZE, oldPos[1]]
            case 'EAST':
                return [oldPos[0] + SPRITE_SIZE, oldPos[1]]
            case 'NORTH':
                return [oldPos[0], oldPos[1] - SPRITE_SIZE]
            case 'SOUTH':
                return [oldPos[0], oldPos[1] + SPRITE_SIZE]
            }
    }

    function boundaryCheck(oldPos, newPos){ 
        return (newPos[0] >=0 && newPos[0] <= SCREEN_WIDTH - SPRITE_SIZE) &&
        (newPos[1] >= 0 && newPos[1] <= SCREEN_HEIGHT - SPRITE_SIZE)
       
    }

    function hitObject(oldPos, newPos){
       const tiles = store.getState().map.tiles
       const x = newPos[0]/SPRITE_SIZE
       const y = newPos[1]/SPRITE_SIZE
       
       const nextTile = tiles[y][x]
       return nextTile < 5

    }



    // directionMove takes our oldPosition from the store the newPosition function gives us our new position just add 
    //  
    function directionMove(direction){
           
        const oldPos = store.getState().player.position
        const newPos = getNewPosition(direction)
        if(boundaryCheck(oldPos, newPos) && hitObject(oldPos, newPos)){
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload:{
                position: newPos
            }
        })
    }
    }

    function removeKeyDownListener(){
        console.log("HERE")
        window.removeEventListener('keydown',handleKeyDown)
    }

    function handleKeyDown(event){
        if(window.location.href === "http://localhost:3000/game"){ 
            event.preventDefault()

            console.log(event.keyCode)
            switch(event.keyCode){
                
                default:
                    case 37:
                        return directionMove('WEST')
                    case 38:
                        return directionMove('NORTH')
                    case 39:
                        return directionMove('EAST')
                    case 40:
                        return directionMove('SOUTH')
                    
            }
        }
    }


 
    window.addEventListener('keydown',(event) => {
        handleKeyDown(event)
    })


    return player
}
