import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.img} src='https://cdn.dribbble.com/users/730703/screenshots/6066059/dz_xn3lw0aiyrt6.jpg' alt='imgLogo'/>
            </div>
            <div className={s.descriptionBlock}>ava+description</div>
        </div>
    );
};


export default ProfileInfo;