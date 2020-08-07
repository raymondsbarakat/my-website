//reducers map state to props.
const intitialState = { // JS object
    position: [0,0], //
    spriteLocation: '0px 0px'
}

const playerReducer = (state = intitialState, action) => {
    switch(action.type){
        case 'MOVE_PLAYER':
            return{
                ...action.payload // spread opperator 
            }
        default:
            return state
    }
}

export default playerReducer