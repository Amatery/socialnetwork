import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hey, wassup?' likesCount="5 Likes"/>
                <Post message="You know what? It's my first fucking post! Damn, it's so cool!" likesCount="24 Likes"/>
            </div>
        </div>
    )
}


export default MyPosts;