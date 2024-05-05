import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { useStateValue } from "./StateProvider";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Nav() {
  const [{ basket}] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="logo.png" alt=''
          // src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className='header__nav'>
        <Link to={"/"}>
          <div className='header__option'>
            <span className='header__optionLineOne'>
              Welcome
            </span>
            <span className='header__optionLineTwo'>
              HOME
            </span>
          </div>
        </Link>
        <Link to={"/Add"}>
          <div className='header__option'>
            <span className='header__optionLineOne'>
              Admin Only
            </span>
            <span className='header__optionLineTwo'>
              Add Products
            </span>
          </div>
        </Link>
        <Link to={"/login"}>
          <div className='header__option'>
            <span className='header__optionLineOne'>
              Hello Guest!!
            </span>
            <span className='header__optionLineTwo'>
              Sign Up
            </span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>

          </Link>
      </div>
    </div>
  );
}

export default Nav;