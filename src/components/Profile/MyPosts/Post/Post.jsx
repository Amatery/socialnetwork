import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://i.pinimg.com/736x/8e/27/58/8e2758a6dd1ec39eef3ccb2cd7ee3df6.jpg'/>

            {props.message}
            <div>
                {props.likesCount}
            </div>
        </div>
    );
}


export default Post;