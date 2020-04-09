import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {
            id: 1,
            message: 'Hey, wassup? You know what? It\'s my first fucking post! Damn, it\'s so cool!',
            likesCount: 24
        },
        {id: 2, message: 'God damn, this is second post! Its works!', likesCount: 73}
    ];
    let postsElement = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
}


export default MyPosts;
;