import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
import imageMobile from '../images/mobile.png';

export const Header = () => (
  <div className="header">
    <p className="header__text--logo header__text">
      AppCo
    </p>
    <h1 className="header__text--head header__text">
      <strong>Brainstorming </strong>
      for desired perfect Usability
    </h1>
    <p className="header__text--description header__text">
      Our design projects are fresh and simple and will
      benefit your business greatly. Learn more about our work!
    </p>
    <Link to="/stats" className="header__button">
      Views Stats
    </Link>
    <img src={imageMobile} alt="phone" className="header__image" />
  </div>
);
