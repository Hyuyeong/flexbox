//import {useState} from 'react'
import '../SCSS/_starbucks.scss';

const Starbucks = ({}) => {
  return (
    <div className="nav">
      <img
        className="nav__logo"
        src="https://www.starbucks.co.nz/content/images/starbucks-logo.svg"
        alt="logo"
      />

      <nav className="nav__list">
        <ul className="nav__item">
          <li>
            <a className="nav__link" href="#menu">
              menu
            </a>
          </li>
          <li>
            <a className="nav__link" href="#coffee_at_home">
              coffee at home
            </a>
          </li>
          <li>
            <a className="nav__link" href="#rewards">
              rewards
            </a>
          </li>
          <li>
            <a className="nav__link" href="#online_store">
              online store
            </a>
          </li>
          <li>
            <a className="nav__link" href="#careers">
              careers
            </a>
          </li>
          <li>
            <a className="nav__link" href="#about_us">
              about us
            </a>
          </li>
        </ul>
      </nav>
      <div className="nav__location">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="nav__location__icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <div className="nav__location__text">Find a Store</div>
      </div>
    </div>
  );
};
export default Starbucks;
