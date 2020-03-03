import { setPosts } from "../actions/post.actions";

export function getPosts() {
    return function(dispatch, getState) {
        return fetch(' https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                if (!posts || !posts.length) {
                    dispatch(setPosts(null));
                    return;
                }
                console.log(posts);
                posts = posts.slice(0, 5);
                

                dispatch(setPosts(posts));
            })
    }    
}

// export function addPost() {
//     return function(dispatch, getState) {
//         return 
//     }
// }