import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img
                src='https://yt3.ggpht.com/a-/AAuE7mB14E4Unb_EJsgHGROrikWLFdOS8MEYrhCtqw=s900-mo-c-c0xffffffff-rj-k-no'/>
            <div className={s.loginBlock}>
                {props.isAuth ? <div>Logout</div> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}


export default Header;