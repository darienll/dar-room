export const setPosts = posts => {
    return {
        type: 'SET_POSTS',
        payload: posts,
    }
}
export const addPost = post => {
    console.log(post);
    return {
        type: 'ADD_POST',
        payload: post
    }
}
