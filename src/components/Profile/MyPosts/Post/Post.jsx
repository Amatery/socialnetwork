import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://www.washingtonpost.com/graphics/national/security-of-the-internet/glossary/img/hat.jpg'/>

            {props.message}
            <div>
                {props.likesCount}
            </div>
        </div>
    );
}


export default Post;