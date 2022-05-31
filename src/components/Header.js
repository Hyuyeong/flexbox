import { Fragment } from 'react';
//import styles from './Header.module.css'
import logo from '../imgs/logo.png';
import user from '../imgs/user.jpg';

const Header = ({}) => {
  return (
    <Fragment>
      <img src={logo} className="logo" alt="logo" />
      <form action="#" className="search">
        <input
          className="search__input"
          type="text"
          placeholder="Search Hotels"
        />
        <button className="search__button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="search__icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>
      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="user-nav__icon"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
          </svg>
          <span className="user-nav__notification">7</span>
        </div>
        <div className="user-nav__icon-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="user-nav__icon"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
          </svg>
          <span className="user-nav__notification">13</span>
        </div>
        <div className="user-nav__user">
          <img className="user-nav__user-photo" src={user} alt="" />
          <span className="user-nav__user-name">jonas</span>
        </div>
      </nav>
    </Fragment>
  );
};
export default Header;
