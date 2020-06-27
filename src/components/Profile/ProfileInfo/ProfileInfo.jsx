import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img className={s.img}
                     src='https://cdn.dribbble.com/users/730703/screenshots/6066059/dz_xn3lw0aiyrt6.jpg' alt='imgLogo'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava+description
            </div>
        </div>
    );
};


export default ProfileInfo;