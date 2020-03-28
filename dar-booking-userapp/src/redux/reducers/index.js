import { combineReducers } from "redux";
import roomReducer from "./room.reducer";


const appReducers = combineReducers({
    rooms: roomReducer,
    
});

export default appReducers;
