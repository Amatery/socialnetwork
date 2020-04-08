import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src='https://sun9-65.userapi.com/c858036/v858036255/1166a/h20TbBHI3XI.jpg'/>
            </div>
            <div>ava+description</div>
            <MyPosts/>
        </div>
    );
};


export default Profile;