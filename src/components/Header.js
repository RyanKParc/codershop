import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="nav-menu">
                    <ul>
                        <Link to='/'>
                            <li>Home</li>
                        </Link>

                        <li>Pages</li>
                        <li>Shop</li>
                        <Link to='/cart'>
                            <div className="cart">
                                Cart
                            </div>
                        </Link>

                        <Link to='/login'>
                            <div className="login">
                                Login
                            </div>
                        </Link>
                    </ul>
                </div>

            </nav>
        </header>
    )
}

export default Header