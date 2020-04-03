const initialState = {
    usersData: [],
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'SET_USERS': 
            return {
                ...state,
                usersData:  action.payload
            }
        default:
            return state;
    }
}