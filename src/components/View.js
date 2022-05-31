//import {useState} from 'react'
//import styles from './View.module.css'

import { Fragment } from 'react';
import img1 from '../imgs/hotel-1.jpg';
import img2 from '../imgs/hotel-2.jpg';
import img3 from '../imgs/hotel-3.jpg';
import img4 from '../imgs/user-1.jpg';
import img5 from '../imgs/user-2.jpg';
import img6 from '../imgs/user-3.jpg';
import img7 from '../imgs/user-4.jpg';

const View = ({}) => {
  return (
    <Fragment>
      <div className="gallery">
        <figure className="gallery__item">
          <img className="gallery__photo" src={img1} alt="hotel img" />
        </figure>
        <figure className="gallery__item">
          <img className="gallery__photo" src={img2} alt="hotel img" />
        </figure>
        <figure className="gallery__item">
          <img className="gallery__photo" src={img3} alt="hotel img" />
        </figure>
      </div>
      <div className="overview">
        <h1 className="overview__heading">hotel las palmas</h1>
        <div className="overview__stars">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="overview__icon"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="overview__icon"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="overview__icon"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="overview__icon"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>

        <div className="overview__location">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="overview__icon"
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
          <button className="btn-inline">Hobsonville, Auckland</button>
        </div>

        <div className="overview__rating">
          <div className="overview__rating-average">8.6</div>
          <div className="overview__rating-count">429 votes</div>
        </div>
      </div>

      <div className="detail">
        <div className="description">
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
            dignissimos debitis ratione sapiente saepe. Accusantium cumque,
            quas, ut corporis incidunt deserunt quae architecto voluptate.
          </p>

          <p className="paragraph">
            Accusantium cumque, quas, ut corporis incidunt deserunt quae
            architecto voluptate delectus, inventore iure aliquid aliquam.
          </p>
          <ul className="list">
            <li className="list__item">
              <span>&#10148;</span> Close to the beach
            </li>
            <li className="list__item">
              <span>&#10148;</span> Close to the beach
            </li>
            <li className="list__item">
              <span>&#10148;</span> Close to the beach
            </li>
            <li className="list__item">
              <span>&#10148;</span> Close to the beach
            </li>
            <li className="list__item">
              <span>&#10148;</span> Close to the beach
            </li>
            <li className="list__item">
              <span>&#10148;</span> Close to the beach
            </li>
            <li className="list__item">
              <span>&#10148;</span> Close to the beach
            </li>
            <li className="list__item">
              <span>&#10148;</span> Close to the beach
            </li>
          </ul>
          <div className="recommend">
            <p className="recommend__count">
              Lucy and 3 other friends recommand this hotel
            </p>
            <div className="recommend__friends">
              <img className="recommend__photo" src={img4} alt="" />
              <img className="recommend__photo" src={img5} alt="" />
              <img className="recommend__photo" src={img6} alt="" />
              <img className="recommend__photo" src={img7} alt="" />
            </div>
          </div>
        </div>
        <div className="user-reviews">user reviews</div>
      </div>
    </Fragment>
  );
};
export default View;
