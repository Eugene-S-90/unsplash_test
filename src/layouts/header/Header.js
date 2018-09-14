import React from 'react';
import Logo from '../../assets/img/logo.svg'
import './Header.less'
import {
    Link,
} from 'react-router-dom'

const Header = () => {
    return (
        <div className="nav-wrapper">
            <div className="nav__left-side"><img className="nav__logo" src={Logo} />
                <div className="nav__left-description-wrapper">
                    <p className="nav__left-description-top">Unspplash</p>
                    <p className="nav__left-description-top">test api</p>
                </div>
            </div>
            <div className="nav__right-side">
                <Link to="/dashboard/photos" className="nav__link">Photo-List</Link>
                <Link to="/dashboard/photos/favorites" className="nav__link">Favorites</Link>
            </div>
        </div>
    );
};
export default Header;