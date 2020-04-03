import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img
                    src='https://yt3.ggpht.com/a-/AAuE7mB14E4Unb_EJsgHGROrikWLFdOS8MEYrhCtqw=s900-mo-c-c0xffffffff-rj-k-no'/>
            </header>
            <nav className='nav'>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img src='https://greencode.com.ua/wp-content/uploads/2018/02/tablet_smart_phone_hi_tech_icons_hand_96123_1920x1080-min-ru-2-1200x469.jpg'/>
                </div>
                <div>ava+description</div>
                <div>my posts</div>
                <div>new post</div>
                <div>post 1</div>
                <div>post 2</div>
            </div>

        </div>

    );
}
export default App;
