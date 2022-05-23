import React from 'react';
import "./Header.css";
import { BsSearch } from "react-icons/bs";
import { GiShoppingCart } from 'react-icons/gi';
import { BiMap } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOutInitiate } from '../../redux/action';

const Header = () => {
    const { user, basket } = useSelector((state) => state.data)

    let dispatch = useDispatch();
    const handleAuth = () => {
        // nếu là user sẽ đăng xuất
        if (user) {
            dispatch(logOutInitiate())
        }
    }
    return (
        <div>
            <nav className='header'>
                <Link to="/">
                    <img src='https://cdn.thukyluat.vn/nhch-images//CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg' className='header-logo' alt='' />
                </Link>
                <div className='header-opion' style={{ marginRight: "-10px" }}>
                    <BiMap />
                </div>
                <div className='header-option'>
                    <span className='header-option1'>Hello</span>
                    <span className='header-option2'>Select Your Address</span>
                </div>
                <div className='search'>
                    <select>
                        <option>All</option>
                    </select>
                    <input type="text" className='searchInput' />
                    <BsSearch className='searchIcon' />
                </div>
                <div className='header-nav'>
                    {/* nếu user = true thì chạy "/" ko thì chạy "./login" */}
                    <Link to={`${user ? "/" : "/login"}`} className='header-link'>
                        <div onClick={handleAuth} className='header-option'>
                            <span className='header-option1'>Hello, {user ? user.email : "Guest"}{" "}</span>
                            <span className='header-option2'>{user ? "Sign Out" : "Sign In"}</span>
                        </div>
                    </Link>
                    <Link to='/orders' className='header-link'>
                        <div className='header-option'>
                            <span className='header-option1'>Returns</span>
                            <span className='header-option2'>& Orders</span>
                        </div>
                    </Link>
                    <Link to='/login' className='header-link'>
                        <div className='header-option'>
                            <span className='header-option1'>Your</span>
                            <span className='header-option2'>Prime</span>
                        </div>
                    </Link>
                    <Link to='/checkout' className='header-link'>
                        <div className='header-basket'>
                            <GiShoppingCart />
                            <span className='header-option2 basket-count'>
                                {basket && basket.length}
                            </span>
                        </div>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;