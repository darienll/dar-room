const initialState = {
    usersData: [],
    userData: {
        'username': localStorage.getItem('username'),
    }
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'SET_USERS': 
            return {
                ...state,
                usersData:  action.payload
            }
        case 'SET_USER':
            return {
                ...state,
                userData: action.payload
            }
        default:
            return state;
    }
}