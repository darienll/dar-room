import { setRooms} from "../actions/room.actions";

export function getRooms() {
    return function(dispatch, getState) {
        const host = process.env.REACT_APP_HOST + 'rooms';
        return fetch(host)
            .then(res => res.json())
            .then(rooms => {
                if (!rooms || !rooms.length) {
                    dispatch(setRooms(null));
                    return;
                }
                dispatch(setRooms(rooms));
            })
            
    }    
}