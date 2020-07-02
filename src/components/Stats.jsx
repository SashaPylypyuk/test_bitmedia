import React from 'react';
import { Link } from 'react-router-dom';
import Table from './Table';

export const Stats = () => (
  <>
    <header className="Sheader">
      <h1 className="Sheader__text">
        AppCo
      </h1>
    </header>
    <div className="wrapper">
      <div className="links">
        <Link className="links__item" to="/">
          Main page
        </Link>
        <p className="links__item links__item--active">
          User satistics
        </p>
      </div>
      <h1 className="text--bold">
        Users statissics
      </h1>
      <Table />
    </div>
    <footer className="Sfooter">
      <h1 className="Sfooter__text--logo">
        AppCo
      </h1>
      <p className="Sfooter__text--rights">
        All rights reserved by ThemeTags
      </p>
      <p className="Sfooter__text--copyrights">
        Copyrights © 2019.
      </p>
    </footer>
  </>
);
