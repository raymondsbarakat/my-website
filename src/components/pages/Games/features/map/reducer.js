//reducers map state to props.
const intitialState = { // JS object
   tiles: [],
   // widthMap: '800px',
}

const mapReducer = (state = (intitialState), action) => {
    switch(action.type){
        case 'ADD_TILES':
            return{
                ...action.payload // spread opperator 
            }
        default:
            return state
    }
}

export default mapReducer