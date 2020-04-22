import { setUsers, setUser } from "../actions/users.action";

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
                dispatch(setUsers(users));
            })
            
    }    
}

export function getUser(id) {
    return function(dispatch, getState) {
        const host = process.env.REACT_APP_HOST + 'users/' + id;
        return fetch(host) 
            .then(res => res.json())
            .then(user => {
                if (!user) {
                    dispatch(setUser(null));
                    return;
                }
                localStorage.setItem('username', user.username)
                dispatch(setUser(user));
            })
    }
}