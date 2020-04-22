import { combineReducers } from "redux";
import roomReducer from "./room.reducer";
import userReducer from "./user.reducer";


const appReducers = combineReducers({
    rooms: roomReducer,
    users: userReducer,
    
});

export default appReducers;
