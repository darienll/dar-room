const initialState = {
    postsData: []
}

export default function(state= initialState, action) {
    // console.log(action.payload.posts)
    switch(action.type) {
        case 'SET_POSTS': 
            return {
                ...state,
                postsData: action.payload,
            }
        case 'ADD_POST':

            // return [
            //     ...state,
            //     {
            //         id : action.payload.id,
            //         title:action.payload.title,
            //         body: action.payload.body
            //     }
            // ]
            return {
                ...state,
                postsData: [...state.postsData, action.payload]
            }
            
        default:
            return state;
    }
}