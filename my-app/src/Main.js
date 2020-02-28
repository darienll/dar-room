import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import PostsList from './posts/PostsList';
import LikesCounter from './LikesCounter';
import Content  from './layout/Content';
import  Sider  from './layout/Sider';
import  Header from './layout/Header';
import UserAvatar from './user/UserAvatar'
import PostContext from './posts/PostContext';
import { setUser } from './redux/actions/user.actions';
import { getUser } from './redux/effects/user.effects';
import { setPosts } from './redux/actions/post.actions';
import { getPosts } from './redux/effects/post.effects'


// const postsData = [
//     {
//       id: 1, 
//       title: 'My first post',
//       text: 'New Post in the blog',
//       liked: false,
//     },
//     {
//       id: 2,
//       title: 'The second post',
//       text: 'Test text in the 2nd post',
//       liked: false,
//     },
//     {
//       id: 3,
//       title: 'The third post',
//       text: 'Test text in the 3rd post',
//       liked: false,
//     }
//   ];


const Main = ({userData, getUser, isLoading, posts, getPosts}) => {

    // const [posts, setPosts ] = useState(postsData);

    const [likedCount, setLikedCount] = useState(0);

    // const [user, setUser] = useState({
    // firstName : 'Daryn',
    // lastName : 'Amantayev'
    // });

    useEffect(() => {
        setLikedCount(posts.filter(p => p.liked).length);
        getPosts();
    }, [])

    const onLikedClicked = (postId) => {
        console.log(`You liked post ${postId}`);
        const newPosts = posts.map(post => {
            if (postId === post.id) {
            post.liked = !post.liked;
            }
            return post;
        });
        setPosts(newPosts);
    }
    const onNameChangeClick = () => {
        getUser();
    };

    return (
        <div className="App">
            <Header>
                <UserAvatar >
                </UserAvatar>
            </Header>
            <div className="App__main">
                <Sider>
                    <button onClick= {onNameChangeClick} disabled={isLoading}>{isLoading ? 'Loading' : 'Change name' }</button>
                </Sider>
                <Content>
                    <LikesCounter count = {likedCount} />
                    <PostContext.Provider value = { onLikedClicked }>
                        <PostsList items = { posts } />
                    </PostContext.Provider>
                </Content>
            </div>
        </div>
    );
}
const mapStateToProps = state => ({
    userData: state.user.userData,
    isLoading: state.user.loading,
    posts: state.posts.postsData
})
export default connect (mapStateToProps, { setUser, getUser, setPosts, getPosts })(Main);