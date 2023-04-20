import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { auth } from '../api/firebase.config';
import { removeUser } from '../redux/coderSlice';
import { useDispatch } from 'react-redux';
import {
    signOut
} from 'firebase/auth'

const Header = () => {

    const productData = useSelector((state) => state.coder.productData);

    const dispatch = useDispatch();
    const handleSignOut = () => {
        signOut(auth).then(() => {
            dispatch(removeUser())
        }).catch((error) => {
        });
    }

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
                                Cart <span>({productData.length})</span>
                            </div>
                        </Link>

                        <Link to='/login'>
                            <div className="login">
                                Login
                            </div>
                        </Link>
                        <Link to='/'>
                            <li onClick={handleSignOut}>Log Out</li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header