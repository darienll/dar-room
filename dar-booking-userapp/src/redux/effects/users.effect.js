import { setUsers } from "../actions/users.action";

export function getUsers() {
    return function(dispatch, getState) {
        const host = process.env.REACT_APP_HOST + 'users';
        return fetch(host)
            .then(res => res.json())
            .then(users => {
                if (!users || !users.length) {
                    dispatch(setUsers(null));
                    return;
                }
                console.log(users);
                dispatch(setUsers(users));
            })
            
    }    
}