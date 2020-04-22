export const setUsers = users => {
    return {
        type: 'SET_USERS',
        payload: users,
    }
}
export const setUser = user => {
    return {
        type: 'SET_USER',
        payload: user
    }
}

