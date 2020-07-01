import React from 'react';
import '../styles/style.css';

export const Footer = () => (
  <footer className="footer">
    <form className="form">
      <input type="email" className="form__text" placeholder="Enter your email"/>
      <button type="button" className="form__button">
        Subscribe
      </button>
    </form>
    <div className="footer__row">
      <p className="footer__text--logo">
        AppCo
      </p>
      <p className="footer__text--right">
        All rights reserved by ThemeTags
      </p>
      <p className="footer__text--copyright">
        Copyrights © 2019.
      </p>
    </div>
  </footer>
);
