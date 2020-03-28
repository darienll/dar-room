const initialState = {
    roomsData: [],
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'SET_ROOMS': 
            return {
                ...state,
                roomsData:  action.payload
            }
        default:
            return state;
    }
}